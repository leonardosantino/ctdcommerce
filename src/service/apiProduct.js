import axios from "axios";

const api = axios.create({
    baseURL: 'https://e-commerce-ctd.herokuapp.com'
});

async function apiProduct(params) {

    return await api.get(params)
}

export default apiProduct;

// PRODUTO GET ALL /produto

// PRODUTO GET BY ID /produto/id

// GET BY CATEGORY NAME /produto/categoria/Action-Shooter-Sports