import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  taskCompleted: 0,
  username: '',
  category: [],
  allTasks: [],
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
    setAllTasks: (state, action) => {
      state.allTasks = [...action.payload];
    },
    addToAllTasks: (state, action) => {
      state.allTasks.push(action.payload);
    },
    setChronometer: (state, action) => {
      state.startTime = !state.startTime;
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

    createReduxTask: (state, action) => {
      state.tasks = [...state.tasks, ...action.payload];
      // const {categoryId, name, time, completed, id, playTime} = action.payload;

      // const position = state.category.findIndex(
      //   category => category.id === categoryId,
      // );
      // state.category[position].tasks.push({
      //   id,
      //   name,
      //   time,
      //   completed,
      //   playTime,
      // });
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

    deleteReduxTask: (state, action) => {
      state.allTasks = state.allTasks.filter(
        item => item._id !== action.payload,
      );
    },

    checkTask: (state, action) => {
      const {_id} = action.payload;

      state.allTasks = state.allTasks.map(item => {
        return item._id === _id ? {...item, completed: !item.completed} : item;
      });
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
  createReduxTask,
  deleteReduxTask,
  updateTask,
  updateReduxCategory,
  deleteReduxCategory,
  checkTask,
  setTaskCompleted,
  startTaskTime,
  updateTimer,
  resetTaskTime,
  setCategory,
  setAllTasks,
  addToAllTasks,
  deleteReduxAllTasks,
  setChronometer,
} = appSlice.actions;

export default appSlice.reducer;
