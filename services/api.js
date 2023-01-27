import axios from 'axios';

export const api  = axios.create({
    baseURL: '' /*Link aqui até o V'*/,
    headers: {
        apikey: " ", /*Api key*/
        authorization: "" /*autorização*/
    }
})