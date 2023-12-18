import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './TaskCardStyle';
import {COLORS} from '../../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';

import {useDispatch} from 'react-redux';

import PropTypes from 'prop-types';

const TaskCard = ({task}) => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.radioWrapper}></TouchableOpacity>
      <View style={styles.textWrapper}>
        <Text style={styles.name}>Task1</Text>
        <Text style={styles.timeText}>
          Time:
          <Text style={styles.time}> 1 hour</Text>
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.settings}
        onPress={() => setShowSettings(!showSettings)}>
        <FontAwesomeIcon icon={!showSettings ? faEllipsisVertical : faXmark} />
      </TouchableOpacity>
    </View>
  );
};

TaskCard.propTypes = {};

export default TaskCard;
