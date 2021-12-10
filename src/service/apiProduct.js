import axios from "axios";

const api = axios.create({
    baseURL: 'https://e-commerce-ctd.herokuapp.com'
});

async function apiProduct(params) {

    return await api.get(params, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Request-Method": "GET, OPTIONS",
            "Access-Control-Allow-Origin": "*"
        }
    })
}

export default apiProduct;

// PRODUTO GET ALL /produto

// PRODUTO GET BY ID /produto/id

// GET BY CATEGORY NAME /produto/categoria/Action-Shooter-Sports