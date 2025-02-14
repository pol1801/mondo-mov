import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

export default function PagServicios() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      minHeight: '33vh',
      py: 1,
      px: { xs: 1, sm: 2, md: 4 },
      mt: { xs: 6, sm: 8 },
      mb: 2
    }}>
      <Box sx={{
        width: '100%',
        maxWidth: '800px'
      }}>

        {/* Videos de Animación */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} 
        sx={{ 
          /* width: '100%', */
          background: 'linear-gradient(90deg, #1976d2, #00b359)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 0
          }} >
        <AccordionSummary
          sx={{ minHeight: { xs: 60, md: 90 } }}
          expandIcon={<ExpandMoreIcon sx= {{color: 'secondary.main'}} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography 
            variant="h2"  component="div"
            sx={{ 
              color: 'secondary.main', 
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              fontWeight: 700, 
              flexShrink: 0 }}>
              Videos de Animación
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ py: 3, paddingTop: 0 }}>
          <Typography 
          variant="body1" component="div"
          sx={{ color: 'secondary.main', 
            fontSize: { xs: '1rem', md: '1.1rem' },
            fontWeight: 500, 
            lineHeight: 1.1,
            flexShrink: 0 }}>
            Ilustración | Storyboard | Rigging y Animación de personajes
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      {/* Motion Graphics */}
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
        sx={{ 
          /* width: '100%', */
          background: 'linear-gradient(90deg, #1976d2, #00b359)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 0,
          }}
        >
        <AccordionSummary
          sx={{ minHeight: { xs: 60, md: 90 } }}
          expandIcon={<ExpandMoreIcon sx= {{color: 'secondary.main'}}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
          variant="h2"  component="div"
          sx={{ color: 'secondary.main',
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
            fontWeight: 700,
            flexShrink: 0 }}>
            Motion Graphics
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ py: 3, paddingTop: 0 }}>
          <Typography
            variant="body1" component="div"
            sx={{ color: 'secondary.main',
            fontSize: { xs: '1rem', md: '1.1rem' },
            fontWeight: 500,
            lineHeight: 1.1,
            flexShrink: 0 }}>
            Diseño y Animación de piezas gráficas y 3D
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Edición de Audio y Video */}
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} 
        sx={{ 
          /* width: '100%', */
          background: 'linear-gradient(90deg, #1976d2, #00b359)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 0,
          }}
        >
        <AccordionSummary
          sx={{ minHeight: { xs: 60, md: 90 } }}
          expandIcon={<ExpandMoreIcon sx= {{color: 'secondary.main'}}/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography 
            variant="h2"  component="div"
            sx={{ 
            color: 'secondary.main',
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
            fontWeight: 700,
            flexShrink: 0 }}>
            Edición de Audio y Vídeo
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails sx={{ py: 3, paddingTop: 0 }}>
          <Typography
            variant="body1" component="div"
            sx={{ 
              color: 'secondary.main',
              fontSize: { xs: '1rem', md: '1.1rem' },
              fontWeight: 500,
              lineHeight: 1.1,
              flexShrink: 0 }}>
            Edición de piezas audiovisuales | Efectos de sonidos | Musicalización de video
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Desarrollo Full-Stack */}
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} 
        sx={{ 
          /* width: '100%', */
          background: 'linear-gradient(90deg, #1976d2, #00b359)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 0,
          }}
      >
        <AccordionSummary
          sx={{ minHeight: { xs: 60, md: 90 } }}
          expandIcon={<ExpandMoreIcon sx= {{color: 'secondary.main'}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography 
          variant="h2"  component="div"
          sx={{ 
            color: 'secondary.main',
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
            fontWeight: 700,
            flexShrink: 0 }}>
            Desarrollo Full-Stack
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ py: 3, paddingTop: 0 }}>
          <Typography
            variant="body1" component="div"
            sx={{ 
              color: 'secondary.main',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.1,
              fontWeight: 500,
              flexShrink: 0 }}>
            Diseño de sitios y aplicaciones web | Implementación FrontEnd y BackEnd
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      
    </Box>
  );
};
