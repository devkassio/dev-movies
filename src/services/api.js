import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'a32fc10e322c75bff0dc91e408085814',
    language: 'pt-BR',
    page: 1,
  },
});

export default api;
