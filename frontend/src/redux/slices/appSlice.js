import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  taskCompleted: 0,
  username: '',
  category: [],
  allTasks: [],
  taskStartTime: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setTaskCompleted: (state, action) => {
      state.taskCompleted = action.payload;
    },
    createReduxCategory: (state, action) => {
      state.category = [...state.category, {...action.payload}];
    },
    setCategory: (state, action) => {
      state.category = [...action.payload];
    },
    setAllTasks: (state, action) => {
      state.allTasks = [...action.payload];
    },
    addToAllTasks: (state, action) => {
      state.allTasks.push(action.payload);
    },
    setChronometer: (state, action) => {
      state.taskStartTime = action.payload;
    },
    deleteReduxAllTasks: (state, action) => {
      state.allTasks = state.allTasks.includes(
        item => item.categoryId !== action.payload,
      );
    },
    updateReduxCategory: (state, action) => {
      const {categoryId, name, icon} = action.payload;
      const categoryPosition = state.category.findIndex(
        category => category._id === categoryId,
      );

      state.category[categoryPosition].name = name;
      state.category[categoryPosition].icon = icon;
    },

    deleteReduxCategory: (state, action) => {
      const {categoryId} = action.payload;

      state.category = state.category.filter(
        category => category._id !== categoryId,
      );
    },

    deleteReduxTask: (state, action) => {
      state.allTasks = state.allTasks.filter(
        item => item._id !== action.payload,
      );
    },

    checkReduxTask: (state, action) => {
      const {_id} = action.payload;

      state.allTasks = state.allTasks.map(item => {
        return item._id === _id ? {...item, completed: !item.completed} : item;
      });
    },
  },
});

export const {
  createReduxCategory,
  setUsername,
  createReduxTask,
  deleteReduxTask,
  updateReduxCategory,
  deleteReduxCategory,
  checkReduxTask,
  setTaskCompleted,
  setCategory,
  setAllTasks,
  addToAllTasks,
  deleteReduxAllTasks,
  setChronometer,
} = appSlice.actions;

export default appSlice.reducer;
