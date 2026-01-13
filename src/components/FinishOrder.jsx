import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/burgerIcon.png";
import Ticket from "../images/ticket.png";
import { Modal, Backdrop, Fade, Button, Box, Typography } from "@mui/material";

const FinishOrder = ({ seeTicket }) => {
  const isMobileHeight = window.innerHeight <= 530;
  const navigate = useNavigate();
  const backWelcome = () => {
    navigate("/");
  };

  return (
    <Modal
      open={true}
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
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Imagen en la parte superior */}
          <Box sx={{ color: "white", textAlign: "center" }}>
            <h1>QuickPOS</h1>
            <img
              src={Logo} // Reemplaza con la ruta o el origen de tu imagen real
              alt="Logo"
              style={{ width: "30%" }}
            />
          </Box>

          {/* Texto en el medio */}
          <Typography
            variant="h2"
            sx={{ color: "white", marginBottom: "50px" }}
          >
            Gracias!
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "white", marginBottom: "20px" }}
          >
            Su orden esta en camino.
          </Typography>

          {/* Cuadro 1 */}
          <Box
            sx={{
              padding: "20px 0px",
              display: "flex",
              flexDirection: isMobileHeight ? "row" : "column",
              alignItems: isMobileHeight ? "flex-end" : "center",
              cursor: "pointer",
            }}
            onClick={seeTicket}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={Ticket}
                alt="Comer Acá"
                style={{ width: "10%", objectFit: "cover" }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 1, width: "30%" }}
              >
                Ver Ticket
              </Button>
            </div>
            <div style={{marginRight: "19%"}}>
            <>
            {isMobileHeight && (
              <Button
                variant="contained"
                color="secondary"
                onClick={backWelcome}
                sx={{ marginTop: "3%" }}
              >
                Cerrar
              </Button>
            )}
          </>
            </div>
          </Box>

          {/* Botón para cerrar */}
          <>
            {!isMobileHeight && (
              <Button
                variant="contained"
                color="secondary"
                onClick={backWelcome}
                sx={{  }}
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

export default FinishOrder;
