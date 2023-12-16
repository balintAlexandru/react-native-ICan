import { Pressable, Text } from "react-native";
import { styles } from "./ButtonStyle";

import PropTypes from "prop-types";

const Button = (props) => {
  const { text, backgroundColor, onPress, width, fontSize, paddingVertical } =
    props;
  return (
    <Pressable
      style={{ ...styles.button, backgroundColor, width, paddingVertical }}
      onPress={onPress}
    >
      <Text style={{ ...styles.text, fontSize }}>{text}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.string,
  fontSize: PropTypes.number,
  paddingVertical: PropTypes.number,
  onPress: PropTypes.func,
};

export default Button;
