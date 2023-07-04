import { useSpring } from "react-spring";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import FullDetail from "../full-detail/full-detail";
import { ModalBackdrop, ModalContent } from "./full-detail-modal.styles";

const FullDetailModal = ({
  preload,
  open,
  centerPoint,
  onClose,
  ...passThroughProps
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const close = useCallback(() => {
    setIsClosing(true);
    onClose();
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const expandedBackdropSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
  });

  const expandedSpring = useSpring({
    from: {
      transform: "scale3d(0,0,0)",
      opacity: 0,
    },
    to: {
      transform: open ? "scale3d(1,1,1)" : "scale3d(0,0,0)",
      opacity: open ? 1 : 0,
      transformOrigin: centerPoint && `${centerPoint.x}px ${centerPoint.y}px`,
    },
    onRest: () => {
      if (isClosing) {
        setIsClosing(false);
      }
    },
  });

  return (
    <>
      {(open || isClosing) && (
        <ModalBackdrop
          data-testid="backdrop"
          style={expandedBackdropSpring}
          onClick={close}
        />
      )}

      {/* 
        Mount this on focus to preload the panel, also keep it open when open OR is animating closed.
        When just focused, it's 0x0. When expanded it animates to full size.
      */}
      {(preload || open || isClosing) &&
        createPortal(
          <ModalContent
            style={expandedSpring}
            onClick={(e) => e.stopPropagation()}
          >
            <FullDetail showCloseButton onClose={close} {...passThroughProps} />
          </ModalContent>,
          document.body
        )}
    </>
  );
};

export default FullDetailModal;
