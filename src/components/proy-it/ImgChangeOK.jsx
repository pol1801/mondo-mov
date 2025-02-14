import React, { useState } from "react";
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';
import { Card, CardMedia, Button, ButtonGroup, Box } from "@mui/material";

const IMAGENES = { img1, img2, img3, img4 };

function ImgChange() {
  const [imagenActual, setImagenActual] = useState(IMAGENES.img1);

  const cambiarImagen = (img) => setImagenActual(IMAGENES[img]);

  return (
    <Card 
      elevation={0} 
      sx={{ 
        width: 400, 
        height: 533, // Proporción 3:4
        maxWidth: "100%",
        aspectRatio: '3 / 4', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center', 
        padding: 2
      }}
    > 
      <CardMedia
        component="img"
        image={imagenActual}
        alt="Imagen actual"
        sx={{ 
          width: '100%',
          height: '100%', 
          objectFit: 'cover',
          borderRadius: 4
        }}
      />

      <Box sx={{ display: 'flex', marginTop: 2 }}> 
        <ButtonGroup variant="contained">
          <Button onClick={() => cambiarImagen('img1')}>1</Button>
          <Button onClick={() => cambiarImagen('img2')}>2</Button>
          <Button onClick={() => cambiarImagen('img3')}>3</Button>
          <Button onClick={() => cambiarImagen('img4')}>4</Button>
        </ButtonGroup>
      </Box>
    </Card>
  );
}

export default ImgChange;
