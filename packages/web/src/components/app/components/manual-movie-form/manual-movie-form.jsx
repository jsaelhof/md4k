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
import { genres, sources } from "md4k-constants";
import { sourceLogos } from "../../../../constants/sources";
import Clear from "@mui/icons-material/Clear";
import isNil from "lodash/isNil";
import { parseRuntime } from "../../../../utils/parse-runtime";
import TextInput from "./components/text-input/text-input.jsx";
import { useI18n } from "../../../../hooks/use-i18n";
import manualMovieFormStrings from "./i18n/i18n";

export const ManualMovieForm = ({
  actionLabel,
  ActionIcon,
  initialState,
  onChange,
  onCancel,
}) => {
  const { t } = useI18n(manualMovieFormStrings);

  const sourceLabels = useMemo(
    () =>
      Object.values(sources).reduce((acc, source) => {
        acc[source] = t(`common:sources.${source}`);
        return acc;
      }, {}),
    [t]
  );

  const genreLabels = useMemo(
    () =>
      Object.values(genres).reduce((acc, genre) => {
        acc[genre] = t(`common:genres.${genre}`);
        return acc;
      }, {}),
    [t]
  );

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
        formattedLabel={t("manual_movie_form:title.label")}
        control={control}
        rules={{
          required: t("manual_movie_form:title.validation"),
          validate: (val) =>
            !!val.trim() || t("manual_movie_form:title.validation"),
        }}
        autoFocus
      />

      <PreviewLayout>
        <TextInput
          label="poster"
          formattedLabel={t("manual_movie_form:poster.label")}
          multiline={true}
          control={control}
          rules={{
            pattern: {
              value: /^https?:\/\//i,
              message: t("manual_movie_form:poster.validation"),
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
          formattedLabel={t("manual_movie_form:background.label")}
          multiline={true}
          control={control}
          rules={{
            pattern: {
              value: /^https?:\/\//i,
              message: t("manual_movie_form:background.validation"),
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
          formattedLabel={t("manual_movie_form:year.label")}
          control={control}
          rules={{
            minLength: {
              value: 4,
              message: t("manual_movie_form:year.validation_length"),
            },
            maxLength: {
              value: 4,
              message: t("manual_movie_form:year.validation_length"),
            },
            pattern: {
              value: /^[12][90]\d{2}$/,
              message: t("manual_movie_form:year.validation_value"),
            },
          }}
        />
      </SmallField>

      <SmallField>
        <TextInput
          label="runtime"
          formattedLabel={t("manual_movie_form:runtime.label")}
          control={control}
          placeholder={t("manual_movie_form:runtime.placeholder")}
          rules={{
            pattern: {
              value: /^(\d:\d{2}|\d{2,3})$/,
              message: t("manual_movie_form:runtime.validation"),
            },
          }}
        />
      </SmallField>

      <SmallField>
        <TextInput
          label="imdbID"
          formattedLabel={t("manual_movie_form:imdbID.label")}
          control={control}
          rules={{
            pattern: {
              value: /^tt\d{7,}$/,
              message: t("manual_movie_form:imdbID.validation"),
            },
          }}
        />
      </SmallField>

      <SmallField>
        <Label htmlFor="genre">{t("manual_movie_form:genre.label")}</Label>
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
        <Label htmlFor="source">{t("manual_movie_form:source.label")}</Label>
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
          {t("manual_movie_form:action.cancel")}
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
