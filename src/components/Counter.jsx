import React, { useState } from "react";
import { IconButton, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Counter = ({ actualQuantity, initialQuantity, max, price, onModifierChange }) => {
  const [count, setCount] = useState(actualQuantity);

  const handleIncrease = () => {
    const newQuantity = Math.min(count + 1, max || Infinity);
    setCount(newQuantity);
    onModifierChange(newQuantity);
  };

  const handleDecrease = () => {
    const newQuantity = Math.max(count - 1, 0);
    setCount(newQuantity);
    onModifierChange(newQuantity);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          border: "solid 1px",
          borderRadius: "25px",
          width: "5rem",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          size="small"
          onClick={handleDecrease}
          sx={{ margin: "0 3px" }}
        >
          <RemoveIcon fontSize="small" sx={{color: count == 0 ? "#dbdbdb" : "Black"}}/>
        </IconButton>
        <Typography variant="body2">{count}</Typography>
        <IconButton
          size="small"
          onClick={handleIncrease}
          sx={{ margin: "0 3px" }}
        >
          <AddIcon fontSize="small" sx={{color: count >= max ? "#dbdbdb" : "Black"}}/>
        </IconButton>
      </Box>
      {count > initialQuantity && price > 0 && (
        <Typography variant="body2" color="green" sx={{textAlign:'center'}}>
          + ${price * (count - initialQuantity)}
        </Typography>
      )}
    </div>
  );
};

export default Counter;
