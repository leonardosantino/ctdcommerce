//import axios from "axios";
// const api = axios.create({
//     baseURL: ''
// });

const Api = () => {
    return fetch('/gamesBack.json').then(res => res.json())
}

export default Api;