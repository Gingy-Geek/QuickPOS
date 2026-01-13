import React from "react";
import {Container, useMediaQuery } from "@mui/material";
import MenuMobile from '../components/MenuMobile'
import Footer from "../components/Footer";

import LeftComponent from "../components/LeftComponent";
import RightComponent from "../components/RightComponent";
import Logo from "../components/Logo";

import { allCategories } from "../components/ItemsData";

const Menu = () => {
  const categories = allCategories;
  const isMobile = useMediaQuery("(max-width:600px)");

  const [selectedCategory, setSelectedCategory] = React.useState(
    sessionStorage.getItem("selectedCategory") ?? categories[0].name
  );


  const orderItems = JSON.parse(localStorage.getItem("orderItems")) || [];

  const totalCantidades = orderItems.reduce((acumulador, item) => {
    return acumulador + item.quantity;
  }, 0);

  const [cartCount, setCartCount] = React.useState(totalCantidades || 0);

  const handleScrollToTop = () => {
    // Lógica para desplazar hacia arriba en RightComponent
    const rightComponentContainer = document.getElementById("right-component-container");
    if (rightComponentContainer) {
      rightComponentContainer.scrollTop = 0;
    }
  };
  React.useEffect(() => {
    handleScrollToTop();
    
  }, [selectedCategory]);

  return (
    <div>
      {isMobile ? (
        <MenuMobile />
      ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "92vh",
        overflow: "auto",
      }}
    >
      <Container sx={{ width: "18rem", marginLeft:'0' }}>
        <div style={{ height: "13%", marginTop: "10%" }}>
          <Logo />
        </div>
        <div style={{ marginTop: "20%", zIndex: "1" }}>
          <LeftComponent
            items={categories}
            selectedItem={selectedCategory}
            onSelectedItem={setSelectedCategory}
            title={"Menu"}
          />
        </div>
      </Container>

      <Container
            id="right-component-container"
            sx={{ height: "90%", width: "100%", overflow: "auto" }}
          >
          <RightComponent selectedCategory={selectedCategory} />
      </Container>
      <Footer cartCount={cartCount} orderItems={orderItems}/>
    </div>
    )}

  </div>
  );
};

export default Menu;
