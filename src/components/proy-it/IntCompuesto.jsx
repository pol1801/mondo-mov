import React, { useState } from 'react';
import { Card, Typography, TextField, Radio, RadioGroup, FormControlLabel, Box, } from '@mui/material'; // Importamos los componentes de Material-UI

const IntComp = () => {
    // Estado para guardar el banco seleccionado, el monto y la cantidad de años
    const [selecBanco, setSelecBanco] = useState(null);
    const [principal, setPrincipal] = useState('');
    const [years, setYears] = useState('');

    // Tasas de interés anual de los bancos
    const bancos = [
        { name: 'Banco Nación', rate: 0.22 }, // 22% de interés
        { name: 'Banco Santa Fe', rate: 0.25 }, // 25% de interés
        { name: 'Banco Viejo', rate: 0.33 }  // 33% de interés
    ];

    // Función para calcular el interés compuesto
    const calculateInterest = (P, r, t) => {
        return P * Math.pow((1 + r), t);
    };

    return (
        <Card elevation={0} sx={{ maxWidth: 500, margin: 'auto', padding: 3 }}> {/* Usamos Card para envolver el contenido */}
            <Typography variant="body1" gutterBottom>
                Calculadora de Interés Compuesto
            </Typography>

            <Box sx={{ marginBottom: 2 }}> {/* Usamos Box para espaciar los elementos */}
                <Typography variant="body1" gutterBottom>
                    Selecciona un banco:
                </Typography>
                <RadioGroup
                    value={selecBanco ? selecBanco.name : ''}
                    onChange={(e) => {
                        const selectedBank = bancos.find(bank => bank.name === e.target.value);
                        setSelecBanco(selectedBank);
                    }}
                >
                    {bancos.map((bank, index) => (
                        <FormControlLabel
                            key={index}
                            value={bank.name}
                            control={<Radio />}
                            label={`${bank.name} - Tasa anual: ${bank.rate * 100}%`}
                        />
                    ))}
                </RadioGroup>
            </Box>

            <Box sx={{ marginBottom: 2 }}>
                <TextField
                    fullWidth
                    type="number"
                    label="Monto invertido"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    variant="outlined"
                />
            </Box>

            <Box sx={{ marginBottom: 2 }}>
                <TextField
                    fullWidth
                    type="number"
                    label="Cantidad de años"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    variant="outlined"
                />
            </Box>

            {selecBanco && principal && years && (
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="body1">
                        El valor futuro de la inversión es: 
                        <strong> ${calculateInterest(Number(principal), selecBanco.rate, Number(years)).toFixed(2)}</strong>
                    </Typography>
                </Box>
            )}
        </Card>
    );
};

export default IntComp;