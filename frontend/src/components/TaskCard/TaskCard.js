import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './TaskCardStyle';
import {COLORS} from '../../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';
import {faPen} from '@fortawesome/free-solid-svg-icons/faPen';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {faCirclePause} from '@fortawesome/free-solid-svg-icons/faCirclePause';

import {useDispatch, useSelector} from 'react-redux';
import {deleteTask, setTaskCompleted} from '../../redux/slices/appSlice';

import PropTypes from 'prop-types';

const TaskCard = ({
  task,
  categoryId,
  setModalVisible,
  setTaskModel,
  setEditMode,
  handleCheck,
  handleStartTime,
}) => {
  const {id, name, time, completed, playTime} = task;
  const [showSettings, setShowSettings] = useState(false);

  const dispatch = useDispatch();
  const taskCompleted = useSelector(state => state.app.taskCompleted);

  const renderHourFormat = time => {
    if (time.hours === 0 && time.minutes === 0) return ' Unlimited';
    if (time.minutes === 0) return ` ${time.hours} hours`;
    if (time.hours === 0) return ` ${time.minutes} minutes`;
    return ` ${time.hours} hours ${time.minutes} minutes`;
  };
  console.log(playTime);
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            dispatch(
              setTaskCompleted(
                completed ? taskCompleted - 1 : taskCompleted + 1,
              ),
            );
            handleCheck(id);
            if (playTime) handleStartTime(id);
          }}
          style={{
            ...styles.radioWrapper,
            backgroundColor: completed ? COLORS.PURPLE : 'white',
          }}>
          {completed && (
            <FontAwesomeIcon icon={faCheck} size={16} color={'white'} />
          )}
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text
            style={{
              ...styles.name,
              textDecorationLine: completed ? 'line-through' : 'none',
              color: completed ? COLORS.GRAY : 'black',
            }}>
            {name}
          </Text>
          {playTime && !completed && (
            <Text style={styles.progress}>In progress...</Text>
          )}
          <Text style={styles.timeText}>
            Time:
            <Text style={styles.time}>{renderHourFormat(time)}</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.dots}
          activeOpacity={1}
          onPress={() => {
            if (!completed) {
              setShowSettings(!showSettings);
            }
          }}>
          <FontAwesomeIcon
            icon={!showSettings ? faEllipsisVertical : faXmark}
            color={!completed ? 'black' : COLORS.GRAY}
          />
        </TouchableOpacity>
      </View>
      {showSettings && (
        <View style={styles.settingWrapper}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setModalVisible(true);
              setTaskModel(task);
              setEditMode(true);
            }}>
            <FontAwesomeIcon icon={faPen} size={20} color={COLORS.AQUA_BLUE} />
          </TouchableOpacity>
          {(time.hours !== 0 || time.minutes !== 0) && (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                handleStartTime(id);
              }}>
              {!playTime && (
                <FontAwesomeIcon
                  icon={faClock}
                  size={20}
                  color={COLORS.PURPLE}
                />
              )}
              {playTime && (
                <FontAwesomeIcon
                  icon={faCirclePause}
                  size={20}
                  color={COLORS.PURPLE}
                />
              )}
            </TouchableOpacity>
          )}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              dispatch(deleteTask({categoryId: categoryId, id}));
              if (completed) {
                dispatch(setTaskCompleted(taskCompleted - 1));
              }
            }}>
            <FontAwesomeIcon icon={faTrash} size={20} color={COLORS.RED} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

TaskCard.propTypes = {};

export default TaskCard;
