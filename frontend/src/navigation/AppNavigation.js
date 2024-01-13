import {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {
  checkReduxTask,
  setTaskCompleted,
  setChronometer,
} from '../redux/slices/appSlice';

import {GetStarted} from '../screens';

import {APP_NAVIGATION} from '../constants/navigation';

import BackgroundTimer from 'react-native-background-timer';
import {convertMinutesToHoursAndMinutes} from '../helper/task';
import {checkTask, updateTask} from '../axios/api';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const [taskData, setTaskData] = useState();
  const username = useSelector(state => state.app.username);
  const category = useSelector(state => state.app.category);
  const taskCompleted = useSelector(state => state.app.taskCompleted);
  const dispatch = useDispatch();

  const [minutesLeft, setMinutesLeft] = useState(-1);

  const handleCheck = async (taskId, completed) => {
    await checkTask(taskId, {completed})
      .then(() => {
        taskData.setData(
          taskData.data.map(item =>
            item._id === taskData.id
              ? {...item, completed: !item.completed}
              : item,
          ),
        );
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  };

  const handleUpdateTask = async (taskId, taskData) => {
    await updateTask(taskId, taskData);
  };

  const stopTimer = () => {
    BackgroundTimer.stopBackgroundTimer();
  };

  const startTimer = (data, setData, id) => {
    setTaskData({
      data,
      setData,
      id,
    });

    BackgroundTimer.runBackgroundTimer(() => {
      setMinutesLeft(min => {
        if (min > 0) {
          return min - 1;
        } else {
          return 0;
        }
      });
    }, 1000);
  };

  useEffect(() => {
    if (minutesLeft === 0) {
      dispatch(setChronometer(''));
      handleCheck(taskData.id, true);
      dispatch(checkReduxTask({_id: taskData.id}));
      dispatch(setTaskCompleted(taskCompleted + 1));
    } else if (minutesLeft !== -1) {
      const currentTask = taskData.data.filter(
        item => item._id === taskData.id,
      );
      handleUpdateTask(taskData.id, {
        ...currentTask,
        time: {
          hours: convertMinutesToHoursAndMinutes(minutesLeft)[0],
          minutes: convertMinutesToHoursAndMinutes(minutesLeft)[1],
        },
      });
      taskData?.setData(
        taskData.data.map(item => {
          return item._id === taskData.id
            ? {
                ...item,
                time: {
                  hours: convertMinutesToHoursAndMinutes(minutesLeft)[0],
                  minutes: convertMinutesToHoursAndMinutes(minutesLeft)[1],
                },
              }
            : item;
        }),
      );
    }
  }, [minutesLeft]);

  return username === '' ? (
    <GetStarted />
  ) : (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {APP_NAVIGATION.map((stack, index) => (
          <Stack.Screen
            key={`tab-${index}`}
            name={stack.name}
            component={stack.component}
            initialParams={{startTimer, stopTimer, setMinutesLeft}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
