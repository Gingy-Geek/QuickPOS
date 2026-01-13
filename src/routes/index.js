// src/routes/index.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../views/Welcome";
import Carrito from "../views/Carrito";
import Item from "../views/Item";
import Ticket from "../views/Ticket";
import Compra from "../views/Compra";
import Menu from "../views/Menu";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/item/:category/:title" element={<Item />} />
      <Route path="/compra" element={<Compra />} />
      <Route path="/ticket" element={<Ticket />} />
    </Routes>
  );
};

export default AppRoutes;
