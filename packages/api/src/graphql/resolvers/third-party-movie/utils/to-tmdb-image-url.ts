const TMDB_IMAGE_URL = "http://image.tmdb.org/t/p/%size%%path%";

export const toTMDBImageUrl = (
  path?: string,
  size: "original" | "w185" = "original"
) =>
  path ? TMDB_IMAGE_URL.replace("%size%", size).replace("%path%", path) : null;
