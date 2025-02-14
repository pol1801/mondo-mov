import { getAllSkills, removeSkill, updateSkill } from "../../api/api";
import React, { useState, useEffect } from "react";
import { Container, Grid2, 
    TableContainer, Table, TableHead, TableBody, TableRow, TableCell, 
    Avatar, Paper, TextField, Button, IconButton,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import loader from "../../components/Loader";
import FormSkill from "../../components/FormSkill";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Edit";


function HomePagePanel() {
    const [skills, setSkills] = useState([]);
    const [loader, setLoader] = useState(false);
    const [open, setOpen] = useState(false); //controla el popup del form del ítem
    const [confirmOpen, setConfirmOpen] = useState(false); // nuevo estado para diálogo de confirmación
    const [selectedId, setSelectedId] = useState(null); // almacena el id del ítem a eliminar
    const [isEditing, setIsEditing] = useState(false);

    const [skill, setSkill] = useState({
        title: '',
        description: ''
    });


    
    const handleClickOpen = () => {
        setSkill({
            title: '',
            description: ''
        });
        setIsEditing(false);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirmClose = () => {
        setConfirmOpen(false);
        setSelectedId(null);
    };

    const handleConfirmOpen = (id) => {
        setSelectedId(id);
        setConfirmOpen(true);
    };

    const handleConfirmRemove = () => {
        if (selectedId) {
            removeSkill(selectedId)
                .then((response) => {
                    if (response) {
                        fetchData();
                    }
                })
                .catch((error) => {
                    alert(error);
                })
                .finally(() => handleConfirmClose());
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = (param) => {
        setLoader(true)
        getAllSkills(param).then((response) => {
            setSkills(response.data);
            setLoader(false)
        });
    };


    const handleUpdateItem = (item) => {
        setSkill(item);
        setIsEditing(true);
        setOpen(true);
    };


    

    return (
        <Container>
            <Button variant="outlined" onClick={handleClickOpen}>
                Nuevo Skill
            </Button>
            <FormSkill 
                skill={skill}
                isEditing={isEditing}
                handleClickOpen={handleClickOpen}
                open={open}
                handleClose={handleClose}
                fetchData={fetchData} /><br />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Título</TableCell>
                            <TableCell align="left">Descripción</TableCell>
                            <TableCell align="right">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {skills.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ fontWeight: '800' }} component='th' scope='row'>
                                    {row.title}
                                </TableCell>
                                <TableCell align='left'>{row.description}</TableCell>
                                <TableCell align='right'>
                                    <IconButton 
                                        color="inherit" 
                                        aria-label="Editar"
                                        onClick={()=>handleUpdateItem(row)}>    
                                        <UpdateIcon />
                                    </IconButton>
                                    <IconButton 
                                        color="inherit" 
                                        aria-label="Eliminar"
                                        onClick={() => handleConfirmOpen(row._id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            
                        ))} 
                    </TableBody>
                    
                </Table>
                <br></br>
                <br></br>
                <br></br>
            </TableContainer>

            {/* Dialog de Confirmación */}
            <Dialog open={confirmOpen} onClose={handleConfirmClose}>
                <DialogTitle>Confirmar Eliminación</DialogTitle>
                <DialogContent>
                    <DialogContentText>¿Estás seguro de que deseas eliminar este ítem? Esta acción no se puede deshacer.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleConfirmRemove} color="primary">
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
        
    );
};

export default HomePagePanel;

