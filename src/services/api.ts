
import axios from "axios";


const api = axios.create({
  baseURL: "https://api-football-v1.p.rapidapi.com/v3/",
  headers: {
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
  }
});

export default api;