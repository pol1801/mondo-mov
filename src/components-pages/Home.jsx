import React from 'react';
import { Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflow: 'auto',
        px: 2,
        py: 1,
        }}
    >

      {/* Primer bloque de texto */}
      <Box
        sx={{
          my: { xs: 2, md: 2, lg: 2 },
          background: 'linear-gradient(180deg, #1976d2, #00b359)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: {
              xs: '1.4rem',
              sm: '2.2rem',
              md: '3.5rem',
              lg: '4rem',
              xl: '4rem'
            },
            fontWeight: 700,
            lineHeight: 1.2,
            textAlign: { xs: 'left', md: 'left' },
            wordBreak: 'break-word',
            marginLeft: { xs: 3, md: 10, lg: 50 },
            marginBottom: 0
          }}
        >
          Hola!, soy Pablo, 
          <Box component="br" display={{ xs: 'inline-block', md: 'block' }} />
          Diseñador Multimedial.
        </Typography>
      </Box>


      {/* Segundo bloque de texto */}
      <Box
        sx={{
          my: { xs: 2, md: 4, lg: 4 },
          background: 'linear-gradient(180deg, #1976d2, #00b359)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: {
              xs: '1.1rem',
              sm: '1.2rem',
              md: '3.5rem',
              lg: '3rem',
              xl: '3rem'
            },
            fontWeight: 700,
            lineHeight: 1.1,
            textAlign: { xs: 'left', md: 'left' },
            wordBreak: 'break-word',
            marginLeft: { xs: 3, md: 10, lg: 50 },
            marginTop: 0
          }}
        >
          <Box component="br" display={{ xs: 'none', md: 'block' }} />
          Ayudo a empresas y agencias de marketing 
          <Box component="br" display={{ xs: 'inline-block', md: 'block' }} />
          a potenciar su comunicación
          <Box component="br" display={{ xs: 'inline-block', md: 'block' }} />
          a través del vídeo en sus múltiples formatos.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;