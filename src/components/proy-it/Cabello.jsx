import React, { useState } from 'react';
import { Card, Typography, TextField, Box } from '@mui/material'; // Importamos los componentes de Material-UI

const Cabello = () => {
    const [edad, setEdad] = useState(0); // Estado para almacenar la edad

    // Función para calcular la longitud del cabello
    const calcu = (a) => {
        return a * (12 * 1.25) / 100;
    };

    return (
        <Card elevation={0} sx={{ maxWidth: 400, margin: 'auto', padding: 3 }}> {/* Usamos Card para envolver el contenido */}
            <Typography gutterBottom>
                ¿Cuánto mediría tu cabello si nunca lo hubieses cortado?
            </Typography>

            <Box sx={{ marginBottom: 2 }}> {/* Usamos Box para espaciar los elementos */}
                <TextField
                    fullWidth
                    type="number"
                    value={edad === 0 ? '' : edad}
                    onChange={(e) => setEdad(Number(e.target.value))}
                    label="Ingresa tu edad"
                    variant="outlined"
                />
            </Box>

            <Typography>
                Tu cabello mediría <strong>{calcu(edad)}</strong> metros aprox.
            </Typography>
        </Card>
    );
};

export default Cabello;