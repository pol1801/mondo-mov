import axios from 'axios';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = '12b5077c7595bd2c694bdf0e3065f7b5';


/* '?q={city_name}&appid={api_key}' */


const cliente = axios.create({
    baseURL: API_BASE_URL,
});

export const obtenerDatosClima = async (city) => {
    try {
        const respuesta = await cliente.get(`?q=${city}&appid=${API_KEY}`)
        return respuesta.data
    }
    catch (error) {
        console.log(error)
    }
};