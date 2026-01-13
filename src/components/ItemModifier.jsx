// ItemModifier.js
import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCounter from "./ItemCounter"; // Ajusta la ruta según tu estructura de archivos

import {
  Container,
  Typography,
  List,
  Modal,
  Slide,
  IconButton,
  Button,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ItemModifier = ({ selectedItem, setSelectedItem, open, onClose }) => {
    //APARECEN EN ESTA PANTALLA EXTRAS, MODIFIERS, ADICIONALES
  const navigate = useNavigate();

  const [itemNewField, setItemNewField] = React.useState(selectedItem);

  /*..................ESTE METODO ACTUALIZA EL ITEM CON SUS PERSONALIZACIONES........................ */
  const handleFieldChange = (field, modifierTitle, newQuantity) => {
    setItemNewField((prevSelectedItem) => {
      if(field !== "obligatorios"){

        const updatedField = prevSelectedItem[field].map((item) =>
        item.title === modifierTitle ? { ...item, quantity: newQuantity } : item
        );
        return {
          ...prevSelectedItem,
          [field]: updatedField,
        };

      }else{
        //-------Personaliza los items del Combo (no el item principal)-------------
        const updatedField = prevSelectedItem[field].map((categoriaCombo) => {
          if (categoriaCombo.title === "Acompañamiento" || categoriaCombo.title === "Bebida") {
            // Solo actualizar los modifiers si la condición se cumple
            return {
              ...categoriaCombo,
              modifiers: categoriaCombo.modifiers.map((modifier) =>
                modifier.title === modifierTitle ? { ...modifier, quantity: newQuantity } : modifier
              ),
            };
          }
        
          // Si la condición no se cumple, devolver el objeto sin cambios
          return categoriaCombo;
        });
        
        
        return {
          ...prevSelectedItem,
          [field]: updatedField,
           };
      }
    });
  };

  const confirmar = () => {
    setSelectedItem(itemNewField);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            maxHeight: "100vh", // Altura máxima del 100% de la altura visible
            overflowY: "auto", // Agregar barra de desplazamiento vertical si es necesario
          }}
        >
          <Container
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "sticky",
              top: 0,
              backgroundColor: "white", // Puedes ajustar esto según el diseño
              zIndex: 1, // Puedes ajustar esto según la superposición
              padding: "0%",
            }}
          >
            <IconButton onClick={onClose}>
              <ArrowBackIosIcon sx={{ marginRight: "10%" }} />
            </IconButton>
            <Typography variant="subtitle2">{selectedItem.title}</Typography>
          </Container>

          <Container sx={{ marginTop: "5%", paddingBottom: "5rem" }}>
            <List>
              {selectedItem.modifiers.length > 0 && (
                <>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ fontWeight: "bold" }}
                  >
                    Personalizar
                  </Typography>
                  {selectedItem.modifiers.map((modifier) => (
                    <ItemCounter
                      key={modifier.title}
                      {...modifier}
                      onModifierChange={(modifierTitle, newQuantity) =>
                        handleFieldChange(
                          "modifiers",
                          modifierTitle,
                          newQuantity
                        )
                      }
                    />
                  ))}
                </>
              )}
            </List>

            <List>
              {selectedItem.extras.length > 0 && (
                <>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ fontWeight: "bold" }}
                  >
                    Extras
                  </Typography>
                  {selectedItem.extras.map((extra) => (
                    <ItemCounter
                      key={extra.title}
                      {...extra}
                      onModifierChange={(modifierTitle, newQuantity) =>
                        handleFieldChange("extras", modifierTitle, newQuantity)
                      }
                    />
                  ))}
                </>
              )}
            </List>
            <List>
              {selectedItem.adicionales.length > 0 && (
                <>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ fontWeight: "bold" }}
                  >
                    Adicionales
                  </Typography>
                  {selectedItem.adicionales.map((adicional) => (
                    <ItemCounter
                      key={adicional.title}
                      {...adicional}
                      onModifierChange={(modifierTitle, newQuantity) =>
                        handleFieldChange(
                          "adicionales",
                          modifierTitle,
                          newQuantity
                        )
                      }
                    />
                  ))}
                </>
              )}
            </List>
            <List>
              {selectedItem.category === "Combos" && selectedItem.obligatorios.length > 0 && (
                <>
                  {selectedItem.obligatorios.map((itemCombo) => {
                    // Verifica si el título no es "Tamaño"
                    if (itemCombo.title === "Acompañamiento" || itemCombo.title === "Bebida") {
                      return (
                        <List key={itemCombo.title}>
                          <Typography
                            variant="h6"
                            gutterBottom
                            style={{ fontWeight: "bold" }}
                          >
                            {itemCombo.title}
                          </Typography>
                          {itemCombo.modifiers.map((modifier) => (
                            <ItemCounter
                              key={modifier.title}
                              {...modifier}
                              onModifierChange={(modifierTitle, newQuantity) =>
                                handleFieldChange(
                                  "obligatorios",
                                  modifierTitle,
                                  newQuantity
                                )
                              }
                              // onClick={showItem(modifier)}
                            />
                          ))}
                        </List>
                      );
                    }
                    // Si es "Tamaño", no renderiza nada
                    return null;
                  })}
                </>
              )}
            </List>
          </Container>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "sticky",
              bottom: 0,
              backgroundColor: "white",
              zIndex: 1,
              padding: "0%",
            }}
          >
            <Button
              variant="contained"
              color="warning"
              onClick={() => confirmar(selectedItem)}
              sx={{ width: "100%" }}
            >
              Confirmar
            </Button>
          </Container>
        </div>
      </Slide>
    </Modal>
  );
};

export default ItemModifier;
