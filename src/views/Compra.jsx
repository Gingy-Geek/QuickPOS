import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FinishOrder from "../components/FinishOrder.jsx";
import {
  Typography,
  Container,
  IconButton,
  Button,
  Box,
  TextField,
  InputAdornment,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PaymentsIcon from "@mui/icons-material/Payments";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import QrCodeIcon from "@mui/icons-material/QrCode";

const Compra = () => {
  const [finishOrder, setFinishOrder] = useState(false);
  const [efectivo, setEfectivo] = useState("");
  const [metodo, setMetodo] = useState("cash");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const [precioTotal] = useState(location.state?.precioTotal || 0);

  const [orderItems] = useState(
    JSON.parse(localStorage.getItem("orderItems")) || []
  );

  const vuelto = Math.max(0, Number(efectivo || 0) - precioTotal);

  /* ================= LOGICA ORIGINAL ================= */

  const handleClick = () => setFinishOrder(true);

  const buy = (efectivo, total) => {
    if (metodo === "cash") {
      if (efectivo === 0 || efectivo === "" || efectivo < total) {
        setError("Efectivo insuficiente");
        return;
      }
    } else {
      efectivo = total; // tarjeta / qr
    }

    setEfectivo(efectivo);
    localStorage.removeItem("orderItems");
    handleClick();
  };

  const seeTicket = () => {
    let itemsTicket = itemsTickets(orderItems);

    navigate("/ticket", {
      state: {
        itemsTicket: itemsTicket,
        efectivo: efectivo,
        precioTotal: precioTotal,
      },
    });
  };

  /* ========= TODO TU ARMADO DE ITEMS (INTOCABLE) ========= */

  const itemsTickets = (orderItems) => {
    const items = orderItems.map((item) => ({
      title: addTamañoTitle(item),
      title_item: item.title,
      category: item.category,
      obligatorios: obtenerObligatorios(item),
      modifiers: addEditedModifiersAndExtras(item),
      adicionales: adicionalSelected(item),
      quantity: item.quantity,
      price: item.price === 0 ? getPrecioTamanio(item) : item.price,
    }));
    return items;
  };

  const obtenerObligatorios = (item) => {
    const newItem = { ...item };
    return (newItem.obligatorios = newItem.obligatorios.map((campo) => ({
      ...campo,
      options: campo.options.filter((opcion) => opcion.selected === true),
    })));
  };

  const addTamañoTitle = (item) => {
    let hasTamanio =
      item.obligatorios &&
      item.obligatorios.some((option) => option.title === "Tamaño");

    if (hasTamanio) {
      return `${item.title} - ${
        item.obligatorios
          .find((option) => option.title === "Tamaño")
          .options.find((option) => option.selected).title
      }`;
    }

    return item.title;
  };

  const adicionalSelected = (item) => {
    return [...item.adicionales].filter((item) => item.quantity === 1);
  };

  const addEditedModifiersAndExtras = (itemOriginal) => {
    const { modifiers, extras } = itemOriginal;

    return [...modifiers, ...extras]
      .filter((item) => item.quantity !== item.initialQuantity)
      .map((item) => {
        const { title, price, initialQuantity, quantity, checkbox } = item;
        const newPrice = Math.max(0, price * (quantity - initialQuantity));
        const newQuantity = quantity - initialQuantity;
        return {
          title,
          total_price: newPrice,
          unitPrice: price,
          quantity: newQuantity,
          checkbox,
        };
      });
  };

  const getPrecioTamanio = (item) => {
    return item.obligatorios
      .find((campo) => campo.title === "Tamaño")
      .options.find((campo) => campo.selected === true).price;
  };

  /* ======================================================= */

  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(180deg,#f5f5f5,#e0e0e0)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ ml: 2 }}>
          Cobro
        </Typography>
      </Box>

      {/* CUERPO */}
      <Container
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            width: "100%",
            maxWidth: 540,
            borderRadius: 4,
            p: 4,
          }}
        >
          {/* TOTAL */}
          <Typography variant="h6" color="text.secondary" align="center">
            Total a cobrar
          </Typography>
          <Typography
            variant="h2"
            align="center"
            sx={{ fontWeight: "bold", my: 2, color: "#2e7d32" }}
          >
            ${precioTotal}
          </Typography>

          {/* METODOS */}
          <ToggleButtonGroup
            exclusive
            fullWidth
            value={metodo}
            onChange={(e, v) => v && setMetodo(v)}
            sx={{ mb: 3 }}
          >
            <ToggleButton value="cash">
              <PaymentsIcon sx={{ mr: 1 }} /> Efectivo
            </ToggleButton>
            <ToggleButton value="card">
              <CreditCardIcon sx={{ mr: 1 }} /> Tarjeta
            </ToggleButton>
            <ToggleButton value="qr">
              <QrCodeIcon sx={{ mr: 1 }} /> QR
            </ToggleButton>
          </ToggleButtonGroup>

          {/* EFECTIVO */}
          {metodo === "cash" && (
            <>
              <TextField
                fullWidth
                label="Efectivo recibido"
                type="number"
                value={efectivo}
                onChange={(e) => {
                  setEfectivo(e.target.value);
                  setError("");
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  sx: { fontSize: "1.8rem" },
                }}
              />

              <Typography
                align="center"
                sx={{
                  mt: 2,
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  color:
                    Number(efectivo) >= precioTotal
                      ? "success.main"
                      : "error.main",
                }}
              >
                Vuelto: ${vuelto}
              </Typography>
            </>
          )}

          {/* TARJETA / QR */}
          {metodo !== "cash" && (
            <Box
              sx={{
                mt: 4,
                p: 3,
                borderRadius: 3,
                backgroundColor: "#f5f5f5",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">
                {metodo === "card"
                  ? "Inserte o acerque la tarjeta"
                  : "Escanee el código QR"}
              </Typography>
              <Typography color="text.secondary" mt={1}>
                Simulación de terminal de pago…
              </Typography>
            </Box>
          )}

          {error && (
            <Typography color="error" align="center" mt={2}>
              {error}
            </Typography>
          )}

          {/* BOTONES */}
          <Stack direction="row" spacing={2} mt={4}>
            <Button
              fullWidth
              variant="outlined"
              size="large"
              onClick={() => navigate("/menu")}
            >
              Cancelar
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="success"
              size="large"
              sx={{ fontWeight: "bold" }}
              onClick={() => buy(efectivo, precioTotal)}
            >
              Cobrar
            </Button>
          </Stack>
        </Paper>
      </Container>

      {finishOrder && <FinishOrder seeTicket={seeTicket} />}
    </Box>
  );
};

export default Compra;
