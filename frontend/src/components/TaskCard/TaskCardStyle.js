import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    alignContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.8,
  },
  radioWrapper: {
    borderWidth: 1,
    borderColor: COLORS.PURPLE,
    borderRadius: 50,
    width: 28,
    height: 28,
  },
  textWrapper: {
    width: '75%',
    gap: 7,
  },
  name: {
    fontFamily: 'Font',
    fontSize: 20,
    letterSpacing: -0.3,
  },
  timeText: {
    fontFamily: 'Font',
    fontSize: 16,
    letterSpacing: -0.3,
    fontWeight: '600',
    color: COLORS.GRAY,
  },
  time: {
    fontFamily: 'Font',
    fontSize: 16,
    letterSpacing: -0.3,
    fontWeight: '400',
    color: COLORS.GRAY,
  },
  settings: {},
});
