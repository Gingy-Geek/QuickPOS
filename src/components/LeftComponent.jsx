import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  useMediaQuery,
  Box
} from "@mui/material";

const LeftComponent = ({ items, selectedItem, onSelectedItem, title }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectedCategory = (category) => {
    onSelectedItem(category);
    handleScrollToTop();
    sessionStorage.setItem("selectedCategory", category);
  };

  const handleSelectedSubItem = (subItem) => {
    onSelectedItem(subItem);
    sessionStorage.setItem("selectedSubItem", subItem);
  };

  return (
    <Paper
      elevation={isMobile ? 0 : 4}
      sx={{
        borderRadius: isMobile ? 0 : 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          py: 1.5,
          textAlign: "center",
          borderBottom: "1px solid #eee",
          background: "linear-gradient(90deg, #ffcc00, #ffb300)"
        }}
      >
        <Typography fontWeight="bold" variant="h6">
          {title}
        </Typography>
      </Box>

      {/* LISTA */}
      <List
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 0,
        }}
      >
        {items.map((item, index) => {
          const isSelected = item.name === selectedItem;

          return (
            <React.Fragment key={index}>
              <ListItemButton
                selected={isSelected}
                onClick={
                  title === "Menu"
                    ? () => handleSelectedCategory(item.name)
                    : () => handleSelectedSubItem(item.name)
                }
                sx={{
                  py: 1.5,
                  px: 2,
                  gap: 1.5,
                  transition: "0.2s",
                  borderLeft: isSelected ? "5px solid #ffbc0d" : "5px solid transparent",
                  bgcolor: isSelected ? "rgba(255,188,13,0.15)" : "transparent",
                  "&:hover": {
                    bgcolor: "rgba(255,188,13,0.2)",
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    src={item.icon}
                    alt={item.name}
                    sx={{
                      width: 44,
                      height: 44,
                      bgcolor: "#fff",
                      boxShadow: isSelected ? 3 : 1,
                    }}
                  />
                </ListItemAvatar>

                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    fontWeight: isSelected ? "bold" : 500,
                    fontSize: "1rem",
                  }}
                />
              </ListItemButton>

              {index < items.length - 1 && (
                <Divider sx={{ ml: 9, opacity: 0.6 }} />
              )}
            </React.Fragment>
          );
        })}
      </List>
    </Paper>
  );
};

export default LeftComponent;
