import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getAllSkills } from '../api/api'; // Asegúrate de importar la función correcta para obtener las skills

export default function PagSkills() {
  const [expanded, setExpanded] = React.useState(false);
  const [skills, setSkills] = React.useState([]); // Estado para almacenar las skills

  // Función para obtener las skills desde la API
  React.useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await getAllSkills(); // Llama a la función que obtiene las skills
        if (response.data) {
          setSkills(response.data); // Almacena las skills en el estado
        }
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills(); // Llama a la función al montar el componente
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
      width: '100%',
      marginTop: 70
    }}>
      <div>
        {skills.map((skill, index) => (
          <Accordion
            key={skill._id} // Usamos el ID de la skill como clave
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              width: '100%',
              background: 'linear-gradient(90deg, #1976d2, #00b359)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            <AccordionSummary
              sx={{ minHeight: 90 }}
              expandIcon={<ExpandMoreIcon sx={{ color: 'secondary.main' }} />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <Typography
                variant="h1"
                component="span"
                sx={{ color: 'secondary.main', fontSize: '1.5rem', fontWeight: 700, minHeight: 33, flexShrink: 0 }}
              >
                {skill.title} {/* Muestra el título de la skill */}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ minHeight: 90 }}>
              <Typography
                variant="body1"
                component="span"
                sx={{ color: 'secondary.main', fontSize: '1.25rem', fontWeight: 500, flexShrink: 0 }}
              >
                {skill.description} {/* Muestra la descripción de la skill */}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};