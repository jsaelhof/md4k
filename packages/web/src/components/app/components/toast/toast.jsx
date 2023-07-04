import { Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppContext } from "../../../../context/app-context";
import { useCallback } from "react";

const Toast = () => {
  const { toast, setToast } = useAppContext();

  const onClose = useCallback(() => {
    setToast(null);
  }, [setToast]);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={!!toast}
      autoHideDuration={5000}
      onClose={onClose}
      message={toast?.message}
      action={
        <>
          {toast?.onUndo && (
            <Button color="secondary" size="small" onClick={toast.onUndo}>
              UNDO
            </Button>
          )}
          <IconButton size="small" color="inherit" onClick={onClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    />
  );
};

export default Toast;
