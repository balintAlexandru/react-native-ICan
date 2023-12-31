import { SafeAreaView, Text, View } from "react-native";

import { styles } from "./SplashScreenStyle";

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={{ fontSize: 40, color: "white", fontWeight: 800 }}>
          ICAN SPLASHSCREEN
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
