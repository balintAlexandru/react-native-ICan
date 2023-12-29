import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './CategoryCardStyle';
import {COLORS} from '../../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';

import {Button} from '..';

import {useDispatch, useSelector} from 'react-redux';
import {deleteCategory, setTaskCompleted} from '../../redux/slices/appSlice';

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
  const [showSettings, setShowSettings] = useState(false);
  const dispatch = useDispatch();
  const taskCompleted = useSelector(state => state.app.taskCompleted);

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
        <FontAwesomeIcon icon={!showSettings ? faEllipsisVertical : faXmark} />
      </TouchableOpacity>
      {!showSettings && (
        <View style={styles.cardInfo}>
          <Text style={styles.icon}>{category.icon}</Text>
          <View style={styles.infoWrapper}>
            <Text style={styles.name}>{category.name}</Text>
            {category.tasks.filter(item => item.completed).length ===
              category.tasks.length && category.tasks.length !== 0 ? (
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
                  Tasks: {category.tasks.filter(item => !item.completed).length}
                </Text>
                {category.tasks.filter(item => item.completed).length !== 0 && (
                  <Text style={styles.tasksCompleted}>
                    Completed:{' '}
                    {category.tasks.filter(item => item.completed).length}
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
              dispatch(
                setTaskCompleted(
                  taskCompleted -
                    category.tasks.filter(item => item.completed).length,
                ),
              );
              dispatch(deleteCategory({categoryId: category.id}));
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
