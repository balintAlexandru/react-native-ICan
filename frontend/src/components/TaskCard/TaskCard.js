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

import {useDispatch} from 'react-redux';

import PropTypes from 'prop-types';

const TaskCard = ({task}) => {
  const [showSettings, setShowSettings] = useState(false);
  const [check, setCheck] = useState(false);
  const {name, time, completed} = task;

  const renderHourFormat = time => {
    if (time.hours === 0 && time.minutes === 0) return ' Unlimited';
    if (time.minutes === 0) return ` ${time.hours} hours`;
    if (time.hours === 0) return ` ${time.minutes} minutes`;
    return ` ${time.hours} hours ${time.minutes} minutes`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setCheck(!check);
          }}
          style={{
            ...styles.radioWrapper,
            backgroundColor: check ? COLORS.PURPLE : 'white',
          }}>
          {check && (
            <FontAwesomeIcon icon={faCheck} size={16} color={'white'} />
          )}
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text
            style={{
              ...styles.name,
              textDecorationLine: check ? 'line-through' : 'none',
              color: check ? COLORS.GRAY : 'black',
            }}>
            {name}
          </Text>
          <Text style={styles.timeText}>
            Time:
            <Text style={styles.time}>{renderHourFormat(time)}</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.dots}
          activeOpacity={1}
          onPress={() => setShowSettings(!showSettings)}>
          <FontAwesomeIcon
            icon={!showSettings ? faEllipsisVertical : faXmark}
          />
        </TouchableOpacity>
      </View>
      {showSettings && (
        <View style={styles.settingWrapper}>
          <TouchableOpacity activeOpacity={1}>
            <FontAwesomeIcon icon={faPen} size={20} color={COLORS.AQUA_BLUE} />
          </TouchableOpacity>
          {(time.hours !== 0 || time.minutes !== 0) && (
            <TouchableOpacity activeOpacity={1}>
              <FontAwesomeIcon icon={faClock} size={20} color={COLORS.PURPLE} />
            </TouchableOpacity>
          )}
          <TouchableOpacity activeOpacity={1}>
            <FontAwesomeIcon icon={faTrash} size={20} color={COLORS.RED} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

TaskCard.propTypes = {};

export default TaskCard;
