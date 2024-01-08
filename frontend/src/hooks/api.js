import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.2:4000/api', // gasit metoda folosit env.
  headers: {
    'Content-Type': 'application/json',
  },
});

//CRUD Categorys
export const createCategory = categoryData => {
  return api.post('/categorys', categoryData);
};

export const getCategory = () => {
  return api.get('/categorys');
};

export const updateCategory = (categoryId, categoryData) => {
  return api.patch(`/categorys/${categoryId}`, categoryData);
};

export const deleteCategory = categoryId => {
  return api.delete(`/categorys/${categoryId}`);
};

//CRUD Tasks
export const createTask = (categoryId, taskData) => {
  return api.post(`/tasks/${categoryId}`, taskData);
};

export const getTasks = categoryId => {
  return api.get(`/tasks/category/${categoryId}`);
};

export const getAllTasks = () => {
  return api.get('/tasks/all');
};

export const updateTask = (taskId, taskData) => {
  return api.patch(`/tasks/${taskId}`, taskData);
};

export const checkTask = (taskId, taskData) => {
  return api.patch(`/tasks/${taskId}`, taskData);
};

export const deleteTask = taskId => {
  return api.delete(`/tasks/${taskId}`);
};

export const deleteAllTasks = categoryId => {
  return api.delete(`/tasks/all/${categoryId}`);
};

export default api;
