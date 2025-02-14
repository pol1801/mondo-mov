import React, { useState } from "react";
import { TextField, Button, Card, Typography, Box } from "@mui/material"; // Importamos los componentes de Material-UI
import { ClimaWidget } from "./ClimaWidget";

export const ClimaCard = () => {
    const [ciudad, setCiudad] = useState('');
    const [ciudadBuscar, setCiudadBuscar] = useState('');

    const handleChange = (e) => {
        setCiudad(e.target.value);
    };

    const handleSearchCity = () => {
        setCiudadBuscar(ciudad);
    };

    return (
        <Card elevation={0} sx={{ maxWidth: 500, margin: 'auto', padding: 3 }}> {/* Usamos Card para envolver el contenido */}
            <Typography gutterBottom>
                Buscador de Clima
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}> {/* Usamos Box para alinear los elementos */}
                <TextField
                    fullWidth
                    type="text"
                    label="Introduzca la ciudad..."
                    value={ciudad}
                    onChange={handleChange}
                    variant="outlined"
                />
                <Button
                    variant="contained"
                    onClick={handleSearchCity}
                >
                    Buscar
                </Button>
            </Box>

            <ClimaWidget city={ciudadBuscar} />
        </Card>
    );
};