// src/components/Navbar.jsx
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import OrderSummary from "./OrderSummary";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Badge,
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Nuevo ícono de carrito

const Navbar = ({ categories, selectedCategory, onSelectCategory, initialCartCount}) => {
  const [cartCount, setCartCount] = useState(initialCartCount);
  const [open, setOpen] = useState(false);
  const [cartMenuOpen, setCartMenuOpen] = useState(false);
  const [orderItems, setOrderItems] = useState(JSON.parse(localStorage.getItem("orderItems")) || []); // Estado del pedido
  

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Función para manejar la apertura del componente del carrito
  const handleOpenCartMenu = () => {
    // Actualiza el resumen del pedido al abrir el carrito
    setOrderItems(JSON.parse(localStorage.getItem("orderItems")) || []);
    setCartMenuOpen(true);
  };

  const handleCloseCartMenu = () => {
    updateCartCount(orderItems)
    setCartMenuOpen(false);
  };

  const handleSelectedCategory = (category) => {
    onSelectCategory(category)
    sessionStorage.setItem('selectedCategory', category)
  };

  const updateCartCount = (items) => {
    const itemsQuantity = items.reduce((acumulador, item) => {
      return acumulador + item.quantity;
    }, 0);
    setCartCount(itemsQuantity);
  };

  React.useEffect(() => {
    setCartCount(initialCartCount);
  }, [initialCartCount]);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography>
            WcApp
          </Typography>
          {/* Nuevo IconButton para el carrito */}
          <IconButton
            color="inherit"
            aria-label="open cart"
            onClick={handleOpenCartMenu}
            edge="end"
            sx={{ ml: 2 }}
          >
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* MENU LATERAL */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Mejora el rendimiento de apertura en dispositivos móviles.
        }}
      >
        <div>
          <Toolbar sx={{ backgroundColor: "#eeeeee" }}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
              Menu
            </Typography>
          </Toolbar>
          <List>
            {categories.map((category) => (
              <ListItem
                key={category}
                selected={category === selectedCategory}
                onClick={() => {
                  handleSelectedCategory(category);
                  handleDrawerClose();
                }}
                button
              >
                <ListItemText primary={category} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      {/* CART MENU */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={cartMenuOpen}
        onClose={handleCloseCartMenu}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          style: {
            width: isMobile ? "100%" : "40%", // Ancho del papel dependiendo del dispositivo
          },
        }}
      >
        <div>
          <Toolbar sx={{ backgroundColor: "#eeeeee" }}>
            <Typography onClick={handleCloseCartMenu} variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
              Seguir con su compra
            </Typography>
            <IconButton onClick={handleCloseCartMenu}>
              <ChevronRightIcon />
            </IconButton>
          </Toolbar>
          <List>
            {/* Agrega el resumen del pedido */}
            <OrderSummary
              orderItems={orderItems}
              setOrderItems={setOrderItems}
              onClose={handleCloseCartMenu}
            />
          </List>
        </div>
      </Drawer>
      <Toolbar />{" "}
      {/* Añade un espacio para evitar que el contenido se solape con la barra de aplicación */}
    </Box>
  );
};

export default Navbar;
