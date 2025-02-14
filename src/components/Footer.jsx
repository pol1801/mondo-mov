import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      position="static"
      component="footer"
      sx={{
        padding: 4,
        textAlign: 'center',
        bgcolor: 'primary.main',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography  variant="body1" sx={{ color: 'secondary.main', fontSize: '1.2rem', fontWeight: 500, minHeight: 33 }}>
        © 2025 | Desarrollado con React.js + Material-UI
      </Typography>
    </Box>
  );
};

export default Footer;
