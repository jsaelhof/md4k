import { Button, TextField } from "@mui/material";
import {
  Actions,
  BackgroundPreview,
  Genre,
  Label,
  Layout,
  Preview,
  PreviewLayout,
  SmallField,
  Source,
} from "./manual-movie-form.styles";
import { useState } from "react";
import { genreLabels, genres, sources } from "md4k-constants";
import { sourceLabels, sourceLogos } from "../../../../constants/sources";
import { parseRuntime } from "../../../../utils/parse-runtime";
import Clear from "@mui/icons-material/Clear";
import isNil from "lodash/isNil";
import {formatRuntime} from "../../../../utils/format-runtime.js";

export const ManualMovieForm = ({
  actionLabel,
  ActionIcon,
  initialState,
  onChange,
  onCancel,
}) => {
  // data is the collected form data state.
  // It will be used to determine a diff between the form state and the current movie state in order to determine what to write to the DB.
  const [data, setData] = useState({
    // Set the defaults
    title: null,
    poster: null,
    background: null,
    year: null,
    runtime: null,
    genre: 0,
    source: 0,
    imdbID: null,
    // Overlay the initial state provided to initialize when editing.
    ...initialState,
    // Special case, runtime needs to be formatted from seconds to H:MM format for the form field.
    ...(initialState?.runtime && { runtime: formatRuntime(initialState.runtime, true) })
  });

  const [userErrors, setUserErrors] = useState([]);

  const onStringValueChange = (key, value) => setData({ ...data, [key]: isNil(value) ? null : value });

  return (
    <Layout>
      <div>
        <Label htmlFor="Title">Title</Label>
        <TextField
          id="Title"
          inputProps={{ "aria-label": "Title" }}
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Title"
          value={data.title ?? ""}
          onChange={({ target }) => onStringValueChange("title", target.value)}
          error={userErrors.includes("Title")}
          helperText={userErrors.includes("Title") && "Title is required"}
          required
          autoFocus
        />
      </div>

      <PreviewLayout>
        <div>
          <Label htmlFor="Poster">Poster URL</Label>
          <TextField
            id="Poster"
            inputProps={{ "aria-label": "Poster" }}
            fullWidth
            multiline
            rows={3}
            size="small"
            variant="outlined"
            placeholder="Poster URL"
            value={data.poster ?? ""}
            onChange={({ target }) =>
              onStringValueChange("poster", target.value)
            }
            error={userErrors.includes("Poster")}
            helperText={
              userErrors.includes("Poster") &&
              "Poster must start with http(s)://"
            }
          />
        </div>

        <Preview
          data-testid="Preview"
          sx={{ backgroundImage: `url(${data.poster})` }}
        />
      </PreviewLayout>

      <PreviewLayout>
        <div>
          <Label htmlFor="Background">Background URL</Label>
          <TextField
            id="Background"
            inputProps={{ "aria-label": "Background" }}
            fullWidth
            multiline
            rows={3}
            size="small"
            variant="outlined"
            placeholder="Background URL"
            value={data.background ?? ""}
            onChange={({ target }) =>
              onStringValueChange("background", target.value)
            }
            error={userErrors.includes("Background")}
            helperText={
              userErrors.includes("Background") &&
              "Background must start with http(s)://"
            }
          />
        </div>

        <BackgroundPreview
          data-testid="BackgroundPreview"
          sx={{ backgroundImage: `url(${data.background})` }}
        />
      </PreviewLayout>

      <SmallField>
        <Label htmlFor="Year">Year</Label>
        <TextField
          id="Year"
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Year"
          value={data.year ?? ""}
          onChange={({ target }) => {
            // Restrict to only digits or an empty string
            if (
              target.value.length === 0 ||
              target.value.split().every((v) => /\d/.test(v))
            ) {
              onStringValueChange("year", target.value)
            }
          }}
          inputProps={{
            "aria-label": "Year",
            maxLength: 4,
          }}
          error={userErrors.includes("Year")}
          helperText={userErrors.includes("Year") && "Year must be 4 digits"}
        />
      </SmallField>

      <SmallField>
        <Label htmlFor="Runtime">Runtime</Label>
        <TextField
          id="Runtime"
          fullWidth
          size="small"
          variant="outlined"
          value={data.runtime ?? ""}
          placeholder="Mins or H:MM"
          onChange={({ target }) => {
            // Restrict to only digits, : or an empty string
            // Not perfect since it should only allow H:MM, not HH:M or ::: etc
            if (
              target.value.length === 0 ||
              target.value.split().every((v) => /[\d:]/.test(v))
            ) {
              onStringValueChange("runtime", target.value)
            }
          }}
          inputProps={{
            "aria-label": "Runtime",
            maxLength: 4,
          }}
          error={userErrors.includes("Runtime")}
          helperText={
            userErrors.includes("Runtime") &&
            "Runtime must be H:MM, MM, or MMM format"
          }
        />
      </SmallField>

      <SmallField>
        <Label htmlFor="IMDBId">IMDB Id</Label>
        <TextField
          id="IMDBId"
          inputProps={{ "aria-label": "IMDBId" }}
          fullWidth
          size="small"
          variant="outlined"
          placeholder="IMDB Id"
          value={data.imdbID ?? ""}
          onChange={({ target }) => onStringValueChange("imdbID", target.value)}
          error={userErrors.includes("IMDBId")}
          helperText={
            userErrors.includes("IMDBId") &&
            "IMDB Id must be 'tt0000000' format"
          }
        />
      </SmallField>

      <SmallField>
        <Label htmlFor="Genre">Genre</Label>
        <Genre
          label="Genre"
          fullWidth
          onChange={(genre) => setData({ ...data, genre })}
          value={data.genre}
          values={genres}
          labels={genreLabels}
          hideLabelForSelection={false}
        />
      </SmallField>

      <SmallField>
        <Label htmlFor="Source">Source</Label>
        <Source
          label="Source"
          fullWidth
          onChange={(source) => setData({ ...data, source })}
          value={data.source}
          values={sources}
          labels={sourceLabels}
          images={sourceLogos}
        />
      </SmallField>

      <Actions>
        <Button variant="outlined" startIcon={<Clear />} onClick={onCancel}>
          Cancel
        </Button>

        <Button
          fullWidth
          color="primary"
          variant="contained"
          startIcon={<ActionIcon />}
          onClick={() => {
            const errors = [];
            if (!data.title || data.title?.trim().length === 0) {
              errors.push("Title");
            }

            if (
              data.poster?.trim().length > 0 &&
              !/^https?:\/\//i.test(data.poster)
            ) {
              errors.push("Poster");
            }

            if (
              data.background?.trim().length > 0 &&
              !/^https?:\/\//i.test(data.background)
            ) {
              errors.push("Background");
            }

            if (data.year?.trim().length > 0 && !/^\d{4}$/.test(data.year)) {
              errors.push("Year");
            }

            if (
              data.imdbID?.trim().length > 0 &&
              !/^tt\d{7}$/.test(data.imdbID)
            ) {
              errors.push("IMDBId");
            }

            if (
              data.runtime?.trim().length > 0 &&
              !(
                /^\d{1}:\d{2}$/.test(data.runtime) ||
                /^\d{2,3}$/.test(data.runtime)
              )
            ) {
              errors.push("Runtime");
            }

            if (errors.length === 0) {
              const diff = ["imdbID", "title", "poster", "background", "year", "runtime", "genre", "source"].reduce((diff, key) => {
                // Diff the string fields.
                // If they have a non-null value with a trimmed length greater than 0
                // AND that value is different than the initial value, then a change was made.
                if (
                  !["genre", "source", "runtime"].includes(key) &&
                  !isNil(data[key]) &&
                  initialState?.[key] !== data[key]?.trim()
                ) {
                  diff[key] = data[key] ? data[key].trim() : null;
                }

                // Do the same for runtime, but it needs to be parsed first.
                if (
                  key === "runtime" &&
                  !isNil(data[key]) &&
                  initialState?.[key] !== parseRuntime(data[key]?.trim())
                  ) {
                  diff[key] = data[key] ? parseRuntime(data[key].trim()) : null;
                }

                // These fields don't get trimmed since they are just integers all the time.
                if (
                  ["genre", "source"].includes(key) &&
                  !isNil(data[key]) &&
                  initialState?.[key] !== data[key]
                ) {
                  diff[key] = data[key];
                }

                return diff;
              }, {});

              onChange(diff);
            } else {
              setUserErrors(errors);
            }
          }}
        >
          {actionLabel}
        </Button>
      </Actions>
    </Layout>
  );
};
