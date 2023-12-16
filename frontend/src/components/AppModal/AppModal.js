import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const AppModal = ({modalVisible, setModalVisible}) => {
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        console.log('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View>
        <View>
          <Text>Hello World!</Text>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default AppModal;
