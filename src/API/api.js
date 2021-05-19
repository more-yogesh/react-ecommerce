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

// axios.post('http://best-it-training.com/api/login', values, headers).then(response => {
//     // console.log('RESPO', );
//     sessionStorage.setItem('token', 'Bearer ' + response.data.data.token);
// }).catch(err => {
//     console.error("THIUS IS ERROR AREA", err);
// })