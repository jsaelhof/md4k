import lodash from "lodash";
import { fromTMDBProvider } from "md4k-constants";

const { isNil } = lodash;

export const toSubscribedSources = (providerData) =>
  [
    // Prioritize flatrate services over ad supported.
    ...(providerData?.results?.CA?.flatrate ?? []),
    ...(providerData?.results?.CA?.ads ?? []),
  ]
    .map(({ provider_name }) => fromTMDBProvider[provider_name])
    .filter((provider_name) => !isNil(provider_name));
