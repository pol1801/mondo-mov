import React, { useState } from "react";
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';
import { Card, CardMedia, Button, ButtonGroup, Box } from "@mui/material";

const IMAGENES = {
  img1: img1,
  img2: img2,
  img3: img3,
  img4: img4
};

function ImgChange () {
  
  const [imagenActual, setImagenActual] = useState(IMAGENES.img1);

  const cambiarImagen = (img) => {
    setImagenActual(IMAGENES[img]);
  };

  return (
    <Card elevation={0} sx={{ 
      width: 375,
      height: 400,
      margin: 2,
      padding: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center' }}> 
      <CardMedia
        component="img"
        image={imagenActual}
        alt="Imagen actual"
        sx={{ 
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: 4
        }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}> 
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => cambiarImagen('img1')}>1</Button>
          <Button onClick={() => cambiarImagen('img2')}>2</Button>
          <Button onClick={() => cambiarImagen('img3')}>3</Button>
          <Button onClick={() => cambiarImagen('img4')}>4</Button>
        </ButtonGroup>
      </Box>
    </Card>
  );
};

export default ImgChange;
