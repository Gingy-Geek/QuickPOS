import React, { useState, useEffect } from "react";
import SvgIcon from "@mui/material/SvgIcon";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import TouchAppIcon from "@mui/icons-material/TouchApp";

const TouchAnimation = () => {
  const [isFirstFrame, setIsFirstFrame] = useState(true);

  // Función para alternar entre los frames
  const toggleFrame = () => {
    setIsFirstFrame((prev) => !prev);
  };

  // Cambia la animación automáticamente cada 1000 milisegundos (1 segundo)
  useEffect(() => {
    const intervalId = setInterval(toggleFrame, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {isFirstFrame ? (
        <SvgIcon
          onClick={toggleFrame}
          sx={{ fontSize: "xxx-large", color: "white", marginTop:'18px' }}
        >
          <PanToolAltIcon />
        </SvgIcon>
      ) : (
        <SvgIcon
          onClick={toggleFrame}
          sx={{ fontSize: "xxx-large", color: "white" }}
        >
          <TouchAppIcon />
        </SvgIcon>
      )}
    </>
  );
};

export default TouchAnimation;
