import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { useSelector } from "react-redux";

import { styles } from "./CategorysStyle";
import { COLORS } from "../../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

const Categorys = () => {
  const username = useSelector((state) => state.app.username);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              console.log("da");
            }}
          >
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

        <View style={styles.tasksList}></View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
            <FontAwesomeIcon icon={faPlus} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Categorys;
