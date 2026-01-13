import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Container,
  Drawer,
  IconButton,
  AppBar,
  Toolbar,
  Box,
  Divider,
  Button,
  Dialog, DialogTitle, DialogContent, DialogActions,
} from "@mui/material";
import Icon from "../images/burgerIcon.png";
import CancelOrder from '../images/cancelOrder.png'
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Footer from "./Footer";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import { allCategories } from "./ItemsData";
import LeftComponentMobile from "./LeftComponentMobile";

const Menu = () => {
  const categories = allCategories;
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = React.useState(
    sessionStorage.getItem("selectedCategory") ?? categories[0].name
  );

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

  const orderItems = JSON.parse(localStorage.getItem("orderItems")) || [];

  const totalCantidades = orderItems.reduce((acumulador, item) => {
    return acumulador + item.quantity;
  }, 0);

  const [cartCount, setCartCount] = React.useState(totalCantidades || 0);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <AppBar position="sticky" sx={{ zIndex: 2, background: "#542e00" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
            }}
          >
            <img src={Icon} alt="" style={{ width: "2rem" }} />
            <Typography>QuickPOS</Typography>
          </div>
          <IconButton color="inherit" aria-label="canel order" edge="end" onClick={handleOpenDialog}>
            <img src={CancelOrder} alt="cancel order" style={{ width: '35px', height: '35px', borderRadius: '10px'}} />
          </IconButton>
        </Toolbar>
        
        
        
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Mejora el rendimiento de apertura en dispositivos móviles.
        }}
      >
        <div style={{ height: "100%" }}>
          <Toolbar sx={{ backgroundColor: "#eeeeee" }}>
            <IconButton onClick={handleDrawerClose}>
              <MenuOpenIcon />
            </IconButton>
            <img
              src={Icon}
              alt="Logo"
              style={{
                marginLeft: "3rem",
                width: "3rem",
                overflow: "hidden", 
                objectFit: "contain",
              }}
            />
            <h3
              style={{ marginBottom: "2%", marginLeft: "1%", alignSelf: "end" }}
            >
              QuickPOS
            </h3>
          </Toolbar>
          <div
            onClick={handleDrawerClose}
            style={{ height: "55%", zIndex: "1", marginTop: "2rem" }}
          >
            <LeftComponentMobile
              items={categories}
              selectedItem={selectedCategory}
              onSelectedItem={setSelectedCategory}
            />
          </div>
        </div>
      </Drawer>

      <Box flex={1} overflow="auto" marginBottom="30%">
        <RightComponent selectedCategory={selectedCategory} />
      </Box>
      <Footer cartCount={cartCount} orderItems={orderItems} />
      
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
  );
};

export default Menu;
