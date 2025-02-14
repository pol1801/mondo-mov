import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, GlobalStyles } from '@mui/material';
import { getTheme } from './themes/theme';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components-pages/Home';
import PagServicios from './components-pages/PagServicios';
import PagContacto from './components-pages/PagContacto';
import PagAudioVisual from './components-pages/PagAudioVisual';
import PagIT from './components-pages/PagIT';
// import PagSkills from './pages/PagSkills';
import HomePagePanel from "./components-pages/panel/PanelPage";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components-pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import '@fontsource/roboto';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const [mode, setMode] = useState('light'); // Estado para el modo del tema
  const toggleTheme = () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  

  return (
    <AuthProvider>
    <Router>
      <ThemeProvider theme={getTheme(mode)}>
        <CssBaseline />
        {/* Fuerza la aplicación de Roboto */}
        <GlobalStyles
          styles={{
            body: { fontFamily: 'Roboto, sans-serif' },
            '*': { fontFamily: 'Roboto, sans-serif' },
          }}
        />
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          
          <Header mode={mode} onToggleTheme={toggleTheme} />
          <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/PagServicios" element={<PagServicios />} />
              {/* SUSPENDIDA TEMPORALMENTE */}
              {/* <Route path="/PagSkills" element={<PagSkills />} /> */}
              <Route path="/PagAudioVisual" element={<PagAudioVisual />} />
              <Route path="/PagIT" element={<PagIT />} />
              <Route path="/PagContacto" element={<PagContacto/>} />
              <Route path="/Login" element={<Login />} />
              {/* <Route path="/PanelPage" element={<HomePagePanel/>} /> */}
              <Route element={<PrivateRoute />}>
                <Route path="/PanelPage" element={<HomePagePanel/>} />
              </Route>
            </Routes>
          </Box>
          <Footer  />
        </Box>
      </ThemeProvider>
    </Router>
    </AuthProvider>
    
  );
};



export default App;
