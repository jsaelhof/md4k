import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ICU from "i18next-icu";
import resources from "../__generated__/resources";
import { TFunction } from "i18next";

// This function initializes the i18next instance.
// It is used by the main.jsx for the app in the browser and also by the vite-setup.js to setup i18n for the test environment.
export const i18nextConfig = (): Promise<TFunction> =>
  i18n
    .use(ICU)
    .use(initReactI18next)
    .init({
      supportedLngs: ["en"],
      lng: "en",
      fallbackLng: "en",
      resources: {
        en: resources,
      },
    });
