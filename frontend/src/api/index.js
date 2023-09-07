import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.132.177.172:3000/',
});

export default api;
