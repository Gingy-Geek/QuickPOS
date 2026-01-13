import React from "react";
import Slider from "react-slick";
import Icon from "../images/burgerIcon.png";
import ChoicePlace from "../components/ChoicePlace.jsx";
import TouchAnimation from '../components/TouchAnimation.jsx'


import {Paper, useMediaQuery, useTheme } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WelcomeScreen = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [choicePlace, setChoicePlace] = React.useState(false);

  const handleClick = () => {
    setChoicePlace(true);
  };
  const handleClose = () => {
    setChoicePlace(false);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Oculta las flechas
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div
      style={{
        position: "relative",
        background: `linear-gradient(to bottom, black 70%, white 120%)`,
        display: "flex",
        flexDirection: "column",
        margin: 0,
        overflow: "hidden",
        height: "100vh",
        width: "100%",
      }}
      onClick={handleClick}
    >
      <Slider {...settings} style={{ flex: 1 }}>
        <Paper>
          <img
            src={isMobile
              ? "https://images.unsplash.com/photo-1667329829058-ac191ba4a905?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : "https://mcdonalds.com.gt/img/banner.jpg"
            }
            alt="Slide 1"
            style={{ width: "100%", height: "70vh", objectFit: "fill" }}
          />
        </Paper>
        <Paper>
          <img
            src={isMobile
              ? "https://images.unsplash.com/photo-1633424234673-c8cd0f4df77b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : "https://cclconectados.com/wp-content/uploads/2023/03/Tasty-sand-y-papas-2.jpg"}
            alt="Slide 2"
            style={{ width: "100%", height: "70vh", objectFit: "fill" }}
            />
        </Paper>
      </Slider>
      <>
      {isMobile ? (
        <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          padding: "20px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            borderRadius: "3%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <div style={{display: 'flex'}}>

          <img
            alt="Imagen"
            src={Icon}
            style={{
              padding: "10px",
              width: "20%",
              overflow: "hidden",
              objectFit: "contain",
            }}
          />
          <h3
            style={{
              marginBottom: "2%",
              marginLeft: "1%",
              alignSelf: "end",
              color: "white",
            }}
          >
            QuickPOS
          </h3>
        </div>
        <TouchAnimation/>
            </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          
          <h2 style={{ color: "white", margin: "0px" }}>
            Touch to Order
          </h2>
          <h2 style={{ color: "white", margin: "0px" }}>
            Toca para Ordenar
          </h2>
        </div>
      </div>
      ) : (
        <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "20px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            borderRadius: "3%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <img
            alt="Imagen"
            src={Icon}
            style={{
              padding: "10px",
              width: "20%",
              overflow: "hidden",
              objectFit: "contain",
            }}
          />
          <h3
            style={{
              marginBottom: "2%",
              marginLeft: "1%",
              alignSelf: "end",
              color: "white",
            }}
          >
            QuickPOS
          </h3>
        </div>
        <TouchAnimation/>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          
          <h2 style={{ color: "white", marginBottom: "10px" }}>
            Touch to Order
          </h2>
          <h2 style={{ color: "white", marginTop: "10px" }}>
            Toca para Ordenar
          </h2>
        </div>
      </div>
      )}
    </>
      
      {choicePlace && <ChoicePlace onClose={handleClose} />}
    </div>
  );
};

export default WelcomeScreen;




/**
 *  
 */