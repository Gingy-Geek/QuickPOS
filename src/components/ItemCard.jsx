// src/components/ItemCard.jsx
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  useMediaQuery, useTheme
} from "@mui/material";
const ItemCard = ({ title, price, icon }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        justifyContent:'space-between',
        height:'100%',
        boxShadow: 'none',
      }}
    >
      <CardMedia
  component="img"
  height="120"
  image={
    icon
      ? icon
      : "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"
  }
  alt={title}
  sx={{
    objectFit: "contain",
    // width: isMobile ? '80%' : '80%',
    // height: isMobile ? '80%' : '8rem',
    width: '80%',
    height: '80%',
    borderRadius: '10px', // Puedes agregar bordes redondeados u otros estilos
  }}
      />
      <CardContent sx={{paddingTop:'5px',
                        fontWeight: '700',
                        textAlign: 'center'}}>
        <Typography variant="h8">{title}</Typography>
        <Typography variant="body1" color="textSecondary">
          {price === 0 ? "Elige el tamaño" : `${formatter.format(price)}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;