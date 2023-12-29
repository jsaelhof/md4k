import { useSpring } from "react-spring";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import FullDetail, { FullDetailProps } from "../full-detail/full-detail";
import { ModalBackdrop, ModalContent } from "./full-detail-modal.styles";

export type FullDetailModalProps = {
  preload: boolean;
  open: boolean;
  centerPoint: { x: number; y: number };
  onClose: () => void;
  fullDetailProps: FullDetailProps;
};

const FullDetailModal = ({
  preload,
  open,
  centerPoint,
  onClose,
  fullDetailProps,
}: FullDetailModalProps): ReactElement => {
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
            onClick={(e): void => e.stopPropagation()}
          >
            <FullDetail showCloseButton {...fullDetailProps} onClose={close} />
          </ModalContent>,
          document.body
        )}
    </>
  );
};

export default FullDetailModal;
