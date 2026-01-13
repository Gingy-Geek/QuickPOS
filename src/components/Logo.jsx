import React from 'react'
import Icon from '../images/burgerIcon.png'

import { Paper, Avatar } from '@mui/material';
const Logo = () => {
  return (
    <Paper elevation={0} sx={{ borderRadius: '3%', height: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
  <img
  alt="Imagen"
  src={Icon}
  style={{
    width: '80px',
    height: '80px',
    overflow: 'hidden',  // Oculta las esquinas de la imagen que no encajan en el círculo
    objectFit: 'contain',  // Puedes usar 'cover', 'contain', 'fill', etc. según tus necesidades
  }}
/>
<h3 style={{marginBottom: '2%', marginLeft:'1%', alignSelf:'end'}}>QuickPOS</h3>
    </Paper>
  )
}

export default Logo
//x