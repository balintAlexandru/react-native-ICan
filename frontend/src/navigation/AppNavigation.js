import {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {
  checkTask,
  setTaskCompleted,
  startTaskTime,
  updateTimer,
  resetTaskTime,
} from '../redux/slices/appSlice';

import {GetStarted} from '../screens';

import {APP_NAVIGATION} from '../constants/navigation';

import BackgroundTimer from 'react-native-background-timer';
import {convertMinutesToHoursAndMinutes} from '../hooks/task';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const [taskData, setTaskData] = useState({
    categoryId: '',
    id: '',
  });
  const username = useSelector(state => state.app.username);
  const category = useSelector(state => state.app.category);
  const taskCompleted = useSelector(state => state.app.taskCompleted);
  const dispatch = useDispatch();

  const [minutesLeft, setMinutesLeft] = useState(-1);

  // const startTimer = (categoryId, id) => {
  //   setTaskData({
  //     categoryId,
  //     id,
  //   });

  //   BackgroundTimer.runBackgroundTimer(() => {
  //     setMinutesLeft(min => {
  //       if (min > 0) {
  //         return min - 1;
  //       } else {
  //         return 0;
  //       }
  //     });
  //   }, 2000);
  // };

  const stopTimer = () => {
    BackgroundTimer.stopBackgroundTimer();
  };

  // useEffect(() => {
  //   if (minutesLeft === 0) {
  //     dispatch(setTaskCompleted(taskCompleted + 1));
  //     dispatch(checkTask({...taskData}));
  //     dispatch(
  //       startTaskTime({categoryId: taskData.categoryId, id: taskData.id}),
  //     );
  //     stopTimer(taskData.categoryId, taskData.id);
  //   }
  //   if (taskData.id !== '' && taskData.categoryId !== '') {
  //     dispatch(
  //       updateTimer({
  //         ...taskData,
  //         minutesLeft: convertMinutesToHoursAndMinutes(minutesLeft),
  //       }),
  //     );
  //   }
  // }, [minutesLeft]);

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setMinutesLeft(min => {
        if (min > 0) {
          return min - 1;
        } else {
          return 0;
        }
      });
    }, 2000);
  };

  useEffect(() => {
    // dispatch(resetTaskTime());
    console.log(minutesLeft);
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
