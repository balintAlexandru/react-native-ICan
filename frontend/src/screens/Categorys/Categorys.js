import {useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';

import {useSelector} from 'react-redux';

import {styles} from './CategorysStyle';
import {COLORS} from '../../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faBook} from '@fortawesome/free-solid-svg-icons/faBook';

import {AppModal} from '../../components';

const Categorys = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const username = useSelector(state => state.app.username);
  const category = useSelector(state => state.app.category);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              console.log('da');
            }}>
            <FontAwesomeIcon icon={faGear} color={COLORS.GRAY} size={25} />
          </TouchableOpacity>
        </View>

        <View style={styles.textWrapper}>
          <Text style={styles.title}>Hello {username}</Text>
          <Text style={styles.day}>
            Sunday, <Text style={styles.date}>12nd May</Text>
          </Text>
        </View>

        <View style={styles.completedTasks}></View>

        <View style={styles.categorysList}>
          {category.length === 0 && (
            <View style={styles.categoryInfo}>
              <FontAwesomeIcon icon={faBook} color={COLORS.GRAY} size={40} />
              <Text style={styles.infoText}>
                Did you know a good day start with a new task,so let's create a
                category for it.
              </Text>
            </View>
          )}
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(true)}>
            <FontAwesomeIcon icon={faPlus} size={25} />
          </TouchableOpacity>
        </View>

        <AppModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
    </SafeAreaView>
  );
};

export default Categorys;
