import axios from "axios";


const apiAxios = axios.create({
    baseURL: 'localhost:8080'
});

export default apiAxios;