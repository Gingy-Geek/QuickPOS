import React, { useState } from "react";
import { ListItem, ListItemText, Divider, Checkbox } from "@mui/material";
import Counter from "./Counter"; // Ajusta la ruta según tu estructura de archivos

const ItemCounter = ({ title, icon, price, checkbox, initialQuantity, quantity, max, onModifierChange }) => {
  const [isChecked, setChecked] = useState(quantity === 1);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    const newQuantity = isChecked ? 0 : 1;
    onModifierChange(title, newQuantity);
  };

  const handleCounterChange = (newQuantity) => {
    onModifierChange(title, newQuantity);
  };

  return (
    <div>
      <ListItem key={title} sx={{paddingLeft:'0', paddingRight: '0'}}>
        <img
          src={
            icon
              ? icon
              : "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"
          }
          alt={title}
          style={{ width: "3rem", marginRight: "5%" }}
        />
        <ListItemText primary={title} secondary={`$${price.toFixed(2)}`} />
        {checkbox ? (
          <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        ) : (
          <Counter actualQuantity={quantity} initialQuantity={initialQuantity} max={max} price={price} onModifierChange={handleCounterChange} />
        )}
      </ListItem>
      <Divider />
    </div>
  );
};

export default ItemCounter;
