import axios from 'axios';

const host = axios.create(
    {
        baseURL: 'https://jsonplaceholder.typicode.com/',
        responseType: 'json'
    }
)


const getUsers = (callback, errorHendler = (() => { })) => host.get('/users').then(callback, errorHendler);

export default { getUsers }