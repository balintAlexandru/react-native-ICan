import { SafeAreaView, Text, View } from "react-native";

import { styles } from "./TasksStyle";
import { COLORS } from "../../constants/colors";

const Tasks = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text>Tasks</Text>
      </View>
    </SafeAreaView>
  );
};

export default Tasks;
