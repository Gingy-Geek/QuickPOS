import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { generarOrden, generarTicket } from "../components/global";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// import { nanoid } from 'nanoid';  codigo al azar

const TicketWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "80%",
}));

const TicketNumber = styled(Typography)(() => ({
  borderTop: "dotted",
  padding: "10px",
  width: "100%",
  borderBottom: "dotted",
  alignItems: "center",
  alignSelf: "center",
  textAlign: "center",
  marginBottom: "20px",
}));

const TicketItems = styled("div")(({ justifyContent }) => ({
  display: "flex",
  // flexDirection: 'column',
  justifyContent: justifyContent,
  width: "100%",
  marginBottom: "1%",
}));

const Ticket = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [itemsTicket, setOrderItems] = React.useState(
    location.state?.itemsTicket || []
  );
  const [efectivo, setEfectivo] = React.useState(
    Number(location.state?.efectivo || 0)
  );
  const [precioTotal, setPrecioTotal] = React.useState(
    Number(location.state?.precioTotal || 0)
  );

  const [numeroOrden, setNumeroOrden] = React.useState(null);
  const [numeroTicket, setNumeroTicket] = React.useState(null);

  React.useEffect(() => {
    setNumeroOrden(generarOrden);
    setNumeroTicket(generarTicket);
  }, []);

  const formattedDate = new Date().toLocaleString("es-AR");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TicketWrapper elevation={3}>
        <TicketNumber
          variant="h3"
          component="h3"
          sx={{ fontFamily: "fantasy" }}
        >
          NRO ORDEN: {numeroOrden}
        </TicketNumber>
        <TicketItems justifyContent={"flex-end"}>
          <Typography variant="body1" component="p">
            Fecha: {formattedDate}
          </Typography>
        </TicketItems>
        <TicketItems
          justifyContent={"space-between"}
          sx={{ marginBottom: "1rem" }}
        >
          <Typography variant="body1" component="p">
            Cantidad Articulo
          </Typography>
          <Typography variant="body1" component="p">
            Precio
          </Typography>
        </TicketItems>
        {itemsTicket.map((articulo, index) => (
          <React.Fragment key={index}>
            <TicketItems
              justifyContent={"space-between"}
              sx={{ marginBottom: "3%", marginTop: "3%" }}
            >
              <Typography
                variant="body2"
                component="p"
                sx={{ marginLeft: "3%", width: "50%", fontWeight: "bold" }}
              >
                {articulo.title}{" "}
                {articulo.quantity > 1 && `x ${articulo.quantity}`}
              </Typography>
              <div style={{ display: "flex", justifyContent: "row" }}>
                {articulo.quantity > 1 && (
                  <Typography
                    component="p"
                    variant="caption"
                    style={{ fontWeight: "bold", marginRight: "1rem" }}
                  >
                    {articulo.quantity}x@ {articulo.price}
                  </Typography>
                )}
                <Typography variant="body2" component="p">
                  {(articulo.price * articulo.quantity).toFixed(2)}
                </Typography>
              </div>
            </TicketItems>
            {articulo.obligatorios &&
              articulo.obligatorios.map((campo, subIndex) =>
                campo.title !== "Tamaño"
                  ? campo.options.map((opcion) => (
                      <TicketItems
                        key={`${index}-${subIndex}`}
                        justifyContent={"space-between"}
                        sx={{ marginBottom: "2%" }}
                      >
                        <Typography
                          variant="caption"
                          component="p"
                          sx={{ marginLeft: "5%", width: "50%" }}
                        >
                          {"-"}
                          {opcion.title}{" "}
                        </Typography>

                        <div style={{ display: "flex", justifyContent: "row" }}>
                          {articulo.quantity > 1 && opcion.price > 0 && (
                            <Typography
                              variant="caption"
                              component="p"
                              style={{
                                fontWeight: "bold",
                                marginRight: "1rem",
                              }}
                            >
                              {articulo.quantity}x@ {opcion.price}
                            </Typography>
                          )}
                          <Typography variant="caption" component="p">
                            {(opcion.price * articulo.quantity).toFixed(2)}
                          </Typography>
                        </div>
                      </TicketItems>
                    ))
                  : null
              )}
            {articulo.category === "Combos" &&
              articulo.obligatorios.map(
                (campo, campoIndex) =>
                  (campo.title === "Acompañamiento" ||
                    campo.title === "Bebida") && (
                    <TicketItems
                      key={`${index}-${campoIndex}`}
                      justifyContent={"space-between"}
                      sx={{ marginBottom: "2%" }}
                    >
                      {campo.modifiers.map((mod, modIndex) => (
                        <React.Fragment
                          key={`${index}-${campoIndex}-${modIndex}`}
                        >
                          <Typography
                            variant="caption"
                            component="p"
                            sx={{ marginLeft: "5%", width: "50%" }}
                          >
                            {(() => {
                              if (
                                mod.checkbox &&
                                mod.initialQuantity === 1 &&
                                mod.quantity === 0
                              ) {
                                return `-Sin ${mod.title}`;
                              } else if (
                                mod.checkbox &&
                                mod.initialQuantity === 0 &&
                                mod.quantity === 1
                              ) {
                                return `-Con ${mod.title}`;
                              }
                            })()}
                          </Typography>
                          <Typography variant="caption" component="p">
                            {(() => {
                              //Es un checkbox, solo puede tener 1... si quantity es 0, el precio es 0
                              if (
                                mod.checkbox &&
                                mod.initialQuantity === 1 &&
                                mod.quantity === 0
                              ) {
                                return 0.0;
                                //si quantity es 1, el precio es el mod.price
                              } else if (
                                mod.checkbox &&
                                mod.initialQuantity === 0 &&
                                mod.quantity === 1
                              ) {
                                return (mod.price * articulo.quantity).toFixed(
                                  2
                                );
                              }
                            })()}
                          </Typography>
                        </React.Fragment>
                      ))}
                    </TicketItems>
                  )
              )}
            {/* Renderizar modificadores al final */}
            {articulo.modifiers &&
              articulo.modifiers.map((modifier, modifierIndex) => (
                <TicketItems
                  key={`${index}-${modifierIndex}`}
                  justifyContent={"space-between"}
                  sx={{ marginBottom: "2%" }}
                >
                  <Typography
                    variant="caption"
                    component="p"
                    sx={{ marginLeft: "5%", width: "50%" }}
                  >
                    {"(Mod)"}
                    {/* //estructura del condicional--- (() => {  código  })() */}
                    {(() => {
                      if (modifier.checkbox && modifier.quantity === -1) {
                        return `sin ${modifier.title}`;
                      } else if (modifier.checkbox && modifier.quantity === 1) {
                        return `${modifier.title}`;
                      } else {
                        return `${modifier.title} ${
                          modifier.quantity > 0
                            ? `+${modifier.quantity}`
                            : modifier.quantity
                        }`;
                      }
                    })()}
                  </Typography>
                  <div style={{ display: "flex", justifyContent: "row" }}>
                    {modifier.quantity > 0 && modifier.unitPrice > 0 && (
                      <Typography
                        variant="caption"
                        component="p"
                        style={{ fontWeight: "bold", marginRight: "1rem" }}
                      >
                        {articulo.quantity * modifier.quantity}x@{" "}
                        {modifier.unitPrice}
                      </Typography>
                    )}
                    <Typography
                      variant="caption"
                      component="p"
                      sx={{ display: "flex", flexDirection: "row" }}
                    >
                      {(modifier.total_price * articulo.quantity).toFixed(2)}
                    </Typography>
                  </div>
                </TicketItems>
              ))}

            {/* Renderizar modificadores adicionales */}
            {articulo.adicionales &&
              articulo.adicionales.map((adicional, adicionalIndex) => (
                <TicketItems
                  key={`${index}-${adicionalIndex}`}
                  justifyContent={"space-between"}
                  sx={{ marginBottom: "2%" }}
                >
                  <Typography
                    variant="caption"
                    component="p"
                    sx={{ marginLeft: "5%", width: "50%" }}
                  >
                    {"(Ad)"}
                    {/* //estructura del condicional--- (() => {  código  })() */}
                    {(() => {
                      if (adicional.checkbox && adicional.quantity === 1) {
                        return `${adicional.title}`;
                      } else {
                        return `${adicional.title} ${
                          adicional.quantity > 0
                            ? `+${adicional.quantity}`
                            : adicional.quantity
                        }`;
                      }
                    })()}
                  </Typography>
                  <Typography variant="caption" component="p">
                    {(adicional.price * articulo.quantity).toFixed(2)}
                  </Typography>
                </TicketItems>
              ))}
          </React.Fragment>
        ))}

        <TicketItems justifyContent={"space-between"}>
          <Typography
            variant="h5"
            component="h5"
            sx={{ fontFamily: "fantasy" }}
          >
            TOTAL
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            sx={{ fontFamily: "fantasy" }}
          >
            {precioTotal.toFixed(2)}
          </Typography>
        </TicketItems>
        <TicketItems justifyContent={"space-between"}>
          <Typography>Efectivo</Typography>
          <Typography>{efectivo.toFixed(2)}</Typography>
        </TicketItems>
        <TicketItems justifyContent={"space-between"}>
          <Typography>Vuelto</Typography>
          <Typography>{(efectivo - precioTotal).toFixed(2)}</Typography>
        </TicketItems>
        <TicketNumber
          variant="h3"
          component="h3"
          sx={{ fontFamily: "fantasy" }}
        >
          NRO TICKET: {numeroTicket}
        </TicketNumber>
      </TicketWrapper>
      <Button sx={{ marginTop: "5%" }} onClick={() => navigate("/")}>
        Volver al inicio
      </Button>
    </div>
  );
};

export default Ticket;
