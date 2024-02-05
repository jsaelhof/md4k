import { IconButton, styled } from "@mui/material";
import { app } from "../../../../../../constants/app";
import { keyframes } from "@emotion/react";

interface SearchLayoutProps {
  $shadow: boolean;
}

export const SearchLayout = styled("div")<SearchLayoutProps>(
  ({ theme: { zIndex, palette }, $shadow }) => ({
    display: "flex",
    justifyContent: "center",
    position: "sticky",
    top: app.TITLE_BAR_HEIGHT,
    backgroundColor: palette.foundation,
    zIndex: zIndex.stickyBar,
    ...($shadow && {
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    }),

    // The negative margins here allow the scroll shadow to stretch to the edges of the screen.
    // The padding replicates the spacing of the page layout inside the container
    margin: `0 -${app.LIST_MARGIN}px`,
    padding: `0 ${app.LIST_MARGIN}px`,

    "@media (max-width: 500px)": {
      margin: `0 -${app.LIST_MARGIN_MOBILE}px`,
      padding: `0 ${app.LIST_MARGIN_MOBILE}px`,
    },
  })
);

export const SearchInput = styled("div")(({ theme: { spacing } }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(0, 600px) 100px",
  gap: spacing(1),
  alignItems: "center",
  paddingTop: spacing(4),
  paddingBottom: spacing(6),
}));

export const SearchStatus = styled("div")(({ theme: { spacing } }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: spacing(4),
  gap: spacing(1),
}));

const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export const Searching = styled("div")(({ theme: { spacing, palette } }) => ({
  display: "flex",
  alignItems: "center",
  gap: spacing(1),
  color: palette.grey[700],

  "& :first-child": {
    transformOrigin: "center",
    animationName: spinner,
    animationDuration: "2000ms",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  },
}));

export const NoMoviesFound = styled("div")(({ theme: { palette } }) => ({
  color: palette.grey[700],
  textAlign: "center",
  lineHeight: "1.75em",

  "& svg": {
    fontSize: "2.5em",
  },
}));

export const CloseIconButton = styled(IconButton)<{ $visible: boolean }>(
  ({ $visible }) => ({
    marginRight: "-8px",
    visibility: $visible ? "visible" : "hidden",
  })
);
