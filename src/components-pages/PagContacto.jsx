import * as React from 'react';
import { TextField, Button, Snackbar, Alert, Container, Typography, Grid2 } from '@mui/material';
import { useState } from 'react';
import emailjs from 'emailjs-com';
//import { StayPrimaryLandscape } from '@mui/icons-material';

const PagContacto = () => {

    const [contact, setContact] = useState({
        name: '',
        lastname: '',
        email: '',
        message: ''
    });

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }

    const handleSubmit = (e) => {
        // parametro 1: serviceID
        // parametro 2: templateID
        // parametro 3: target formulario
        // parametro 4: Public Key
        emailjs.sendForm(
            'service_c2lr87d', 
            'template_uy1vxv6', 
            e.target, 
            'M3q6OqwpPPvvEe811').then((result) => {
                if (result.text === 'OK'){
                    setOpen(true)
                    setContact({
                        name: '',
                        lastname: '',
                        email: '',
                        message: ''
                    });
                }
            }, (error) => {
            console.log(error.text);
            });
            e.preventDefault()
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };





    return(
        <Container container maxWidth='sm'
            sx={{
                /* margin: { xs: '4px', md: '12px', lg: '20px 250px 20px 250px' }, */
                justifyContent: 'center'
            }}>
            <Typography
                variant='h2'
                sx={{ 
                    marginTop: '20px',
                    background: 'linear-gradient(180deg, #1976d2, #00b359)',
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent',
                    color: 'tertiary.main', 
                    fontSize: '1.5rem', 
                    fontWeight: '700' }}
            >
                No dudes en consultarme</Typography>

            <form onSubmit={handleSubmit}>
                    <TextField 
                        fullWidth
                        label='Nombre'
                        margin='normal'
                        value={contact.name}
                        name='name'
                        onChange={handleChange}
                        required
                    />

                    <TextField 
                        fullWidth
                        label='Email'
                        margin='normal'
                        value={contact.email}
                        name='email'
                        onChange={handleChange}
                        required
                    />
                    <TextField 
                        fullWidth
                        label='Mensaje'
                        margin='normal'
                        value={contact.message}
                        name='message'
                        onChange={handleChange}
                        multiline
                        rows={5}
                    />
                
                <Button variant='contained' type='submit' 
                    sx={{ fontSize: '0.9rem', mt: 1, color: 'secondary.main', textTransform: 'capitalize', bgcolor: 'tertiary.main' }}>
                        <Typography/>Enviar
                </Button>
                <Snackbar anchorOrigin={{ vertical: 'top', horizontal:'center' }} open={open} autoHideDuration={7000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
                        Gracias por tu mensaje,<br/>
                        responderé a la brevedad.
                    </Alert>
                </Snackbar>

            </form>
        </Container>
    );
};

export default PagContacto;