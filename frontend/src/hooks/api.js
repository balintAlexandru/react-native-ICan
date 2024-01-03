// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.2:4000/api', // înlocuiește cu adresa de bază a API-ului tău
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createCategory = postData => {
  return api.post('/categorys', postData);
};

export const getCategory = () => {
  return api.get('/categorys');
};

export const updateCategory = (postId, updatedData) => {
  return api.patch(`/categorys/${postId}`, updatedData);
};

export const deleteCategory = postId => {
  return api.delete(`/categorys/${postId}`);
};

export default api;
