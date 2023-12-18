import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './CategoryCardStyle';
import {COLORS} from '../../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';

import {Button} from '..';

import {useDispatch} from 'react-redux';
import {deleteCategory} from '../../redux/slices/appSlice';

import PropTypes from 'prop-types';

const CategoryCard = ({
  category,
  setModalVisible,
  setCategoryModel,
  setEditMode,
  navigation,
}) => {
  const [showSettings, setShowSettings] = useState(false);
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => {
        navigation.navigate('Tasks', {category});
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
            <Text style={styles.tasks}>{category.tasks.length} tasks</Text>
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
            width={101}
            fontSize={16}
            paddingVertical={6}
          />
          <Button
            text="DELETE"
            backgroundColor={COLORS.RED}
            onPress={() => {
              dispatch(deleteCategory({categoryId: category.id}));
            }}
            width={101}
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
