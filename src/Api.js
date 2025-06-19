
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000', 
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use((config) => {
  const sessionString = localStorage.getItem('supabase.session');
  if(sessionString){
    const session = JSON.parse(sessionString);
    config.headers.Authorization = `Bearer ${session.access_token}`
  }
  return config
},(error) => {
  return Promise.reject(error)
})

export default API;
