import { sources } from "md4k-constants";

const nonStreamingSources = [sources.NONE, sources.PLEX, sources.DVD];

export const shouldUpdateSource = (currentSource, availableSources) => {
  // Only update the source if:
  //
  // 1. The current source is a streaming source but no streaming sources are found.
  // The source shouldn't change to None if it's a non-streaming source like DVD or PLEX
  // ...those will never be found through the API and we don't want to change that source to None.
  //
  // 2. Available sources exist that are better than the current source:
  // - There is no source
  // - The source is a non-streaming source like DVD or PLEX
  //
  // It should NOT update the source when:
  // - There's no streaming sources and the source is already NONE
  // - There's already a streaming source like Netflix, but there are multiple available sources of which Netlfix is one.

  if (
    availableSources.length === 0 &&
    !nonStreamingSources.includes(currentSource)
  ) {
    return sources.NONE;
  }

  if (
    availableSources.length &&
    (nonStreamingSources.includes(currentSource) ||
      !availableSources.includes(currentSource))
  ) {
    return availableSources[0];
  }

  // We will get to this point if there are availableSources and the currentSource is a streaming source
  // (ex: availableSources is [Disney, Netflix] and currentSource is Netflix). In this case, we don't want
  // to change from one provider to another...it's valid but a bit pointless.
  return null;
};
