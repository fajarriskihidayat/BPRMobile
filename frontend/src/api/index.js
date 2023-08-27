import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.132.189.179:3000/',
});

export default api;
