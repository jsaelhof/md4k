import { useForm, Controller } from "react-hook-form";
import {
  Actions,
  BackgroundPreview,
  Label,
  MovieForm,
  Preview,
  PreviewLayout,
  SmallField,
} from "./manual-movie-form.styles";
import { Button } from "@mui/material";
import React, { ReactElement, useMemo } from "react";
import { formatRuntime } from "../../../../utils/format-runtime";
import { genres, sources } from "md4k-constants";
import { sourceLogos } from "../../../../constants/sources";
import Clear from "@mui/icons-material/Clear";
import isNil from "lodash/isNil";
import { parseRuntime } from "../../../../utils/parse-runtime";
import TextInput from "./components/text-input/text-input.jsx";
import { Movie } from "../../../../__generated__/graphql";
import { SvgIconComponent } from "@mui/icons-material";
import { MovieFormFields } from "./types";
import ListSelect from "./components/list-select/list-select";
import { useTranslation } from "react-i18next";

export type ManualMovieFormProps = {
  actionLabel: string;
  ActionIcon: SvgIconComponent;
  initialState?: Omit<Movie, "id" | "title" | "list"> & { title?: string }; // Title needs to be optional for new movies.
  onChange: (movie: Omit<Movie, "id">) => void;
  onCancel: () => void;
};

export const ManualMovieForm = ({
  actionLabel,
  ActionIcon,
  initialState,
  onChange,
  onCancel,
}: ManualMovieFormProps): ReactElement => {
  const { t } = useTranslation(["manual_movie_form", "common"]);

  const defaultValues = useMemo(
    () => ({
      poster: null,
      background: null,
      year: null,
      genre: 0,
      source: 0,
      imdbID: null,
      // Overlay the initial state provided to initialize when editing.
      ...initialState,
      // Special case, runtime needs to be formatted from seconds to H:MM format for the form field.
      runtime: initialState?.runtime
        ? formatRuntime(initialState.runtime, true)
        : null,
    }),
    [initialState]
  );

  // Runtime is forced to a string | null in the form. It will be converted back to a number on submit but in the meantime,
  // this can't use the Movie type directly because it expects runtime to be a number.
  const { handleSubmit, watch, control } = useForm<MovieFormFields>({
    defaultValues,
    mode: "onSubmit",
  });

  const [posterValue, backgroundValue] = watch(["poster", "background"]);

  const onSubmit = (data: MovieFormFields): void => {
    const diff: ManualMovieFormProps["initialState"] = {};

    // Diff the title. The title can't be an empty string due to validation.
    if (initialState?.title !== data.title.trim()) diff.title = data.title;

    // Diff the string fields.
    // If they have a non-null value with a trimmed length greater than 0
    // AND that value is different than the initial value, then a change was made.
    // These string checks rely on an empty string being falsy (hence the || instead of ??)
    const stringFields = [
      "imdbID",
      "poster",
      "background",
      "year",
    ] as (keyof Pick<Movie, "imdbID" | "poster" | "background" | "year">)[];

    stringFields.forEach((key) => {
      if (!isNil(data[key]) && initialState?.[key] !== data[key]?.trim()) {
        diff[key] = data[key]?.trim() || null;
      }
    });

    // Do the same for runtime, but it needs to be parsed first.
    if (
      !isNil(data.runtime) &&
      initialState?.runtime !== parseRuntime(data.runtime.trim())
    )
      diff.runtime = data.runtime.trim()
        ? parseRuntime(data.runtime.trim())
        : null;

    // These fields don't get trimmed since they are just integers all the time.
    const numericFields = ["genre", "source"] as (keyof Pick<
      Movie,
      "genre" | "source"
    >)[];

    numericFields.forEach((key) => {
      if (!isNil(data[key]) && initialState?.[key] !== data[key]) {
        diff[key] = data[key];
      }
    });

    onChange(diff as Omit<Movie, "id">);
  };

  return (
    <MovieForm onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        controllerProps={{
          name: "title",
          control,
          rules: {
            required: t("manual_movie_form:title.validation"),
            validate: (val) => !!val || t("manual_movie_form:title.validation"),
          },
        }}
        formattedLabel={t("manual_movie_form:title.label")}
        autoFocus
      />

      <PreviewLayout>
        <TextInput
          controllerProps={{
            name: "poster",
            control,
            rules: {
              pattern: {
                value: /^https?:\/\//i,
                message: t("manual_movie_form:poster.validation"),
              },
            },
          }}
          formattedLabel={t("manual_movie_form:poster.label")}
          multiline={true}
        />

        <Preview
          data-testid="Preview"
          sx={{ backgroundImage: `url(${posterValue})` }}
        />
      </PreviewLayout>

      <PreviewLayout>
        <TextInput
          controllerProps={{
            name: "background",
            control,
            rules: {
              pattern: {
                value: /^https?:\/\//i,
                message: t("manual_movie_form:background.validation"),
              },
            },
          }}
          formattedLabel={t("manual_movie_form:background.label")}
          multiline={true}
        />

        <BackgroundPreview
          data-testid="BackgroundPreview"
          sx={{ backgroundImage: `url(${backgroundValue})` }}
        />
      </PreviewLayout>

      <SmallField>
        <TextInput
          controllerProps={{
            name: "year",
            control,
            rules: {
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
            },
          }}
          formattedLabel={t("manual_movie_form:year.label")}
        />
      </SmallField>

      <SmallField>
        <TextInput
          controllerProps={{
            name: "runtime",
            control,
            rules: {
              pattern: {
                value: /^(\d:\d{2}|\d{2,3})$/,
                message: t("manual_movie_form:runtime.validation"),
              },
            },
          }}
          formattedLabel={t("manual_movie_form:runtime.label")}
          placeholder={t("manual_movie_form:runtime.placeholder")}
        />
      </SmallField>

      <SmallField>
        <TextInput
          controllerProps={{
            name: "imdbID",
            control,
            rules: {
              pattern: {
                value: /^tt\d{7,}$/,
                message: t("manual_movie_form:imdbID.validation"),
              },
            },
          }}
          formattedLabel={t("manual_movie_form:imdbID.label")}
        />
      </SmallField>

      <SmallField>
        <Label htmlFor="genre">{t("manual_movie_form:genre.label")}</Label>
        <Controller
          name="genre"
          control={control}
          render={({ field: { ref, ...field } }): ReactElement => (
            <ListSelect
              label="genre"
              values={genres}
              listSelectItemProps={{
                variant: "genres",
              }}
              selectProps={{
                inputRef: ref,
                fullWidth: true,
              }}
              {...field}
            />
          )}
        />
      </SmallField>

      <SmallField>
        <Label htmlFor="source">{t("manual_movie_form:source.label")}</Label>
        <Controller
          name="source"
          control={control}
          render={({ field: { ref, ...field } }): ReactElement => (
            <ListSelect
              label="source"
              values={sources}
              listSelectItemProps={{
                variant: "sources",
                images: sourceLogos,
              }}
              selectProps={{
                inputRef: ref,
                fullWidth: true,
              }}
              {...field}
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
