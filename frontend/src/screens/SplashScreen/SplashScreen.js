import {SafeAreaView, Text, View} from 'react-native';

import {styles} from './SplashScreenStyle';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={{fontSize: 40, color: '#ef3838', fontWeight: 800}}>
          ICAN
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
