import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, ButtonGroup, Button, Box, IconButton, MenuIcon, MenuItem, Menu } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ThemeSwitcher from './ThemeSwitcher';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

const Header = ({ mode, onToggleTheme }) => {
    const navigate = useNavigate();
    const { isUserLogged, logout, login } = useAuth();
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
      const isAuthenticated = localStorage.getItem('token');
      if (isAuthenticated) {
          login(isAuthenticated)
      }
  }, []);

  const handleLogout = () => {
      logout();
      navigate('/')
  };


    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };    

  return (
    <AppBar component="header" position="static" sx={{ padding: 2 }}>
      <Toolbar
        sx={{
          flexDirection: 'column', // Cambia la dirección del contenido
          alignItems: 'stretch', // Asegura que todo esté alineado correctamente
          marginTop: {xs: 2, lg: 4}
        }}
      >
        {/* Primera fila: Título y Switch */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            background: 'primary.main',
            /* background: 'linear-gradient(270deg, #1976d2, #00b359)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', */
          }}
        >
          <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: { xs: '1.7rem', md: '2.2rem', lg: '6rem' } }}>
            Mondo Mov
          </Typography>
          <ThemeSwitcher mode={mode} onToggle={onToggleTheme} />
        </Box>

        {/* Segunda fila: Descripción */}

        <Box 
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          background: 'primary.main',
        }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'secondary.main',
              fontSize: { xs: '1.2rem', md: '1.9rem', lg: '2.5rem' },
              fontWeight: 'bold',
              marginTop: 0,
              textAlign: 'left',
              width: '100%',
            }}
          >
            Diseño Multimedia Profesional
          </Typography>
          {/* <Box >
              <IconButton
                size="large"
                color="inherit"
              >
                {!isUserLogged ?
                <AccountBoxIcon onClick={() => navigate('/PanelPage')} sx={{ textTransform: 'capitalize' }}/>
                :
                <ArrowBackIcon onClick={handleLogout} sx={{ textTransform: 'capitalize' }}/>
              }
              </IconButton>
            </Box> */}
        </Box>
        
        

      </Toolbar>
      {/* Tercera fila: Botones de navegación */}
      <ButtonGroup
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginTop: 2,
            paddingTop: 2,
            paddingBottom: 2,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Button color="inherit" onClick={() => navigate('/')} 
            sx={{ 
              textTransform: 'capitalize',
              fontSize: { xs: '0.8rem', md: '0.9rem', lg: '0.9rem'} }}>
            Home
          </Button>

          <Button color="inherit" onClick={() => navigate('/PagServicios')} 
            sx={{ 
              textTransform: 'capitalize',
              fontSize: { xs: '0.8rem', md: '0.9rem', lg: '0.9rem'} }}>
            Servicios
          </Button>
          

          {/* SUSPENDIDA POR EL MOMENTO */}
          {/* <Button color="inherit" onClick={() => navigate('/PagSkills')} sx={{ textTransform: 'capitalize' }}>
            Skills
          </Button> */}

          <Button color="inherit" onClick={() => navigate('/PagAudioVisual')} 
            sx={{ 
              textTransform: 'capitalize',
              lineHeight: '1.1',
              fontSize: { xs: '0.8rem', md: '0.9rem', lg: '0.9rem'} }}>
            Proyectos AV
          </Button>

          <Button color="inherit" onClick={() => navigate('/PagIT')} 
            sx={{ 
              textTransform: 'capitalize',
              lineHeight: '1.1',
              fontSize: { xs: '0.8rem', md: '0.9rem', lg: '0.9rem'} }}>
            Proyectos IT
          </Button>

          <Button color="inherit" onClick={() => navigate('/PagContacto')} 
            sx={{ 
              textTransform: 'capitalize',
              fontSize: { xs: '0.8rem', md: '0.9rem', lg: '0.9rem'} }}>
            Contacto
          </Button>

          {/* Botón condicional para "Panel Page" */}
          {isUserLogged && (
                <Button color="inherit" onClick={() => navigate('/PanelPage')} sx={{ textTransform: 'capitalize' }}>
                    Panel de Control
                </Button>
           )}

          
        </ButtonGroup>
    </AppBar>
    
  );
};

export default Header;
