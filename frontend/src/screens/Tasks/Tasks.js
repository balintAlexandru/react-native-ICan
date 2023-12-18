import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

import uuid from 'react-native-uuid';

import {styles} from './TasksStyle';
import {COLORS} from '../../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear';

import {AddButton, AppModal, TaskCard} from '../../components';

import {createTask} from '../../redux/slices/appSlice';
import {useDispatch, useSelector} from 'react-redux';

const Tasks = ({route, navigation}) => {
  const {category} = route.params;
  const {id, name, icon} = category;

  const [modalVisible, setModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [taskModel, setTaskModel] = useState({
    id: 0,
    name: '',
    time: {
      hours: 0,
      minutes: 0,
    },
    completed: false,
  });

  const categorys = useSelector(state => state.app.category);
  const dispatch = useDispatch();
  const tasks = categorys.filter(item => item.id === id)[0].tasks;

  console.log(tasks);
  const handleCreateTask = () => {
    taskModel.id = uuid.v4();
    dispatch(createTask({...taskModel, categoryId: id}));
  };

  const handleEditCategory = () => {
    dispatch(
      updateCategory({
        categoryId: categoryModel.id,
        name: categoryModel.name,
        icon: categoryModel.icon,
      }),
    );
  };

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
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              console.log('da');
            }}>
            <FontAwesomeIcon icon={faGear} color={COLORS.GRAY} size={25} />
          </TouchableOpacity>
        </View>

        <View style={styles.tasksList}>
          <FlatList
            data={tasks}
            renderItem={({item}) => <TaskCard task={item} />}
            keyExtractor={item => item.id}
          />
        </View>

        <AddButton onPress={setModalVisible} />

        <AppModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          title="Add Task"
          type="tasks"
          value={taskModel}
          setValue={setTaskModel}
          onPress={!editMode ? handleCreateTask : () => {}}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      </View>
    </SafeAreaView>
  );
};

export default Tasks;
