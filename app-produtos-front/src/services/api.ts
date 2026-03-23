import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL ? process.env.API_URL : "https://dummyjson.com/", 
  headers: {
    'Content-Type': 'application/json',
  },
});

const getProdutosTodos = () => {
    return api.get("/products/");
}

export { getProdutosTodos };
export default api;