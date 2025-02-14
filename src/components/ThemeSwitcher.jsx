import React from 'react';
import { Switch, Typography, Box } from '@mui/material';

const ThemeSwitcher = ({ mode, onToggle }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 2 }}>
      <Typography variant="body1" sx={{ marginRight: 1, color: "white" }}>
        {mode === 'light' ? 'Light' : 'Dark'}
      </Typography>
      <Switch checked={mode === 'dark'} onChange={onToggle} color="secondary" />
    </Box>
  );
};

export default ThemeSwitcher;

