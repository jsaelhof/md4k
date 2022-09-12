/* eslint-disable @typescript-eslint/no-empty-function */
import mediaQuery from "css-mediaquery";

// Mocks a window.matchMedia call using the given width.
// Uses a third-party dependency (css-mediaquery).
export const createMatchMedia = (width) => (query) => ({
  matches: mediaQuery.match(query, {
    width,
  }),
  addListener: () => {},
  removeListener: () => {},
});
