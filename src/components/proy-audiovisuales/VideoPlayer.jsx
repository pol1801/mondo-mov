import React, { useState } from 'react';
import { Card, Typography, Button, ButtonGroup, Box } from '@mui/material'; // Importamos los componentes de Material-UI

function VideoPlayer() {
    // Estado para elegir la URL, por defecto muestra Reel 2021
    const [videoURL, setVideoURL] = useState("https://www.youtube.com/embed/EyHU4vX54c0?si=7g4sXtlWp_Ykzch5");

    const reel2021Click = () => {
        setVideoURL("https://www.youtube.com/embed/EyHU4vX54c0?si=7g4sXtlWp_Ykzch5");
    };

    const reel2019Click = () => {
        setVideoURL("https://www.youtube.com/embed/f69gLB2mxYE?si=NYgwCAzHAAJQ0PAd");
    };

    return (
        <Card elevation={3} sx={{ maxWidth: 800, margin: 'auto', padding: 3, borderRadius: 4 }}> {/* Usamos Card para envolver el contenido */}
            <Typography variant="h4" gutterBottom align="center">
                DemoReel - PabloPol
            </Typography>
            <Typography variant="body1" gutterBottom align="center">
                Esto es un resumen de mi trabajo audiovisual.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}> {/* Centramos el iframe */}
                <iframe
                    width="560"
                    height="315"
                    src={videoURL}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}> {/* Centramos los botones */}
                <ButtonGroup variant="contained" aria-label="outlined button group">
                    <Button onClick={reel2021Click}>Reel 2021</Button>
                    <Button onClick={reel2019Click}>Reel 2019</Button>
                </ButtonGroup>
            </Box>
        </Card>
    );
}

export default VideoPlayer;