import axios from "axios";

const BASE_URL = "http://localhost:3001";
const access_token = localStorage.getItem('token');


//--------- LOGIN
export const login = (loginData) => {
    return axios.post(`${BASE_URL}/auth/login`, loginData);
};




//-------- API SKILLS
//GET Y CREATE SKILLS
export const getAllSkills = (searchTerm) => {
    return axios.get(`${BASE_URL}/api/skills?title=${searchTerm || ''}`);
};

export const createSkill = (skill) => {
    return axios.post(`${BASE_URL}/api/skills`, skill,
        {
            headers: {
                'Authorization': `${access_token}`
            }
        }
    );
};

//UPDATE Y DELETE SKILLS
export const updateSkill = (id, skill) => {
    return axios.put(`${BASE_URL}/api/skills/${id}`, skill,
        {
            headers: {
                'Authorization': `${access_token}`
            }
        }
    );
};

export const removeSkill = (id) => {
    return axios.delete(`${BASE_URL}/api/skills/${id}`,
        {
            headers: {
                'Authorization': `${access_token}`
            }
        }
    );
};




