// http/httpClient.js
import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false // coloque true se o backend exigir cookies/autenticação de sessão
});

// Interceptor de resposta global (tratamento de erros etc.)
axiosClient.interceptors.response.use(
  response => response,
  error => {
    console.error("Erro HTTP:", error.response || error.message);
    return Promise.reject(error);
  }
);

// Wrapper com os métodos HTTP
const httpClient = {
  get: (url, config = {}) => axiosClient.get(url, config),
  post: (url, data, config = {}) => axiosClient.post(url, data, config),
  put: (url, data, config = {}) => axiosClient.put(url, data, config),
  delete: (url, config = {}) => axiosClient.delete(url, config),
};

export default httpClient;