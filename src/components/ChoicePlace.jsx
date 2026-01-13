import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/burgerIcon.png";
import EatIn from "../images/eatIn.png";
import TakeOut from "../images/takeOut.png";
import { Modal, Backdrop, Fade, Button, Box, Typography } from "@mui/material";

const ChoicePlace = ({ onClose }) => {
  const navigate = useNavigate();

  const isMobileHeight = window.innerHeight <= 530;

  const handleClick = () => {
    sessionStorage.setItem("selectedCategory", "Hamburguesas");
    navigate("/menu");
  };

  return (
    <Modal
      open={true}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={true} timeout={1500}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {/* Imagen en la parte superior */}
          <Box sx={{ marginTop: "1vh", color: "white", textAlign: "center" }}>
            <h1>QuickPOS</h1>
            <img
              src={Logo} // Reemplaza con la ruta o el origen de tu imagen real
              alt="Logo"
              style={{ width: "20%" }}
            />
          </Box>

          {/* Texto en el medio */}
          <Typography
            variant="h4"
            sx={{ color: "white", marginBottom: "30px" }}
          >
            Donde comerás hoy
          </Typography>

          {/* Cuadros con imágenes y botones */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0px 10px 0px 10px",
            }}
          >
            {/* Cuadro 1 */}
            <Box
              sx={{
                flex: 1,
                marginRight: "10%",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "7px solid white",
                borderRadius: "30px",
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              <img
                src={EatIn} // Reemplaza con la ruta real de tu imagen
                alt="Comer Acá"
                style={{ width: "25%", objectFit: "cover" }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 1, width: "50%" }}
              >
                Comer Acá
              </Button>
            </Box>
            <>
              {isMobileHeight && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={onClose}
                    sx={{ width: "100%", height: "22%" }}
                  >
                    Cerrar
                  </Button>
                </div>
              )}
            </>

            {/* Cuadro 2 */}
            <Box
              sx={{
                flex: 1,
                marginLeft: "10%",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "7px solid white",
                borderRadius: "30px",
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              <img
                src={TakeOut} // Reemplaza con la ruta real de tu imagen
                alt="Llevar"
                style={{ width: "25%", objectFit: "cover" }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 1, width: "50%" }}
              >
                Llevar
              </Button>
            </Box>
          </Box>

          {/* Botón para cerrar */}
          <>
              {!isMobileHeight && (
          <Button
            variant="contained"
            color="secondary"
            onClick={onClose}
            sx={{ marginTop: "3%" }}
          >
            Cerrar
          </Button>
          )}
        </>
        </div>
      </Fade>
    </Modal>
  );
};

export default ChoicePlace;
