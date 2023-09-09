import { useForm, Controller } from "react-hook-form";
import {
  Actions,
  BackgroundPreview,
  Genre,
  Label,
  MovieForm,
  Preview,
  PreviewLayout,
  SmallField,
  Source,
} from "./manual-movie-form.styles";
import { Button } from "@mui/material";
import { useMemo } from "react";
import { formatRuntime } from "../../../../utils/format-runtime.js";
import { genreLabels, genres, sources } from "md4k-constants";
import { sourceLabels, sourceLogos } from "../../../../constants/sources";
import Clear from "@mui/icons-material/Clear";
import isNil from "lodash/isNil";
import { parseRuntime } from "../../../../utils/parse-runtime";
import TextInput from "./components/text-input/text-input.jsx";

export const ManualMovieForm = ({
  actionLabel,
  ActionIcon,
  initialState,
  onChange,
  onCancel,
}) => {
  const defaultValues = useMemo(
    () => ({
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
      ...(initialState?.runtime && {
        runtime: formatRuntime(initialState.runtime, true),
      }),
    }),
    [initialState]
  );

  const { handleSubmit, watch, control } = useForm({
    defaultValues,
    mode: "onSubmit",
  });

  const [posterValue, backgroundValue] = watch(["poster", "background"]);

  const onSubmit = (data) => {
    const diff = [
      "imdbID",
      "title",
      "poster",
      "background",
      "year",
      "runtime",
      "genre",
      "source",
    ].reduce((diff, key) => {
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
  };

  return (
    <MovieForm onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="title"
        formattedLabel="Title"
        control={control}
        rules={{
          required: "Title is required",
          validate: (val) => !!val.trim() || "Title is required",
        }}
        autoFocus
      />

      <PreviewLayout>
        <TextInput
          label="poster"
          formattedLabel="Poster URL"
          multiline={true}
          control={control}
          rules={{
            pattern: {
              value: /^https?:\/\//i,
              message: "Poster must start with http(s)://",
            },
          }}
        />

        <Preview
          data-testid="Preview"
          sx={{ backgroundImage: `url(${posterValue})` }}
        />
      </PreviewLayout>

      <PreviewLayout>
        <TextInput
          label="background"
          formattedLabel="Background URL"
          multiline={true}
          control={control}
          rules={{
            pattern: {
              value: /^https?:\/\//i,
              message: "Background must start with http(s)://",
            },
          }}
        />

        <BackgroundPreview
          data-testid="BackgroundPreview"
          sx={{ backgroundImage: `url(${backgroundValue})` }}
        />
      </PreviewLayout>

      <SmallField>
        <TextInput
          label="year"
          formattedLabel="Year"
          control={control}
          rules={{
            minLength: { value: 4, message: "Year must be 4 digits" },
            maxLength: { value: 4, message: "Year must be 4 digits" },
            pattern: {
              value: /^[12][90]\d{2}$/,
              message: "Year must be 19xx or 20xx format",
            },
          }}
        />
      </SmallField>

      <SmallField>
        <TextInput
          label="runtime"
          formattedLabel="Runtime"
          control={control}
          placeholder="Mins or H:MM"
          rules={{
            pattern: {
              value: /^(\d:\d{2}|\d{2,3})$/,
              message: "Runtime must be in minutes or h:mm format",
            },
          }}
        />
      </SmallField>

      <SmallField>
        <TextInput
          label="imdbID"
          formattedLabel="IMDB ID"
          control={control}
          rules={{
            pattern: {
              value: /^tt\d{7,}$/,
              message: "IMDB Id must be 'tt0000000' format",
            },
          }}
        />
      </SmallField>

      <SmallField>
        <Label htmlFor="genre">Genre</Label>
        <Controller
          name="genre"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <Genre
              label="genre"
              fullWidth
              values={genres}
              labels={genreLabels}
              hideLabelForSelection={false}
              {...field}
              inputRef={ref}
            />
          )}
        />
      </SmallField>

      <SmallField>
        <Label htmlFor="source">Source</Label>
        <Controller
          name="source"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <Source
              label="source"
              fullWidth
              values={sources}
              labels={sourceLabels}
              images={sourceLogos}
              {...field}
              inputRef={ref}
            />
          )}
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
          type="submit"
        >
          {actionLabel}
        </Button>
      </Actions>
    </MovieForm>
  );
};
