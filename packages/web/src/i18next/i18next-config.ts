import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ICU from "i18next-icu";
import { genreLabels } from "md4k-constants";
import { sourceLabels } from "../constants/sources";

// This function initializes the i18next instance.
// It is used by the main.jsx for the app in the browser and also by the vite-setup.js to setup i18n for the test environment.
export const i18nextConfig = () =>
  i18n
    .use(ICU)
    .use(initReactI18next)
    .init({
      supportedLngs: ["en"],
      lng: "en",
      fallbackLng: "en",
      resources: {
        en: {
          common: {
            // sources and genres are being done here because I want to use the constants on the key side.
            // genreLabels is also used by the backend so I can't completely move it to i18n strings.
            // Therefore, I chose to insert them here into the common namespace in js.
            sources: sourceLabels,
            genres: genreLabels,
          },
        },
      },
      //debug: true,
    });
