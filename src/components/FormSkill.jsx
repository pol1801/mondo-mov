import React, { useEffect, useState } from 'react';
import {TextField, Box, Button} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { createSkill, updateSkill } from '../api/api';


function FormSkill(props) {

    const { skill: initialSkill, isEditing, open, handleClose, fetchData } = props;
    
    const [skill, setSkill] = useState({
        title: '',
        description: ''
    });

    /* useEffect(() => {
        setSkill(props.skill)
    }, [props.skill]); */

    useEffect(() => {
        if (initialSkill) {
            setSkill(initialSkill);
        }
    }, [initialSkill]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setSkill({
            ...skill,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (skill._id !== undefined) {
        // actualizar ítem existente
            updateSkill(skill._id, skill)
                .then((response) => {
                    if (response.data) {
                        fetchData(); // refresca la lista de skills
                        handleClose();
                        
                    }
                })
                .catch((error) => {
                    alert("No se pudo actualizar el skill: " + error.message);
                    handleClose();
                });
        } else {
            // crear un Skill
            createSkill(skill).then((response) => {
                if (response.data) {
                    handleClose();
                    fetchData()
                }
            }).catch((error) => {
                alert("No se pudo crear el Skill: " +  error.message);
                handleClose() 
            });
        }
        
    };

    return (
        <Box>
            <Dialog
                open={open}            
                onClose={handleClose}
            >
                <form onSubmit={handleSubmit}>
                
                    <DialogTitle id="alert-dialog-title">
                        {isEditing ? "Editar Skill" : "Crear Skill"}
                    </DialogTitle>

                    <DialogContent>
                        <TextField fullWidth
                            label="Título"
                            margin="normal"
                            name="title"
                            value={skill.title}
                            onChange={handleChange}
                            required
                        />
                        <TextField fullWidth
                            label="Descripción"
                            margin="normal"
                            name="description"
                            value={skill.description}
                            onChange={handleChange}
                            required
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button type='submit' autoFocus>
                            {isEditing ? "Guardar Cambios" : "Crear Nuevo Skill"}
                        </Button>
                    </DialogActions>
                </form>
                
            </Dialog>
        </Box>
    );       
};

export default FormSkill;