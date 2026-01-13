import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@mui/material";

const LeftComponentMobile = ({ items, selectedItem, onSelectedItem }) => {
  const handleSelect = (item) => {
    onSelectedItem(item);
    sessionStorage.setItem("selectedCategory", item);
  };

  return (
    <Box
      sx={{
        height: "100vh",                // 👉 ocupa toda la pantalla
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f7f7f7",
      }}
    >
      {/* LISTA */}
      <Box sx={{ flex: 1, overflowY: "auto", pt: 1 }}>
        <List disablePadding>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ListItemButton
                selected={item.name === selectedItem}
                onClick={() => handleSelect(item.name)}
                sx={{
                  py: 2,
                  px: 2.5,
                  gap: 2,
                  transition: "0.2s",
                  "&.Mui-selected": {
                    bgcolor: "#ffe0b2",
                    boxShadow: "inset 5px 0 0 #ff9800",
                  },
                  "&:active": {
                    transform: "scale(0.98)",
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    src={item.icon}
                    alt={item.name}
                    variant="rounded"
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: "#fff",
                      boxShadow: 2,
                    }}
                  />
                </ListItemAvatar>

                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                  }}
                />
              </ListItemButton>

              {index < items.length - 1 && (
                <Divider sx={{ mx: 2 }} />
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default LeftComponentMobile;
