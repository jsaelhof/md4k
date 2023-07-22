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
import { genreLabels, genres } from "md4k-constants";
import { sourceLabels, sourceLogos } from "../../../../constants/sources";
import { sources } from "md4k-constants";
import { parseRuntime } from "../../../../utils/parse-runtime";
import Clear from "@mui/icons-material/Clear";

export const ManualMovieForm = ({
  actionLabel,
  ActionIcon,
  initialState,
  onChange,
  onCancel,
}) => {
  const [title, setTitle] = useState(initialState?.title ?? "");
  const [poster, setPoster] = useState(initialState?.poster ?? "");
  const [background, setBackground] = useState(initialState?.background ?? "");
  const [year, setYear] = useState(initialState?.year ?? "");
  const [runtime, setRuntime] = useState(initialState?.runtime ?? "");
  const [genre, setGenre] = useState(initialState?.genre ?? null);
  const [source, setSource] = useState(initialState?.source ?? null);
  const [imdbID, setImdbID] = useState(initialState?.imdbID ?? "");
  const [userErrors, setUserErrors] = useState([]);

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
          value={title}
          onChange={({ target }) => setTitle(target.value)}
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
            value={poster}
            onChange={({ target }) => setPoster(target.value)}
            error={userErrors.includes("Poster")}
            helperText={
              userErrors.includes("Poster") &&
              "Poster must start with http(s)://"
            }
          />
        </div>

        <Preview
          data-testid="Preview"
          sx={{ backgroundImage: `url(${poster})` }}
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
            value={background}
            onChange={({ target }) => setBackground(target.value)}
            error={userErrors.includes("Background")}
            helperText={
              userErrors.includes("Background") &&
              "Background must start with http(s)://"
            }
          />
        </div>

        <BackgroundPreview
          data-testid="BackgroundPreview"
          sx={{ backgroundImage: `url(${background})` }}
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
          value={year}
          onChange={({ target }) => {
            // Restrict to only digits or an empty string
            if (
              target.value.length === 0 ||
              target.value.split().every((v) => /\d/.test(v))
            ) {
              setYear(target.value);
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
          value={runtime}
          placeholder="Mins or H:MM"
          onChange={({ target }) => {
            // Restrict to only digits, : or an empty string
            // Not perfect since it should only allow H:MM, not HH:M or ::: etc
            if (
              target.value.length === 0 ||
              target.value.split().every((v) => /[\d:]/.test(v))
            ) {
              setRuntime(target.value);
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
          value={imdbID}
          onChange={({ target }) => setImdbID(target.value)}
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
          onChange={setGenre}
          value={genre}
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
          onChange={setSource}
          value={source}
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
            if (!title || title.trim().length === 0) {
              errors.push("Title");
            }

            if (poster && !/^https?:\/\//i.test(poster)) {
              errors.push("Poster");
            }

            if (background && !/^https?:\/\//i.test(background)) {
              errors.push("Background");
            }

            if (year && !/^\d{4}$/.test(year)) {
              errors.push("Year");
            }

            if (imdbID && !/^tt\d{7}$/.test(imdbID)) {
              errors.push("IMDBId");
            }

            if (
              runtime &&
              !(/^\d{1}:\d{2}$/.test(runtime) || /^\d{2,3}$/.test(runtime))
            ) {
              errors.push("Runtime");
            }

            if (errors.length === 0) {
              onChange({
                ...(imdbID && { imdbID: imdbID?.trim() }),
                ...(title && { title: title?.trim() }),
                ...(poster && { poster: poster?.trim() }),
                ...(year && { year: year?.trim() }),
                ...(background && { background: background?.trim() }),
                ...(source && { source }),
                ...(genre && { genre }),
                ...(runtime && { runtime: parseRuntime(runtime) }),
              });
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
