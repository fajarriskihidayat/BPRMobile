import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.139.152:3000/',
});

export default api;
