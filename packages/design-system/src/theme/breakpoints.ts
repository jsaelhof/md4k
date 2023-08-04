export type Breakpoints = {
  /**
   * 0px
   */
  small: string;
  /**
   * 500px
   */
  medium: string;
  /**
   * 1024px
   */
  large: string;
};

export const breakpoints: Breakpoints = {
  small: "0px",
  medium: "500px",
  large: "1024px",
};

export type MediaQueries = {
  /**
   * (min-width: ${breakpoints.small})
   */
  small: string;
  /**
   * (min-width: ${breakpoints.medium})
   */
  medium: string;
  /**
   * (min-width: ${breakpoints.large})
   */
  large: string;
};

export const mediaQueries: MediaQueries = {
  small: `(min-width: ${breakpoints.small})`,
  medium: `(min-width: ${breakpoints.medium})`,
  large: `(min-width: ${breakpoints.large})`,
};
