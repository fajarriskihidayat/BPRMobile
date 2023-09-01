import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.132.144.89:3000/',
});

export default api;
