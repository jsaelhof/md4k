import { styled } from "@mui/material";
import { animated } from "react-spring";

export const ModalBackdrop = styled(animated.div)(({ theme: { zIndex } }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,70%)",
  zIndex: zIndex.expandedBackdrop,
}));

export const ModalContent = styled(animated.div)(({ theme: { zIndex } }) => ({
  position: "fixed",
  borderRadius: 8,
  width: "90vw",
  height: "calc(100vh - 32px)",
  background: "white",
  overflowY: "scroll",
  zIndex: zIndex.expandedContent,
  left: "4.98vw", // This should be 5vw (1/2 the 10vw the content doesn't fill, to center it) but 5 causes a tear on the edge of the picture background. So does 4.99. No idea why.
  top: 16,

  "@media (max-width: 850px)": {
    left: "1vw",
    width: "98vw",
  },

  "@media (max-width: 414px)": {
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    borderRadius: 0,
  },
}));
