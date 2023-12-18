import React, {useState} from 'react';
import {
  Modal,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import {styles} from './AppModalStyle';
import {COLORS} from '../../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';

import PropTypes from 'prop-types';
import EmojiPicker from 'rn-emoji-keyboard';

import {Button} from '..';

const AppModal = ({
  modalVisible,
  setModalVisible,
  title,
  type,
  value,
  setValue,
  onPress,
  editMode,
  setEditMode,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState('');

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.nameWrapper}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              fontSize={16}
              keyboardType={'default'}
              value={value.name}
              onChangeText={text => setValue({...value, name: text})}
            />
          </View>

          {type === 'tasks' && (
            <View style={styles.timeWrapper}>
              <Text style={styles.label}>Time</Text>
              <View style={styles.timeInputWrapper}>
                <TextInput
                  style={{...styles.input, borderRadius: 0, width: '50%'}}
                  fontSize={16}
                  keyboardType={'numeric'}
                  placeholder="Hours"
                  placeholderTextColor={COLORS.GRAY}
                  value={value.hours}
                  onChangeText={text =>
                    setValue({...value, time: {...value.time, hours: text}})
                  }
                />
                <TextInput
                  style={{
                    ...styles.input,
                    borderRadius: 0,
                    width: '50%',
                    borderLeftWidth: 0,
                  }}
                  fontSize={16}
                  keyboardType={'numeric'}
                  placeholder="Minutes"
                  placeholderTextColor={COLORS.GRAY}
                  value={value.minutes}
                  onChangeText={text =>
                    setValue({...value, time: {...value.time, minutes: text}})
                  }
                />
              </View>
            </View>
          )}

          {type === 'categorys' && (
            <View style={styles.iconWrapper}>
              <Text style={styles.label}>Icon</Text>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.iconContainer}
                onPress={() => {
                  Keyboard.dismiss();
                  setIsOpen(true);
                }}>
                {!editMode && icon === '' && (
                  <FontAwesomeIcon icon={faPlus} size={25} />
                )}
                {icon !== '' && <Text style={styles.icon}>{icon}</Text>}
                {editMode && icon === '' && (
                  <Text style={styles.icon}>{value.icon}</Text>
                )}
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.buttonWrapper}>
            <Button
              text={!editMode ? 'CREATE' : 'EDIT'}
              backgroundColor={!editMode ? COLORS.GREEN : COLORS.AQUA_BLUE}
              onPress={() => {
                onPress();
                setModalVisible(!modalVisible);
                setEditMode(false);
                if (type === 'categorys') {
                  setValue({
                    id: '',
                    name: '',
                    icon: '',
                    tasks: [],
                  });
                  setIcon('');
                }
                if (type === 'tasks') {
                  setValue({
                    name: '',
                    time: {
                      hours: 0,
                      minutes: 0,
                    },
                    completed: false,
                  });
                }
              }}
              width={146}
              fontSize={18}
              paddingVertical={10}
            />
            <Button
              text="CLOSE"
              backgroundColor={COLORS.RED}
              onPress={() => {
                setModalVisible(!modalVisible);
                setEditMode(false);
                if (type === 'categorys') {
                  setValue({
                    id: '',
                    name: '',
                    icon: '',
                    tasks: [],
                  });
                  setIcon('');
                }
                if (type === 'tasks') {
                  setValue({
                    name: '',
                    time: {
                      hours: 0,
                      minutes: 0,
                    },
                    completed: false,
                  });
                }
              }}
              width={146}
              fontSize={18}
              paddingVertical={10}
            />
          </View>
          <EmojiPicker
            onEmojiSelected={item => {
              setIcon(item.emoji);
              setValue({...value, icon: item.emoji});
            }}
            open={isOpen}
            onClose={() => setIsOpen(false)}
          />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

AppModal.propTypes = {
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
    tasks: PropTypes.array,
  }),
  setValue: PropTypes.func,
  setEditMode: PropTypes.func,
  editMode: PropTypes.bool,
};

export default AppModal;
