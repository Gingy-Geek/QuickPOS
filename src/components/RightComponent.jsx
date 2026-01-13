import React, { useState } from "react";
import { Grid } from "@mui/material";
import ItemCard from "./ItemCard";
import { allItems } from "./ItemsData";
import { useNavigate } from "react-router-dom";

const RightComponent = ({ selectedCategory }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const selectedItems = allItems.filter(
    (item) => item.category === selectedCategory
  );
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    const formattedCategory = item.category.replace(/\s+/g, "-").toLowerCase();
    const formattedTitle = item.title.replace(/\s+/g, "-").toLowerCase();
    setSelectedItem(item);
    navigate(`/item/${formattedCategory}/${formattedTitle}`, { state: { item } });
  };
  
  
  
  

  return (
    <div>
      <div>
        <h1 style={{ textAlign: 'center', margin: '0', marginBottom: '10px' }}>{selectedCategory}</h1>
      </div>
      <div style={{ width: '100%' }}>
        <Grid container spacing={2} sx={{ overflow: 'auto' }}>
          {selectedItems.map((item) => (
            <Grid item key={item.title} xs={6} sm={6} md={4} lg={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ cursor: "pointer", height: '100%', width: '100%' }}
                onClick={() => handleItemClick(item)}>
                <ItemCard {...item} />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default RightComponent;
