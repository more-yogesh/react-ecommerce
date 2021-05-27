import axios from "axios"

let requestHeaders = {
    Accept: 'application/json',
    Authorization: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null
}

const api = axios.create({
    baseURL: 'http://best-it-training.com/api',
    headers: requestHeaders
});

export default api;
