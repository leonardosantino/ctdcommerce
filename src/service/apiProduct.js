import axios from "axios";

const api = axios.create({
    baseURL: 'https://e-commerce-ctd.herokuapp.com'
});

async function apiProduct(params) {

    return await api.get(params, {
        method: 'get',
        mode: 'no-cors',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, Accept, X-Requested-With, content-type, Authorization",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
            "Content-Type": "application/json"
        }
    })
}

export default apiProduct;

// PRODUTO GET ALL /produto

// PRODUTO GET BY ID /produto/id

// GET BY CATEGORY NAME /produto/categoria/Action-Shooter-Sports