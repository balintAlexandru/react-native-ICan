import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
const Test = () => {
  const [secondsLeft, setSecondsLeft] = useState(10);
  const [timerOn, setTimerOn] = useState(false);

  const stopTime = () => {
    setTimerOn(!timerOn);
    console.log('stopp');
    BackgroundTimer.stopBackgroundTimer();
  };
  const startTimer = () => {
    setTimerOn(!timerOn);
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft(sec => {
        if (sec > 0) {
          return sec - 1;
        } else {
          return 0;
        }
      });
    }, 1000);
  };
  console.log(secondsLeft);
  useEffect(() => {
    if (secondsLeft === 0) stopTime();
  }, [secondsLeft]);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{secondsLeft}</Text>
      <Button
        title="Start/Stop"
        onPress={() => (!timerOn ? startTimer() : stopTime())}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#000',
  },
  time: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
});
export default Test;
