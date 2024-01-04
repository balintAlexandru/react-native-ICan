import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

import {styles} from './TasksStyle';
import {COLORS} from '../../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear';
import {faBook} from '@fortawesome/free-solid-svg-icons/faBook';

import {AddButton, AppModal, TaskCard} from '../../components';

import {createTask, getTasks, deleteTask} from '../../hooks/api';
import {
  createReduxTask,
  updateTask,
  checkTask,
  startTaskTime,
  resetTaskTime,
} from '../../redux/slices/appSlice';
import {useDispatch, useSelector} from 'react-redux';

const Tasks = ({route, navigation}) => {
  const {category, startTimer, stopTimer, setMinutesLeft} = route.params;
  const {_id, name, icon} = category;

  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [taskModel, setTaskModel] = useState({
    categoryId: _id,
    name: '',
    time: {
      hours: 0,
      minutes: 0,
    },
    completed: false,
    playTime: false,
  });

  const dispatch = useDispatch();
  // const categorys = useSelector(state => state.app.category);

  // const tasks = categorys.filter(item => item.id === id)[0].tasks;

  const handleCreateTask = async () => {
    await createTask(_id, taskModel).then(response =>
      setTasks([...tasks, response.data]),
    );
  };

  const handleEditTask = () => {
    // dispatch(
    //   updateTask({
    //     categoryId: id,
    //     id: taskModel.id,
    //     name: taskModel.name,
    //     time: taskModel.time,
    //     playTime: taskModel.playTime,
    //   }),
    // );
  };

  const handleCheck = taskId => {
    setTasks(
      tasks.map(item =>
        item._id === taskId ? {...item, completed: !item.completed} : item,
      ),
    );
    // HERE NEED THE BACKEND REQUEST
  };

  const handleDeleteTask = async taskId => {
    await deleteTask(taskId).then(() => {
      setTasks(tasks.filter(item => item._id !== taskId));
    });
  };

  // const handleStartTime = taskId => {
  //   dispatch(startTaskTime({categoryId: id, id: taskId}));
  // };

  useEffect(async () => {
    await getTasks(_id).then(response => setTasks(response.data));
  }, []);

  console.log(tasks);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesomeIcon icon={faArrowLeft} size={25} />
          </TouchableOpacity>
          <View style={styles.titleWrapper}>
            <Text style={styles.icon}>{icon}</Text>
            <Text style={styles.title}>{name}</Text>
          </View>
          <TouchableOpacity activeOpacity={1} onPress={() => {}}>
            <FontAwesomeIcon icon={faGear} color={COLORS.GRAY} size={25} />
          </TouchableOpacity>
        </View>

        <View style={styles.tasksList}>
          {tasks?.length === 0 && (
            <View style={styles.taskInfo}>
              <FontAwesomeIcon icon={faBook} color={COLORS.GRAY} size={40} />
              <Text style={styles.infoText}>
                Look's like you don't have any tasks yet.
              </Text>
              <AddButton onPress={setModalVisible} />
            </View>
          )}
          {tasks?.length !== 0 && (
            <FlatList
              data={tasks}
              renderItem={({item}, index) => (
                <TaskCard
                  task={item}
                  key={index}
                  categoryId={_id}
                  setModalVisible={setModalVisible}
                  setTaskModel={setTaskModel}
                  setEditMode={setEditMode}
                  handleCheck={handleCheck}
                  handleDeleteTask={handleDeleteTask}
                  // handleStartTime={handleStartTime}
                  // startTimer={startTimer}
                  // stopTimer={stopTimer}
                  // setMinutesLeft={setMinutesLeft}
                />
              )}
              keyExtractor={() => Math.random()}
            />
          )}
        </View>

        {tasks?.length !== 0 && <AddButton onPress={setModalVisible} />}

        <AppModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          title={!editMode ? 'Add Task' : 'Edit Task'}
          type="tasks"
          value={taskModel}
          setValue={setTaskModel}
          onPress={!editMode ? handleCreateTask : handleEditTask}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      </View>
    </SafeAreaView>
  );
};

export default Tasks;
