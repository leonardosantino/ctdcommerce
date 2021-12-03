import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:8080'
});

async function apiCard() {

    return await api.get("/produto/1")
}

export default apiCard;