let orderNumber = 0;
let ticketNumber = 0

const generarOrden = () => {
  const ordenGenerado = orderNumber;
  orderNumber += 1;
  return ordenGenerado;
};
const generarTicket = () => {
  const ticketGenerado = ticketNumber;
  ticketNumber += 2;
  return ticketGenerado;
};

export { generarOrden, generarTicket };
