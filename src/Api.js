
import axios from 'axios';

const API = axios.create({
  baseURL: 'projeto-gt-10-back-end.vercel.app', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
