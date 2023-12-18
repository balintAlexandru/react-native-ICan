import {TouchableOpacity, View} from 'react-native';

import {styles} from './AddButtonStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';

import PropTypes from 'prop-types';

const AddButton = ({onPress}) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity style={styles.button} onPress={() => onPress(true)}>
        <FontAwesomeIcon icon={faPlus} size={25} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

AddButton.propTypes = {
  onPress: PropTypes.func,
};

export default AddButton;
