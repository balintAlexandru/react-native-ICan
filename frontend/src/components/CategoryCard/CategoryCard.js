import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './CategoryCardStyle';
import {COLORS} from '../../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';

import {Button} from '..';

import {deleteCategory, deleteAllTasks} from '../../hooks/api';

import {useDispatch, useSelector} from 'react-redux';
import {
  deleteReduxCategory,
  setTaskCompleted,
  deleteReduxAllTasks,
  setAllTasks,
} from '../../redux/slices/appSlice';

import PropTypes from 'prop-types';
import {RFValue} from 'react-native-responsive-fontsize';

const CategoryCard = ({
  category,
  setModalVisible,
  setCategoryModel,
  setEditMode,
  navigation,
  startTimer,
  stopTimer,
  setMinutesLeft,
}) => {
  const {_id, icon, name} = category;
  const [showSettings, setShowSettings] = useState(false);
  const dispatch = useDispatch();
  const taskCompleted = useSelector(state => state.app.taskCompleted);
  const allTasks = useSelector(state => state.app.allTasks);

  const handleDeleteAllTasks = async categoryId => {
    dispatch(
      setTaskCompleted(
        taskCompleted -
          allTasks
            .filter(item => item.categoryId === categoryId)
            .reduce((a, b) => (b.completed ? a + 1 : a + 0), 0),
      ),
    );
    dispatch(
      setAllTasks(allTasks.filter(item => item.categoryId !== categoryId)),
    );
    await deleteAllTasks(categoryId);
  };

  const handleDeleteCategory = async categoryId => {
    await deleteCategory(categoryId)
      .then(() => {
        dispatch(deleteReduxCategory({categoryId}));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => {
        !showSettings &&
          navigation.navigate('Tasks', {
            category,
            startTimer,
            stopTimer,
            setMinutesLeft,
          });
      }}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.iconWrapper}
        onPress={() => {
          setShowSettings(!showSettings);
        }}>
        <FontAwesomeIcon
          icon={!showSettings ? faEllipsisVertical : faXmark}
          style={styles.menuIcon}
          size={25}
        />
      </TouchableOpacity>
      {!showSettings && (
        <View style={styles.cardInfo}>
          <Text style={styles.icon}>{icon}</Text>
          <View style={styles.infoWrapper}>
            <Text style={styles.name}>{name}</Text>
            {allTasks
              .filter(item => item.categoryId === _id)
              .reduce((a, b) => (b.completed ? a + 1 : a + 0), 0) ===
              allTasks.filter(item => item.categoryId === _id).length &&
            allTasks.filter(item => item.categoryId === _id).length !== 0 ? (
              <Text
                style={{
                  fontSize: RFValue(16),
                  letterSpacing: -0.3,
                  fontWeight: '500',
                  color: COLORS.GRAY,
                  fontStyle: 'italic',
                  marginTop: 8,
                }}>
                All tasks done
              </Text>
            ) : (
              <>
                <Text style={styles.tasks}>
                  Tasks:{' '}
                  {allTasks
                    .filter(item => item.categoryId === _id)
                    .reduce((a, b) => (b.completed ? a + 0 : a + 1), 0)}
                </Text>
                {allTasks
                  .filter(item => item.categoryId === _id)
                  .reduce((a, b) => (b.completed ? a + 1 : a + 0), 0) !== 0 && (
                  <Text style={styles.tasksCompleted}>
                    Completed:{' '}
                    {allTasks
                      .filter(item => item.categoryId === _id)
                      .reduce((a, b) => (b.completed ? a + 1 : a + 0), 0)}
                  </Text>
                )}
              </>
            )}
          </View>
        </View>
      )}
      {showSettings && (
        <View style={styles.buttonsWrapper}>
          <Button
            text="EDIT"
            backgroundColor={COLORS.AQUA_BLUE}
            onPress={() => {
              setModalVisible(true);
              setCategoryModel({...category});
              setShowSettings(false);
              setEditMode(true);
            }}
            width={120}
            fontSize={16}
            paddingVertical={6}
          />
          <Button
            text="DELETE"
            backgroundColor={COLORS.RED}
            onPress={() => {
              setShowSettings(false);
              handleDeleteAllTasks(_id);
              handleDeleteCategory(_id);
            }}
            width={120}
            fontSize={16}
            paddingVertical={6}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
    tasks: PropTypes.array,
  }),
  setModalVisible: PropTypes.func,
  setCategoryModel: PropTypes.func,
  setEditMode: PropTypes.func,
  navigation: PropTypes.any,
};

export default CategoryCard;
