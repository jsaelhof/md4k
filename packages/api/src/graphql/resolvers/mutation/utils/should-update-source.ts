import { Source } from "md4k-constants";

const nonStreamingSources: Source[] = [
  Source.PLEX,
  Source.YOU_TUBE,
  Source.DVD,
];

const flatRateSources: Source[] = [
  Source.NETFLIX,
  Source.DISNEY_PLUS,
  Source.PRIME_VIDEO,
  Source.PARAMOUNT_PLUS,
  Source.APPLE_TV,
];

const adSupportedSources: Source[] = [Source.TUBI_TV];

export const shouldUpdateSource = (
  currentSource: Source,
  availableSources: Source[]
) => {
  const hasAvailableFlatRateSource =
    availableSources.length > 0 &&
    flatRateSources.includes(availableSources[0]);

  const hasAvailableAdSupportedSource =
    availableSources.length > 0 &&
    adSupportedSources.includes(availableSources[0]);

  const hasAnyAvailableSource =
    hasAvailableFlatRateSource || hasAvailableAdSupportedSource;

  const noAvailableSources = availableSources.length === 0;

  const noCurrentSource = currentSource === Source.NONE;

  const currentSourceIsNonStreaming =
    nonStreamingSources.includes(currentSource);

  const currentSourceIsFlatRate = flatRateSources.includes(currentSource);

  const currentSourceIsAdSupported = adSupportedSources.includes(currentSource);

  const currentSourceIsDead =
    (currentSourceIsFlatRate || currentSourceIsAdSupported) &&
    !availableSources.includes(currentSource);

  // Only update the source if:
  //
  // 1. The current source is a streaming source but no streaming sources are found.
  // The source shouldn't change to None if it's a non-streaming source like DVD or PLEX
  // ...those will never be found through the API and we don't want to change that source to None.
  if (currentSourceIsDead && noAvailableSources) return Source.NONE;

  // 2. Available sources exist that are better than the current source:
  // - The current source is none but there is an available source
  // - The current source is a non-streaming source like DVD or PLEX but there is an available (but not ad supported) streaming source
  // - The source is ad-supported and a flatrate source is available FIXME...does this work???
  // - The current source is dead and a streaming service exists
  if (
    [
      noCurrentSource && hasAnyAvailableSource,
      currentSourceIsNonStreaming && hasAvailableFlatRateSource,
      currentSourceIsAdSupported && hasAvailableFlatRateSource,
      currentSourceIsDead && hasAnyAvailableSource,
    ].some((val) => val === true)
  )
    return availableSources[0];

  // If it gets here, then there is no reason to update the source.
  // It should NOT update the source when:
  // - There's no streaming sources and the source is already NONE
  // - There's already a streaming source like Netflix, but there are multiple available sources of which Netflix is one.

  return null;
};
