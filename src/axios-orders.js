import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-a077e.firebaseio.com/'
});

export default instance;