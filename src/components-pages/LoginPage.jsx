import React, { useState } from 'react';
import { TextField, Button, Container, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { login as logUser } from "../api/api";


const Login = ({ onLogin }) => {
    const {login} = useAuth();
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleLogin = async () => {
        try {
            const response = await logUser({ email: loginData.email, password: loginData.password });
            const { token } = response.data;

            //El token se guarda en localStorage
            localStorage.setItem('token', token);

            //Notifica login correcto
            login(token)
            navigate('/PanelPage')
        } catch(error) {
            if (error.response.status === 401) {
                alert("Login fallido, por favor intente nuevamente")
            } else {
                console.error("Login fallido por otros motivos", error);
                //Manejamos el error del login
            }
        }

    };

    return (
        <Container sx={{ marginTop: '20px' }}>
            <h4>Para acceder se requiere identificación</h4>
            {/* ver de agregar submit */} 
            <form> 
                <TextField fullWidth
                    label="Email"
                    margin="normal"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                    required 
                />
                <TextField fullWidth
                    label="Password"
                    margin="normal"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={loginData.password}
                    onChange={handleChange}
                    required
                    InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }} 
                />
                <Button variant="contained" onClick={() => handleLogin()} sx={{ mt: 2 }}>
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default Login;
