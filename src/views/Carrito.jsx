import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Container,
  Button,
  Alert,
  Snackbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CloseIcon from "@mui/icons-material/Close";

const ConfirmDeleteDialog = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirmar eliminación</DialogTitle>
      <DialogContent>
        <DialogContentText>
          ¿Estás seguro de que deseas eliminar este artículo del carrito?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={onConfirm} color="primary" autoFocus>
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const LimpiarCarritoDialog = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Vas a eliminar todos los productos del carrito</DialogTitle>
      <DialogContent>
        <DialogContentText>
          ¿Estás seguro? Se vaciarán todos los items que tienes actualmente en
          tu carrito.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={onConfirm} color="primary" autoFocus>
          Vaciar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const OrderSummaryV2 = () => {
  const [orderItems, setOrderItems] = React.useState(
    JSON.parse(localStorage.getItem("orderItems")) || []
  ); // Estado del pedido
  const [alertData, setAlertData] = React.useState(false);
  const navigate = useNavigate();
  const [alertType, setAlertType] = React.useState("error");
  const [alertMessage, setAlertMessage] = React.useState("");

  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = React.useState(false);
  const [itemToDeleteIndex, setItemToDeleteIndex] = React.useState(null);


  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleVaciarCarrito = () => {
    localStorage.removeItem('orderItems')
    setOrderItems(JSON.parse(localStorage.getItem("orderItems")) || [])
    handleAlertOpen("warning", "Carrito eliminado...");
    handleDialogClose();
  };

  const openConfirmDialog = (index) => {
    setItemToDeleteIndex(index);
    setConfirmDialogOpen(true);
  };
  
  const closeConfirmDialog = () => {
    setItemToDeleteIndex(null);
    setConfirmDialogOpen(false);
  };
  
  const deleteItem = (index) => {
    // Crear una nueva copia del array sin el elemento a eliminar
    const updatedOrderItems = [...orderItems];
    updatedOrderItems.splice(index, 1);

    // Actualizar el estado y el localStorage con la nueva copia
    setOrderItems(updatedOrderItems);
    localStorage.setItem("orderItems", JSON.stringify(updatedOrderItems));
    handleAlertOpen("warning", "Producto eliminado...");
  };
  
  const handleConfirmDelete = () => {
    deleteItem(itemToDeleteIndex);
    closeConfirmDialog();
  };
  

  const buy = (precioTotal) => {
    if (orderItems.length <= 0) {
      handleAlertOpen("error", "Sin productos en el carrito.");
    } else {
      navigate("/compra", { state: { precioTotal } });
    }
  };

  const removeItem = (orderItem) => {
    if (orderItem.quantity > 1) {
      const updatedOrderItems = orderItems.map((item) =>
        item.id === orderItem.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem("orderItems", JSON.stringify(updatedOrderItems));
      setOrderItems(updatedOrderItems);
    }
  };

  const addItem = (orderItem) => {
    const updatedOrderItems = orderItems.map((item) =>
      item.id === orderItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    localStorage.setItem("orderItems", JSON.stringify(updatedOrderItems));
    setOrderItems(updatedOrderItems);
  };

  const handleAlertOpen = (alertType, message) => {
    setAlertType(alertType);
    setAlertMessage(message);
    setAlertData(true);
  };
  const handleAlertClose = () => {
    setAlertData(false);
  };

  const edit = (item) => {
    const formattedCategory = item.category.replace(/\s+/g, "-").toLowerCase();
    const formattedTitle = item.title.replace(/\s+/g, "-").toLowerCase();
    navigate(`/item/${formattedCategory}/${formattedTitle}`, { state: { item } });
  };

  const buildIngredientString = (item) => {
    let resultArray = [];

    const obligatoriosString = item.obligatorios
      .flatMap((campo) => campo.options.filter((opcion) => opcion.selected))
      .map((opcion) => (opcion.selected ? opcion.title : null));
    resultArray = resultArray.concat(obligatoriosString.filter(Boolean));

    if (item.category === "Combos") {
      const modifiersCombo = item.obligatorios
        .filter(
          (obligatorio) =>
            obligatorio.title === "Acompañamiento" ||
            obligatorio.title === "Bebida"
        )
        .flatMap((campo) =>
          campo.modifiers
            .filter((modifier) => modifier.quantity > 0)
            .map((modifier) =>
              modifier.quantity < 2
                ? modifier.title
                : `${modifier.title} x${modifier.quantity}`
            )
        );
      resultArray = resultArray.concat(modifiersCombo);
    }

    const modifiersString = item.modifiers
      .filter((modifier) => modifier.quantity > 0)
      .map((modifier) =>
        modifier.quantity < 2
          ? modifier.title
          : `${modifier.title} x${modifier.quantity}`
      );
    resultArray = resultArray.concat(modifiersString);

    const extrasString = item.extras
      .filter((extra) => extra.quantity > 0)
      .map((extra) =>
        extra.quantity < 2 ? extra.title : `${extra.title} x${extra.quantity}`
      );
    resultArray = resultArray.concat(extrasString);

    const adicionalesString = item.adicionales
      .filter((adicional) => adicional.quantity > 0)
      .map((adicional) =>
        adicional.quantity < 2
          ? adicional.title
          : `${adicional.title} x${adicional.quantity}`
      );
    resultArray = resultArray.concat(adicionalesString);
    const result = resultArray.join(" - ");
    return result;
  };

  const addTamañoTitle = (item) => {
    let title;
    let hasTamanio =
      item.obligatorios &&
      item.obligatorios.some((option) => option.title === "Tamaño");

    if (hasTamanio) {
      title = `${item.title} - ${
        item.obligatorios
          .find((option) => option.title === "Tamaño")
          .options.find((option) => option.selected).title
      }`;
    } else title = item.title;

    return title;
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

  const back = () => {
    navigate(-1);
  };

  const precioTotal = orderItems.reduce((accumulator, currentItem) => {
    return Number(
      (accumulator + Number(priceCalculator(currentItem))).toFixed(2)
    );
  }, 0);

  return (
    <Container>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          position: "sticky",
          top: 0,
          zIndex: 1, // Ajusta según sea necesario para que esté por encima de otros elementos
        }}
      >
        <IconButton onClick={back}>
          <CloseIcon sx={{ border: "solid 1px", borderRadius: "50%" }} />
        </IconButton>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1>Tu Pedido</h1>
        <>
          {orderItems.length > 0 && (
            <>
              <Button onClick={handleDialogOpen}>Limpiar</Button>
              <LimpiarCarritoDialog
                open={dialogOpen}
                onClose={handleDialogClose}
                onConfirm={handleVaciarCarrito}
              />
            </>
          )}
        </>
      </div>
      <Divider />
      <>
        {orderItems.length > 0 ? (
          <List sx={{ padding: "1% 5%" }}>
            {orderItems.map((orderItem, index) => (
              <React.Fragment key={index}>
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "2px",
                    paddingRight: "2px",
                  }}
                >
                  <Container sx={{ display: "flex", alignItems: "flex-start" }}>
                    {/* IMAGEN */}
                    <img
                      src={orderItem.icon}
                      alt={orderItem.title}
                      style={{
                        width: "11%",
                        maxHeight: "200px",
                        borderRadius: "2px",
                        marginTop: "2%",
                      }}
                    />

                    <Container
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      {/* DESCRIPCION ITEM */}
                      <ListItemText
                        sx={{
                          paddingLeft: 2,
                          marginTop: 0,
                          "& .MuiTypography-root": {
                            overflowWrap: "break-word",
                          },
                        }}
                        primary={
                          <Typography
                            variant="body1"
                            component="span"
                            sx={{
                              maxWidth: "200px",
                              display: "inline-block",
                              marginTop: "0",
                              fontWeight: "bold",
                            }}
                          >
                            {addTamañoTitle(orderItem)}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                            variant="body2"
                            color="blue"
                            onClick={() => edit(orderItem)}
                          >
                            Editar <ArrowRightAltIcon />
                          </Typography>
                        }
                      />
                      {/* <Divider sx={{ marginBottom: "5%" }} /> */}
                    </Container>
                    <IconButton
                      sx={{ padding: "0" }}
                      aria-label="Eliminar"
                      color="error"
                      onClick={() => openConfirmDialog(index)}
                      >
                      <DeleteIcon />
                    </IconButton>
                    <ConfirmDeleteDialog
                      open={confirmDialogOpen}
                      onClose={closeConfirmDialog}
                      onConfirm={handleConfirmDelete}
                    />

                  </Container>

                  {/* //DETALLES */}
                  <Container sx={{ marginBottom: "4%" }}>
                    <Typography variant="caption" color="textSecondary">
                      {buildIngredientString(orderItem)}
                    </Typography>
                  </Container>

                  {/* AGREGAR BOTONES CANTIDAD */}
                  <Container
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      aria-label="Restar"
                      size="small"
                      onClick={() => removeItem(orderItem)}
                      sx={{
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        background: "#ffd760",
                      }}
                    >
                      <RemoveIcon fontSize="inherit" />
                    </IconButton>
                    {orderItem.quantity}
                    <IconButton
                      aria-label="Sumar"
                      size="small"
                      onClick={() => addItem(orderItem)}
                      sx={{
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        background: "#ffd760",
                      }}
                    >
                      <AddIcon fontSize="inherit" />
                    </IconButton>
                    <Typography variant="h6">
                      {formatter.format(priceCalculator(orderItem))}
                    </Typography>
                  </Container>
                </ListItem>
                <Divider sx={{ marginBottom: "5%" }} />
              </React.Fragment>
            ))}
          </List>
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center", margin: "2% 0" }}>
            Todavia no tienes productos en la compra.
          </Typography>
        )}
      </>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0% 3% 0% 3%",
          }}
        >
          <Typography sx={{ fontWeight: "800", fontSize: "2rem" }}>
            Total:
          </Typography>
          <Typography sx={{ fontWeight: "800", fontSize: "2rem" }}>
            {formatter.format(precioTotal)}
          </Typography>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-end", padding: "3%" }}
        >
          <Button
            sx={{ marginLeft: "2rem" }}
            variant="outlined"
            color="success"
            onClick={back}
          >
            Seguir Pidiendo
          </Button>
          <Button
            sx={{ marginLeft: "2rem", backgroundColor: "rgb(255, 188, 13)" }}
            variant="contained"
            color="warning"
            onClick={() => buy(precioTotal)}
          >
            Pagar
          </Button>
        </div>
      </Container>

      <Snackbar
        open={alertData}
        autoHideDuration={2300}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleAlertClose}
          severity={alertType}
          sx={{ width: "90%", marginTop: "0%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default OrderSummaryV2;
