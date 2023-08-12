export const sources = Object.freeze({
  NONE: 0,
  NETFLIX: 1,
  PRIME_VIDEO: 2,
  APPLE_TV: 3,
  PLEX: 4,
  DVD: 5,
  DISNEY_PLUS: 6,
  TUBI_TV: 7,
});

export const fromTMDBProvider = Object.freeze({
  "Disney Plus": sources.DISNEY_PLUS,
  Netflix: sources.NETFLIX,
  "Amazon Prime Video": sources.PRIME_VIDEO,
  "Apple TV Plus": sources.APPLE_TV,
  "Tubi TV": sources.TUBI_TV,
});
