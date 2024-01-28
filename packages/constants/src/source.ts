export enum Source {
  NONE = 0,
  NETFLIX = 1,
  PRIME_VIDEO = 2,
  APPLE_TV = 3,
  PLEX = 4,
  DVD = 5,
  DISNEY_PLUS = 6,
  TUBI_TV = 7,
}

// TS Enum like `Source` has keys defined both ways (None: 0 and 0: "None").
// When we need to iterate over all the sources, we need just the enum values that are numbers.
export const sources: Source[] = Object.values(Source).reduce<Source[]>(
  (acc, value) => {
    if (!isNaN(Number(value))) acc.push(value as Source);
    return acc;
  },
  []
);
