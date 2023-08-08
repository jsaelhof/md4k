import lodash from "lodash";
import { fromTMDBProvider } from "md4k-constants";

const { isNil } = lodash;

export const toSubscribedSources = (providerData) =>
  (providerData?.results?.CA?.flatrate ?? [])
    .map(({ provider_name }) => fromTMDBProvider[provider_name])
    .filter((provider_name) => !isNil(provider_name));
