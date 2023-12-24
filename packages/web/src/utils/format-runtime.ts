import isNil from "lodash/isNil";

export const formatRuntime = (
  seconds: number | undefined,
  editingFormat = false
) => {
  if (isNil(seconds)) return "";

  const [hours, minutes] = new Date(1000 * seconds)
    .toISOString()
    .substr(12, 4)
    .split(":");
  return editingFormat
    ? `${hours}:${minutes}`
    : hours === "0"
    ? `${minutes}m`
    : `${hours}h ${minutes}m`;
};
