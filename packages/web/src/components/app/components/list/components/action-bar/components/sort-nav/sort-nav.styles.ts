import { Theme, styled } from "@mui/material";

export const SortNavList = styled("ul")(
  ({ theme: { breakpoints, spacing } }) => ({
    flexGrow: 1,
    display: "flex",
    padding: 0,
    alignItems: "baseline",
    justifyContent: "flex-start",

    [breakpoints.down(720)]: {
      justifyContent: "center",
      marginTop: spacing(4),
      marginBottom: 0,
    },
  })
);

export const SortNavListItem = styled("li")(
  ({ theme: { palette, spacing } }) => ({
    listStyleType: "none",
    marginLeft: spacing(2),
    fontSize: "0.8rem",
    cursor: "pointer",
    color: palette.grey[700],
    paddingBottom: spacing(0.5),

    ":first-of-type": {
      marginLeft: 0,
    },
  })
);

export const sortNavSelectedItem = ({ breakpoints, palette }: Theme) =>
  ({
    fontSize: "1rem",
    color: "initial",
    borderBottom: `1px solid ${palette.accent}`,

    // In the current nav, there is a tiny issue with the runtime item (because its the the longest).
    // When active, it takes up just a bit too much room at 375px and causes the direction arrow to line break.
    // This just fixes that and maybe be able to be removed in the future if the nav items change.
    [breakpoints.down(414)]: {
      fontSize: "0.95rem",
    },
  } as const);

export const sortOrderIcon = {
  verticalAlign: "middle",
  paddingBottom: 2,
  marginLeft: 4,
};
