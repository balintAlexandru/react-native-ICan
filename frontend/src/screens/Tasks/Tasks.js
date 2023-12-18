import {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './TasksStyle';
import {COLORS} from '../../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear';

import {AddButton, AppModal, TaskCard} from '../../components';

const Tasks = ({route, navigation}) => {
  const {category} = route.params;
  const {id, name, icon, tasks} = category;

  const [modalVisible, setModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [taskModel, setTaskModel] = useState({
    name: '',
    time: '',
    completed: false,
  });

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
          <TaskCard />
        </View>

        <AddButton onPress={setModalVisible} />

        <AppModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          title="Add Task"
          type="tasks"
          value={taskModel}
          setValue={setTaskModel}
          onPress={!editMode ? () => {} : () => {}}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      </View>
    </SafeAreaView>
  );
};

export default Tasks;
