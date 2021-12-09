import axios from "axios";

const api = axios.create({
    baseURL: 'http://t1g2-env.eba-iszdt5mq.us-east-1.elasticbeanstalk.com'
});

async function apiProduct(params) {

    return await api.get(params)
}

export default apiProduct;

// PRODUTO GET ALL /produto

// PRODUTO GET BY ID /produto/id

// GET BY CATEGORY NAME /produto/categoria/Action-Shooter-Sports