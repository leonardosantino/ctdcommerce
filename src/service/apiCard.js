import axios from "axios";

const api = axios.create({
    baseURL: '/games.json'
});

async function apiCard() {

    return await api.get()
}

export default apiCard;