import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: '',
  category: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },

    createCategory: (state, action) => {
      state.category = [...state.category, {...action.payload}];
    },

    updateCategory: (state, action) => {
      const {categoryId, name, icon} = action.payload;

      const categoryPosition = state.category.findIndex(
        category => category.id === categoryId,
      );

      state.category[categoryPosition].name = name;
      state.category[categoryPosition].icon = icon;
    },

    deleteCategory: (state, action) => {
      const {categoryId} = action.payload;

      state.category = state.category.filter(
        category => category.id !== categoryId,
      );
    },

    createTask: (state, action) => {
      const {categoryName, name, time} = action.payload;

      const position = state.category.findIndex(
        category => category.name === categoryName,
      );

      state.category[position].tasks = [
        ...state.category[position].tasks,
        {name, time},
      ];
    },

    updateTask: (state, action) => {
      const {categoryName, taskName, name, time} = action.payload;

      const categoryPosition = state.category.findIndex(
        category => category.name === categoryName,
      );
      const taskPosition = state.category[categoryPosition].tasks.findIndex(
        task => task.name === taskName,
      );

      state.category[categoryPosition].tasks[taskPosition].name = name;
      state.category[categoryPosition].tasks[taskPosition].time = time;
    },

    deleteTask: (state, action) => {
      const {categoryName, name} = action.payload;

      const position = state.category.findIndex(
        category => category.name === categoryName,
      );

      state.category[position].tasks = state.category[position].tasks.filter(
        task => task.name !== name,
      );
    },
  },
});

export const {
  createCategory,
  setUsername,
  createTask,
  deleteTask,
  updateTask,
  updateCategory,
  deleteCategory,
} = appSlice.actions;

export default appSlice.reducer;
