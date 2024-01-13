import {useState} from 'react';
import {SafeAreaView, Text, View, TextInput} from 'react-native';

import {styles} from './GetStartedStyle';
import {COLORS} from '../../constants/colors';

import {Button} from '../../components';

import {setUsername} from '../../redux/slices/appSlice';
import {useDispatch, useSelector} from 'react-redux';

const GetStarted = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome,</Text>
        <Text style={styles.title}>please enter your name.</Text>
        <TextInput
          style={styles.input}
          fontSize={16}
          placeholder="Write name here"
          placeholderTextColor={COLORS.GRAY}
          keyboardType={'default'}
          autoFocus={true}
          value={name}
          onChangeText={value => setName(value)}
        />
        <Button
          text="GET STARTED"
          backgroundColor={COLORS.RED}
          onPress={() => {
            if (name !== '') {
              dispatch(setUsername(name));
            }
          }}
          width={'100%'}
          fontSize={18}
          paddingVertical={12}
        />
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;
