import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  Container,
  Box,
  Typography,
  Badge,
  Button,
  IconButton,
  Dialog, DialogTitle, DialogContent, DialogActions,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BurgerBag from "../images/burgerBag.png";
import CancelOrder from "../images/cancelOrder.png";

export default function Footer({ cartCount, orderItems }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const [openDialog, setOpenDialog] = React.useState(false);
  const cancelOrder = () => {
    localStorage.clear()
    sessionStorage.clear()
    navigate("/");
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmCancelOrder = () => {
    cancelOrder()
    handleCloseDialog();
  };

  const priceCalculator = (item) => {
    if (item.modifiers) {
      let precioTotal = item.price;
      item.modifiers.forEach((modifier) => {
        if (modifier.quantity > modifier.initialQuantity) {
          precioTotal +=
            modifier.price * (modifier.quantity - modifier.initialQuantity);
        }
      });
      item.extras.forEach((extras) => {
        if (extras.quantity > extras.initialQuantity) {
          precioTotal +=
            extras.price * (extras.quantity - extras.initialQuantity);
        }
      });
      item.adicionales.forEach((adicionales) => {
        if (adicionales.quantity > adicionales.initialQuantity) {
          precioTotal +=
            adicionales.price *
            (adicionales.quantity - adicionales.initialQuantity);
        }
      });
      item.obligatorios.forEach((grupoObligatorios) => {
        grupoObligatorios.options.forEach((opcion) => {
          if (opcion.selected) {
            precioTotal += opcion.price;
          }
        });
      });

      return precioTotal * item.quantity;
    }
  };
  const precioTotal = orderItems.reduce((accumulator, currentItem) => {
    return Number(
      (accumulator + Number(priceCalculator(currentItem))).toFixed(2)
    );
  }, 0);

  const openCart = () => {
    navigate("/carrito");
  };
 
  return (
    <Paper
      sx={{
        // marginTop: "calc(10% + 60px)",
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "#ffd760",
        paddingTop: "1rem",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            my: 1,
          }}
        >
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open cart"
              edge="end"
              onClick={openCart}
            >
              <Badge badgeContent={cartCount} color="error">
                <img
                  src={BurgerBag}
                  alt="Burger bag"
                  style={{ width: "35px", height: "35px" }}
                />
              </Badge>
            </IconButton>
            <Typography
              color="initial"
              sx={{
                fontWeight: "800",
                fontSize: isMobile ? "1.5rem" : "2rem",
                marginLeft: isMobile ? "1rem" : "3rem",
              }}
            >
              {formatter.format(precioTotal)}
            </Typography>
          </div>
          <Button variant="contained" color="primary" onClick={openCart}>
            {isMobile ? "Ver" : "Ver Carrito"}
          </Button>
          <>
          {!isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10%' }}>
          <IconButton color="inherit" aria-label="canel order" edge="end" onClick={handleOpenDialog}>
            <img src={CancelOrder} alt="cancel order" style={{ width: '35px', height: '35px', borderRadius: '10px', marginRight: '5px' }} />
          </IconButton>
          <Typography>Cancelar</Typography>
        </div>
      )}
          </>
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Cancelar orden</DialogTitle>
            <DialogContent>
              <Typography>
                ¿Estás seguro de que deseas cancelar la orden?
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Cancelar
              </Button>
              <Button onClick={handleConfirmCancelOrder} color="primary">
                Confirmar
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Container>
    </Paper>
  );
}
