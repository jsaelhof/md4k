import { useTranslation } from "react-i18next";

export const useI18n = (resource) => {
  // Get the namespaces in the resource under "en". This is typically a single key whose value is the object of translations.
  // In order for translations to work, each language needs to have the same namespace (ex: { en: { myStrings }, fr: { myStrings } } }.
  const resourceNamespaces = Object.keys(resource?.en || {});

  // This is the one place that we want to allow useTranslation
  const translationResponse = useTranslation(resourceNamespaces, {
    useSuspense: false,
  });

  const {
    i18n: { hasResourceBundle, addResourceBundle, language },
  } = translationResponse;

  // Loop over the namespaces and load each if required.
  resourceNamespaces.forEach((ns) => {
    !hasResourceBundle(language, ns) &&
      addResourceBundle(language, ns, resource?.[language]?.[ns], true);
  });

  return translationResponse;
};
