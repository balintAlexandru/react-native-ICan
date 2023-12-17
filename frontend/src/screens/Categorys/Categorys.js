import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import uuid from 'react-native-uuid';

import {useDispatch, useSelector} from 'react-redux';
import {createCategory} from '../../redux/slices/appSlice';

import {styles} from './CategorysStyle';
import {COLORS} from '../../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faBook} from '@fortawesome/free-solid-svg-icons/faBook';

import {AppModal, CategoryCard} from '../../components';

const Categorys = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [categoryModel, setCategoryModel] = useState({
    id: '',
    name: '',
    icon: '📖',
    tasks: [],
  });
  const dispatch = useDispatch();
  const username = useSelector(state => state.app.username);
  const category = useSelector(state => state.app.category);

  const handleCreateCategory = () => {
    categoryModel.id = uuid.v4();
    dispatch(createCategory(categoryModel));
  };

  // console.log(category);

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

        <View style={styles.completedTasks}>
          <View style={styles.content}>
            <Text
              style={{...styles.textContent, fontSize: 24, fontWeight: 600}}>
              Today
            </Text>
            <Text style={{...styles.textContent, fontSize: 20}}>0 tasks</Text>
          </View>

          <View style={styles.circle}>
            <Text style={{...styles.textContent, fontSize: 24}}>0%</Text>
          </View>
        </View>

        <ScrollView
          style={styles.categorysList}
          contentContainerStyle={styles.listContent}>
          {category.length === 0 && (
            <View style={styles.categoryInfo}>
              <FontAwesomeIcon icon={faBook} color={COLORS.GRAY} size={40} />
              <Text style={styles.infoText}>
                Did you know a good day start with a new task,so let's create a
                category for it.
              </Text>
            </View>
          )}
          {category.length !== 0 &&
            category?.map(item => (
              <CategoryCard category={item} key={item.id} />
            ))}
        </ScrollView>

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
          title="Add Category"
          textButton="CREATE"
          type="categorys"
          value={categoryModel}
          setValue={setCategoryModel}
          onPress={handleCreateCategory}
        />
      </View>
    </SafeAreaView>
  );
};

export default Categorys;
