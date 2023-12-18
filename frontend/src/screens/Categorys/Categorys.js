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
import {createCategory, updateCategory} from '../../redux/slices/appSlice';

import {styles} from './CategorysStyle';
import {COLORS} from '../../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear';
import {faBook} from '@fortawesome/free-solid-svg-icons/faBook';

import {AppModal, CategoryCard, AddButton} from '../../components';

const Categorys = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [categoryModel, setCategoryModel] = useState({
    id: '',
    name: '',
    icon: '🎵',
    tasks: [],
  });
  const dispatch = useDispatch();
  const username = useSelector(state => state.app.username);
  const category = useSelector(state => state.app.category);

  const handleCreateCategory = () => {
    categoryModel.id = uuid.v4();
    dispatch(createCategory(categoryModel));
  };

  const handleEditCategory = () => {
    dispatch(
      updateCategory({
        categoryId: categoryModel.id,
        name: categoryModel.name,
        icon: categoryModel.icon,
      }),
    );
  };
  console.log(category);

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
              <CategoryCard
                category={item}
                key={item.id}
                setModalVisible={setModalVisible}
                setCategoryModel={setCategoryModel}
                setEditMode={setEditMode}
                navigation={navigation}
              />
            ))}
        </ScrollView>

        <AddButton onPress={setModalVisible} />

        <AppModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          title={!editMode ? 'Add Category' : 'Edit Category'}
          type="categorys"
          value={categoryModel}
          setValue={setCategoryModel}
          onPress={!editMode ? handleCreateCategory : handleEditCategory}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      </View>
    </SafeAreaView>
  );
};

export default Categorys;
