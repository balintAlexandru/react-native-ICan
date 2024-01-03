import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  taskCompleted: 0,
  username: '',
  category: [],
  startTime: false,
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

    createTask: (state, action) => {
      const {categoryId, name, time, completed, id, playTime} = action.payload;

      const position = state.category.findIndex(
        category => category.id === categoryId,
      );
      state.category[position].tasks.push({
        id,
        name,
        time,
        completed,
        playTime,
      });
    },

    updateTask: (state, action) => {
      const {categoryId, id, name, time} = action.payload;

      const categoryPosition = state.category.findIndex(
        category => category.id === categoryId,
      );
      const taskPosition = state.category[categoryPosition].tasks.findIndex(
        task => task.id === id,
      );

      state.category[categoryPosition].tasks[taskPosition].name = name;
      state.category[categoryPosition].tasks[taskPosition].time = time;
    },

    deleteTask: (state, action) => {
      const {categoryId, id} = action.payload;

      const position = state.category.findIndex(
        category => category.id === categoryId,
      );

      state.category[position].tasks = state.category[position].tasks.filter(
        task => task.id !== id,
      );
    },

    checkTask: (state, action) => {
      const {categoryId, id} = action.payload;

      const categoryPosition = state.category.findIndex(
        category => category.id === categoryId,
      );
      const taskPosition = state.category[categoryPosition].tasks.findIndex(
        task => task.id === id,
      );

      state.category[categoryPosition].tasks[taskPosition].completed =
        !state.category[categoryPosition].tasks[taskPosition].completed;
    },
    startTaskTime: (state, action) => {
      const {categoryId, id} = action.payload;

      const categoryPosition = state.category.findIndex(
        category => category.id === categoryId,
      );
      const taskPosition = state.category[categoryPosition].tasks.findIndex(
        task => task.id === id,
      );

      state.category[categoryPosition].tasks[taskPosition].playTime =
        !state.category[categoryPosition].tasks[taskPosition].playTime;
    },
    resetTaskTime: (state, action) => {
      state.category.map(category => {
        return category.tasks.map(item => {
          return (item.playTime = false);
        });
      });
    },
    updateTimer: (state, action) => {
      const {categoryId, id, minutesLeft} = action.payload;

      const categoryPosition = state.category.findIndex(
        category => category.id === categoryId,
      );
      const taskPosition = state.category[categoryPosition].tasks.findIndex(
        task => task.id === id,
      );
      state.category[categoryPosition].tasks[taskPosition].time.hours =
        minutesLeft[0];
      state.category[categoryPosition].tasks[taskPosition].time.minutes =
        minutesLeft[1];
    },
  },
});

export const {
  createReduxCategory,
  setUsername,
  createTask,
  deleteTask,
  updateTask,
  updateReduxCategory,
  deleteReduxCategory,
  checkTask,
  setTaskCompleted,
  startTaskTime,
  updateTimer,
  resetTaskTime,
  setCategory,
} = appSlice.actions;

export default appSlice.reducer;
