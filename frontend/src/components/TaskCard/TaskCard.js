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

import {convertTimeStringToMinutes} from '../../hooks/task';

import {useDispatch, useSelector} from 'react-redux';
import {
  setTaskCompleted,
  checkReduxTask,
  setChronometer,
} from '../../redux/slices/appSlice';

import PropTypes from 'prop-types';

const TaskCard = ({
  task,
  setModalVisible,
  setTaskModel,
  setEditMode,
  handleCheck,
  stopTimer,
  startTimer,
  setMinutesLeft,
  handleDeleteTask,
  setTasks,
  tasks,
}) => {
  const {_id, name, time, completed} = task;

  const [showSettings, setShowSettings] = useState(false);

  const dispatch = useDispatch();
  const taskCompleted = useSelector(state => state.app.taskCompleted);
  const taskStartTime = useSelector(state => state.app.taskStartTime);

  const renderHourFormat = time => {
    if (time.hours === 0 && time.minutes === 0) return ' Unlimited';
    if (time.minutes === 0) return `${time.hours} hours`;
    if (time.hours === 0) return `${time.minutes} minutes`;
    return `${time.hours} hours ${time.minutes} minutes`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            handleCheck(_id, completed);
            dispatch(checkReduxTask({_id}));
            dispatch(
              setTaskCompleted(
                completed ? taskCompleted - 1 : taskCompleted + 1,
              ),
            );
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
          {taskStartTime === _id && (
            <Text style={styles.progress}>In progress...</Text>
          )}
          {!completed && (
            <Text style={styles.timeText}>
              Time: <Text style={styles.time}>{renderHourFormat(time)}</Text>
            </Text>
          )}
          {completed && <Text style={styles.time}>Task done</Text>}
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
              setTaskModel({_id, name, time, completed});
              setEditMode(true);
            }}>
            <FontAwesomeIcon icon={faPen} size={20} color={COLORS.AQUA_BLUE} />
          </TouchableOpacity>
          {(time.hours !== 0 || time.minutes !== 0) && (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                if (taskStartTime === '') {
                  dispatch(setChronometer(_id));
                  setMinutesLeft(
                    convertTimeStringToMinutes(renderHourFormat(time)),
                  );
                  startTimer(tasks, setTasks, _id);
                } else {
                  dispatch(setChronometer(''));
                  stopTimer();
                }
              }}>
              {taskStartTime === '' && (
                <FontAwesomeIcon
                  icon={faClock}
                  size={20}
                  color={COLORS.PURPLE}
                />
              )}
              {taskStartTime !== '' && (
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
              handleDeleteTask(_id);
            }}>
            <FontAwesomeIcon icon={faTrash} size={20} color={COLORS.RED} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.shape({
      hours: PropTypes.number,
      minutes: PropTypes.number,
    }),
    completed: PropTypes.bool,
  }),
  tasks: PropTypes.array,
  setModalVisible: PropTypes.func,
  setTaskModel: PropTypes.func,
  setEditMode: PropTypes.func,
  handleCheck: PropTypes.func,
  stopTimer: PropTypes.func,
  startTimer: PropTypes.func,
  setMinutesLeft: PropTypes.func,
  handleDeleteTask: PropTypes.func,
  setTasks: PropTypes.func,
};

export default TaskCard;
