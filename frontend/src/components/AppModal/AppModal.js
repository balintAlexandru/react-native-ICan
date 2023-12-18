import React, {useState} from 'react';
import {Modal, Text, View, TextInput} from 'react-native';

import {styles} from './AppModalStyle';
import {COLORS} from '../../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';

import PropTypes from 'prop-types';
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
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.nameWrapper}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            fontSize={16}
            keyboardType={'default'}
            // autoFocus={true}
            value={value.name}
            onChangeText={text => setValue({...value, name: text})}
          />
        </View>

        {type === 'tasks' && (
          <View style={styles.timeWrapper}>
            <Text style={styles.label}>Time</Text>
            <TextInput
              style={styles.input}
              fontSize={16}
              keyboardType={'default'}
              // autoFocus={true}
              // value={name}
              // onChangeText={value => setName(value)}
            />
          </View>
        )}

        {/* HERE USE rn-emoji-keyboard */}
        {type === 'categorys' && (
          <View style={styles.iconWrapper}>
            <Text style={styles.label}>Icon</Text>
            <View style={styles.iconContainer}>
              <TextInput
                style={styles.inputIcon}
                fontSize={16}
                keyboardType={'default'}
                // autoFocus={true}
                // value={name}
                // onChangeText={value => setName(value)}
              />
              <FontAwesomeIcon icon={faPlus} size={25} />
            </View>
          </View>
        )}

        <View style={styles.buttonWrapper}>
          <Button
            text={!editMode ? 'CREATE' : 'EDIT'}
            backgroundColor={!editMode ? COLORS.GREEN : COLORS.AQUA_BLUE}
            onPress={() => {
              onPress();
              setModalVisible(!modalVisible);
              setValue({
                id: '',
                name: '',
                icon: '🎵',
                tasks: [],
              });
              setEditMode(false);
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
              setValue({
                id: '',
                name: '',
                icon: '🎵',
                tasks: [],
              });
              setEditMode(false);
            }}
            width={146}
            fontSize={18}
            paddingVertical={10}
          />
        </View>
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
