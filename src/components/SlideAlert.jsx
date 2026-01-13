import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const SlideAlert = ({ open, handleClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={1500}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: "90%", marginTop: '0%' }}>
        ¡Producto añadido!
      </Alert>
    </Snackbar>
  );
};

export default SlideAlert;
