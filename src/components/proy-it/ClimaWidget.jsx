import React, { useEffect, useState } from "react";
import { Card, Typography, Box, CircularProgress } from "@mui/material"; // Importamos los componentes de Material-UI
import { obtenerDatosClima } from "../../api/clima.api";

export const ClimaWidget = (props) => {
    const [climaActual, setClimaActual] = useState(null);
    const [loading, setLoading] = useState(false); // Estado para manejar la carga

    const obtenerClima = async () => {
        if (!props.city) return; // Si no hay ciudad, no hacemos la petición
        setLoading(true);
        try {
            let respuesta = await obtenerDatosClima(props.city);
            setClimaActual(respuesta);
        } catch (error) {
            console.error("Error al obtener el clima:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        obtenerClima();
    }, [props.city]);

    const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);
    const mpsToKmph = (mps) => (mps * 3.6).toFixed(2);

    const getCardinalDirection = (angle) => {
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        return directions[Math.round(angle / 45) % 8];
    };

    return (
        <Card elevation={0} sx={{ marginTop: 3, padding: 2 }}> {/* Usamos Card para envolver el contenido */}
            <Typography gutterBottom>
                Clima en {props.city}
            </Typography>

            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress /> {/* Mostramos un spinner mientras carga */}
                </Box>
            ) : climaActual ? (
                <Box>
                    <Typography>
                        <strong>Temperatura:</strong> {kelvinToCelsius(climaActual.main.temp)} °C
                    </Typography>
                    <Typography>
                        <strong>Presión:</strong> {climaActual.main.pressure} hPa
                    </Typography>
                    <Typography>
                        <strong>Viento:</strong> {mpsToKmph(climaActual.wind.speed)} km/h ({getCardinalDirection(climaActual.wind.deg)})
                    </Typography>
                </Box>
            ) : (
                <Typography>No se encontraron datos para la ciudad.</Typography>
            )}
        </Card>
    );
};