import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  LogBox,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {
  createReduxCategory,
  updateReduxCategory,
  setCategory,
} from '../../redux/slices/appSlice';

import {styles} from './CategorysStyle';
import {COLORS} from '../../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear';
import {faBook} from '@fortawesome/free-solid-svg-icons/faBook';

import {AppModal, CategoryCard, AddButton} from '../../components';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import getCurrentDate from '../../hooks/date';
import {getCategory, createCategory, updateCategory} from '../../hooks/api';

LogBox.ignoreAllLogs();

const Categorys = ({route, navigation}) => {
  const {startTimer, stopTimer, setMinutesLeft} = route.params;
  const date = getCurrentDate();
  const [modalVisible, setModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [categoryModel, setCategoryModel] = useState({
    _id: '',
    name: '',
    icon: '',
  });

  const dispatch = useDispatch();
  const username = useSelector(state => state.app.username);
  const category = useSelector(state => state.app.category);
  const taskCompleted = useSelector(state => state.app.taskCompleted);

  const handleCreateCategory = () => {
    createCategory({name: categoryModel.name, icon: categoryModel.icon})
      .then(response => {
        dispatch(
          createReduxCategory({
            name: categoryModel.name,
            icon: categoryModel.icon,
            _id: response.data._id,
          }),
        );
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleEditCategory = () => {
    updateCategory(categoryModel._id, {
      name: categoryModel.name,
      icon: categoryModel.icon,
    })
      .then(() => {
        dispatch(
          updateReduxCategory({
            categoryId: categoryModel._id,
            name: categoryModel.name,
            icon: categoryModel.icon,
          }),
        );
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  // const handleTotalTasks = () => {
  //   if (
  //     category?.length === 0 ||
  //     category?.reduce((acc, val) => acc + val.tasks.length, 0) === 0
  //   )
  //     return '0 tasks';
  //   return (
  //     '/' + category.reduce((acc, val) => acc + val.tasks.length, 0) + ' tasks'
  //   );
  // };

  useEffect(() => {
    getCategory()
      .then(response => {
        dispatch(setCategory(response.data));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              console.log('da');
            }}>
            <FontAwesomeIcon icon={faGear} color={COLORS.GRAY} size={25} />
          </TouchableOpacity>
        </View>

        <View style={styles.textWrapper}>
          <Text style={styles.title}>Hello {username}</Text>
          <Text style={styles.day}>
            {date.day},{' '}
            <Text style={styles.date}>
              {date.dayNumber} {date.currentMonth}
            </Text>
          </Text>
        </View>

        <View style={styles.completedTasks}>
          <View style={styles.content}>
            <Text
              style={{...styles.textContent, fontSize: 24, fontWeight: 600}}>
              Today
            </Text>
            <Text style={{...styles.textContent, fontSize: 20}}>
              {/* {category.length !== 0 &&
                handleTotalTasks().includes('/') &&
                taskCompleted}
              {handleTotalTasks()} */}
            </Text>
          </View>

          <View style={styles.circle}>
            <AnimatedCircularProgress
              size={95}
              width={3}
              fill={
                category[0]?.tasks?.length
                  ? taskCompleted *
                    Math.ceil(
                      100 /
                        category.reduce(
                          (acc, val) => acc + val.tasks.length,
                          0,
                        ),
                    )
                  : 0
              }
              tintColor="white"
              backgroundColor={COLORS.GRAY}
            />
            <Text
              style={{
                ...styles.textContent,
                fontSize: 24,
                position: 'absolute',
              }}>
              {/* {taskCompleted *
                Math.ceil(
                  100 /
                    category.reduce((acc, val) => acc + val.tasks.length, 0),
                ) >=
              99
                ? 100
                : category[0]?.tasks?.length
                ? taskCompleted *
                  Math.ceil(
                    100 /
                      category.reduce((acc, val) => acc + val.tasks.length, 0),
                  )
                : 0} */}
              %
            </Text>
          </View>
        </View>
        {category.length === 0 && (
          <View style={styles.categoryInfo}>
            <FontAwesomeIcon icon={faBook} color={COLORS.GRAY} size={40} />
            <Text style={styles.infoText}>
              Did you know a good day start with a new task,so let's create a
              category for it.
            </Text>
            <AddButton onPress={setModalVisible} />
          </View>
        )}

        {category.length !== 0 && (
          <Text style={styles.categoryTitle}>Categorys</Text>
        )}
        {category.length !== 0 && (
          <ScrollView
            style={styles.categorysList}
            contentContainerStyle={styles.listContent}>
            {category?.map(item => (
              <CategoryCard
                category={item}
                key={item.id}
                setModalVisible={setModalVisible}
                setCategoryModel={setCategoryModel}
                setEditMode={setEditMode}
                navigation={navigation}
                startTimer={startTimer}
                stopTimer={stopTimer}
                setMinutesLeft={setMinutesLeft}
              />
            ))}
          </ScrollView>
        )}

        {category.length !== 0 && <AddButton onPress={setModalVisible} />}

        <AppModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          title={!editMode ? 'Add Category' : 'Edit Category'}
          type="categorys"
          value={categoryModel}
          setValue={setCategoryModel}
          onPress={!editMode ? handleCreateCategory : handleEditCategory}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      </View>
    </SafeAreaView>
  );
};

export default Categorys;
