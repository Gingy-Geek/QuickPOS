import React from "react";
import ItemModifier from "../components/ItemModifier";
import {
  Container,
  IconButton,
  Typography,
  Box,
  CardMedia,
  Button,
  List,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate, useLocation } from "react-router-dom";

const ItemContent = () => {

  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
  const location = useLocation();
  // Proporciona un objeto por defecto si item es null o undefined
  // Deberia hacer una llamada al backend para mostrar el producto y no pasar el producto directamente
  const [selectedItem, setSelectedItem] = React.useState(
    location.state?.item || {
      title: "Default Item",
      price: 0,
      description: "",
      icon: "",
      id: -1,
    }
  );
  const [quantity, setQuantity] = React.useState(selectedItem.quantity);
  const [hasTamanio, setHasTamanio] = React.useState(false);

  const [openItemContent, setOpenItemContent] = React.useState(false);
  const [orderItems, setOrderItems] = React.useState(
    JSON.parse(localStorage.getItem("orderItems")) || []
  );
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  React.useEffect(() => {
      window.scrollTo({top: 0});
    }, []);

  const back = () => {
    navigate(-1);
  };
  const buy = (item) => {
    handleAddToOrder(item, quantity);
    back();
  };

  const getNextId = () => {
    if (orderItems.length === 0) {
      return 1; // Si no hay elementos, el próximo ID será 1
    }
    // Obtén el último elemento y agrega 1 a su ID
    const lastItemId = orderItems[orderItems.length - 1].id;
    return lastItemId + 1;
  };

  const handleAddToOrder = (item, quantity) => {
    if (!item.id) {
      const orderItem = { ...item, quantity, id: getNextId() };
      const updatedOrderItems = [...orderItems, orderItem];
      localStorage.setItem("orderItems", JSON.stringify(updatedOrderItems));
      setOrderItems(updatedOrderItems);
    } else {
      const updatedOrderItems = orderItems.map((existingItem) =>
        existingItem.id === item.id ? { ...item, quantity } : existingItem
      );
      localStorage.setItem("orderItems", JSON.stringify(updatedOrderItems));
      setOrderItems(updatedOrderItems);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpenItemContent(true);
  };

  const handleCloseItemContent = () => {
    setOpenItemContent(false);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1 || Infinity));
  };

  const handleOptionClick = (campoTitle, optionIndex) => {
    const updatedItem = { ...selectedItem };
    const campo = updatedItem.obligatorios.find(
      (item) => item.title === campoTitle
    );

    if (campo) {
      campo.options.forEach((opcion, index) => {
        opcion.selected = index === optionIndex;
      });

    }

    setSelectedItem(updatedItem);
  };

  React.useEffect(() => {
    // Verificar si existe el objeto con title: "Tamaño" en obligatorios
    const hasTamanioOption =
      selectedItem.obligatorios &&
      selectedItem.obligatorios.some((option) => option.title === "Tamaño");

    // Establecer el estado hasTamanio basado en la verificación
    setHasTamanio(hasTamanioOption);
  }, [selectedItem]);

  return (
    <div>
      <Container
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          zIndex: 1,
        }}
      >
        <IconButton onClick={() => back()} style={{ alignSelf: "flex-start" }}>
          <ArrowBackIosIcon />
          <>{!isMobile ? <h5 style={{ margin: "0" }}>Menu</h5> : null}</>
        </IconButton>
      </Container>

      <Container
        sx={{
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          paddingTop: "0",
          paddingBottom: "5rem",
        }}
      >
        <>
          {!isMobile ? (
            <div style={{ marginTop: "5%", display: "flex" }}>
              <CardMedia
                component="img"
                height="300"
                image={
                  selectedItem.icon
                    ? selectedItem.icon
                    : "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"
                }
                alt={selectedItem.title}
                style={{
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
              <Container
                sx={{
                  padding: "0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="h4">
                  {hasTamanio
                    ? `${selectedItem.title} - ${
                        selectedItem.obligatorios
                          .find((option) => option.title === "Tamaño")
                          .options.find((option) => option.selected).title
                      }`
                    : selectedItem.title}
                </Typography>
                <Typography variant="body2">
                  {hasTamanio
                    ? `${formatter.format(
                        selectedItem.obligatorios
                          .find((option) => option.title === "Tamaño")
                          .options.find((option) => option.selected).price
                      )}`
                    : `${formatter.format(selectedItem.price)}`}
                </Typography>
                <Typography variant="body2" sx={{marginTop: '10%', fontSize: '1rem'}}>
                  {selectedItem.description}
                </Typography>
              </Container>
            </div>
          ) : (
            <div>
              <Container sx={{ padding: "0" }}>
                <Typography variant="h6">
                  {hasTamanio
                    ? `${selectedItem.title} - ${
                        selectedItem.obligatorios
                          .find((option) => option.title === "Tamaño")
                          .options.find((option) => option.selected).title
                      }`
                    : selectedItem.title}
                </Typography>
                <Typography variant="body2">
                  {hasTamanio
                    ? `${formatter.format(
                        selectedItem.obligatorios
                          .find((option) => option.title === "Tamaño")
                          .options.find((option) => option.selected).price
                      )}`
                    : `${formatter.format(selectedItem.price)}`}
                </Typography>
              </Container>

              <CardMedia
                component="img"
                height="300"
                image={
                  selectedItem.icon
                    ? selectedItem.icon
                    : "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"
                }
                alt={selectedItem.title}
                style={{
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
              <Typography variant="body2">
                {selectedItem.description}
              </Typography>
            </div>
          )}
        </>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3%",
            marginTop: "3%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              border: "solid 1px",
              borderRadius: "25px",
              width: "7rem",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              size="small"
              onClick={handleDecrease}
              sx={{ margin: "0 3px" }}
            >
              <RemoveIcon fontSize="small" sx={{color: quantity <= 1 ? "#dbdbdb" : "Black"}}/>
            </IconButton>
            <Typography variant="body2">{quantity}</Typography>
            <IconButton
              size="small"
              onClick={handleIncrease}
              sx={{ margin: "0 3px" }}
            >
              <AddIcon fontSize="small" sx={{color: "Black"}}/>
            </IconButton>
          </Box>
        </Container>

        {selectedItem.obligatorios.length > 0 && (
          <>
            <Container sx={{ padding: "0" }}>
              <List>
                {selectedItem.obligatorios.map((campo) => (
                  <div key={campo.title} style={{ marginBottom: "20px" }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{ fontWeight: "bold" }}
                    >
                      Seleccione su {campo.title}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                      {campo.options.map((opcion, index) => (
                        <div
                          key={opcion.title}
                          style={{
                            width: "5rem",
                            margin: "2%",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                          }}
                          onClick={() => handleOptionClick(campo.title, index)}
                        >
                          <Avatar
                            src={opcion.icon} // Agrega la fuente de la imagen para el avatar
                            alt={opcion.title}
                            sx={{
                              width: "3rem",
                              height: "3rem",
                              marginBottom: "10%",
                              border: opcion.selected
                                ? "3px solid orange"
                                : "3px solid transparent",
                            }}
                          />
                          <Typography variant="body2" align="center">
                            {opcion.title}
                          </Typography>
                          <Typography variant="body1" color="textSecondary">
                            {opcion.price > 0 &&
                              `${formatter.format(opcion.price)}`}
                          </Typography>
                        </div>
                      ))}
                    </Box>
                  </div>
                ))}
              </List>
            </Container>
          </>
        )}

        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleItemClick(selectedItem)}
          sx={{
            marginTop: "5%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Personalizar ingredientes
          <ArrowForwardIosIcon />
        </Button>

        <ItemModifier
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          open={openItemContent}
          onClose={handleCloseItemContent}
        />
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "sticky",
          bottom: 0,
          backgroundColor: "white",
          zIndex: 1,
          padding: "0%",
        }}
      >
        <Button
          variant="contained"
          color="warning"
          onClick={() => buy(selectedItem)}
          sx={{ width: "100%" }}
        >
          Añadir al carrito
        </Button>
      </Container>
    </div>
  );
};

export default ItemContent;
