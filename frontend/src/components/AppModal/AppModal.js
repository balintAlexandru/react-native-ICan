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
  const [error, setError] = useState(false);

  const handleBorderColor = () => {
    if (type === 'categorys') {
      return error && value.name.length === 0
        ? COLORS.RED
        : value.name.length <= 12
        ? COLORS.GRAY
        : COLORS.RED;
    } else {
      return error && value.name.length === 0 ? COLORS.RED : COLORS.GRAY;
    }
  };
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalWrapper}>
        <TouchableWithoutFeedback
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.closeContainer}></View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.nameWrapper}>
              <Text style={styles.label}>
                Name{' '}
                <Text style={{color: COLORS.GRAY}}>
                  {type === 'tasks' && error && value.name.length === 0
                    ? '(Please complete all fields)'
                    : ''}
                  {type === 'categorys' &&
                    (error && value.name.length === 0
                      ? '(Please complete all fields)'
                      : value.name.length <= 12
                      ? '(Max. 12 letters)'
                      : '(Too many letters)')}
                </Text>
              </Text>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: handleBorderColor(),
                }}
                fontSize={16}
                keyboardType={'default'}
                value={value.name}
                onChangeText={text => setValue({...value, name: text})}
              />
            </View>

            {type === 'categorys' && (
              <View style={styles.iconWrapper}>
                <Text style={styles.label}>
                  Icon{' '}
                  <Text style={{color: COLORS.GRAY}}>
                    {error && value.icon === ''
                      ? '(Please complete all fields)'
                      : ''}
                  </Text>
                </Text>
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    ...styles.iconContainer,
                    borderColor:
                      error && value.icon === '' ? COLORS.RED : COLORS.GRAY,
                  }}
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

            {type === 'tasks' && value.time && (
              <View style={styles.timeWrapper}>
                <Text style={styles.label}>
                  Time <Text style={{color: COLORS.GRAY}}>(Optional)</Text>
                </Text>
                <View style={styles.timeInputWrapper}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderRadius: 0,
                      width: '50%',
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                      borderColor: COLORS.GRAY,
                    }}
                    fontSize={16}
                    keyboardType={'numeric'}
                    placeholder="Hours"
                    placeholderTextColor={COLORS.GRAY}
                    value={value.time.hours.toString()}
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
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                      borderColor: COLORS.GRAY,
                    }}
                    fontSize={16}
                    keyboardType={'numeric'}
                    placeholder="Minutes"
                    placeholderTextColor={COLORS.GRAY}
                    value={value.time.minutes.toString()}
                    onChangeText={text =>
                      setValue({...value, time: {...value.time, minutes: text}})
                    }
                  />
                </View>
              </View>
            )}

            <View style={styles.buttonWrapper}>
              <Button
                text={!editMode ? 'CREATE' : 'EDIT'}
                backgroundColor={!editMode ? COLORS.GREEN : COLORS.AQUA_BLUE}
                onPress={() => {
                  if (
                    value.name === '' ||
                    value.icon === '' ||
                    value.name.length > 12
                  ) {
                    setError(true);
                    setTimeout(() => {
                      setError(false);
                    }, 1500);
                  } else if (type === 'categorys') {
                    onPress();
                    setModalVisible(!modalVisible);
                    setEditMode(false);
                    setValue({
                      _id: '',
                      name: '',
                      icon: '',
                    });
                    setIcon('');
                  }
                  if (type === 'tasks' && value.name !== '') {
                    onPress();
                    setModalVisible(!modalVisible);
                    setEditMode(false);
                    setValue({
                      categoryId: '',
                      name: '',
                      time: {
                        hours: 0,
                        minutes: 0,
                      },
                      completed: false,
                      playTime: false,
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
                      _id: '',
                      name: '',
                      icon: '',
                    });
                    setIcon('');
                  }
                  if (type === 'tasks') {
                    setValue({
                      categoryId: value.categoryId,
                      name: '',
                      time: {
                        hours: 0,
                        minutes: 0,
                      },
                      completed: false,
                      playTime: false,
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
      </View>
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
