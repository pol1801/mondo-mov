import React from 'react';
import ImgChangeOK from '../components/proy-it/ImgChangeOK';
import Cabello from '../components/proy-it/Cabello';
import IntCompuesto from '../components/proy-it/IntCompuesto';
import {ClimaCard} from '../components/proy-it/ClimaWidgetCard';
import { Grid2, Paper, Typography } from '@mui/material';


const PagIT = () => {
  return (
    <Grid2 container spacing={4} padding={3}>
      {/* Cada componente se envuelve en un Grid2 item */}
      <Grid2 item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '16px' }} sx={{borderRadius: 4}}>
          <Typography variant='h4' gutterBottom>
            Cambia la imagen
          </Typography>
          <Typography variant='body' gutterBottom>
            Usa los botones
          </Typography>
          <ImgChangeOK />
        </Paper>
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '16px' }} sx={{borderRadius: 4}}>
          <Typography variant='h4' gutterBottom>
            Calculadora de cabello
          </Typography>
          <Cabello />
        </Paper>
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '16px' }} sx={{borderRadius: 4}}>
          <Typography variant='h4' gutterBottom>
            Interés Compuesto
          </Typography>
          <IntCompuesto />
        </Paper>
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '16px' }} sx={{borderRadius: 4}}>
          <Typography variant='h4' gutterBottom>
            Clima
          </Typography>
          <ClimaCard />
        </Paper>
      </Grid2>
    </Grid2>
  );
};



export default PagIT;
