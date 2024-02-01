/* eslint-disable @typescript-eslint/no-empty-function */
import mediaQuery from "css-mediaquery";

// Mocks a window.matchMedia call using the given width.
// Uses a third-party dependency (css-mediaquery).
export const createMatchMedia =
  (width: number) =>
  // @ts-expect-error Only returning a partial MediaQueryList object here which is enough for now.
  (query: string): MediaQueryList => ({
    matches: mediaQuery.match(query, {
      width,
    }),
    addListener: (): void => {},
    removeListener: (): void => {},
  });
