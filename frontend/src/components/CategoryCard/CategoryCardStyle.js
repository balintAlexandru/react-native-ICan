import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    // margin: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 210,
    width: '48%',
    borderRadius: 10,
    paddingVertical: 24,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.8,
    position: 'relative',
  },
  iconWrapper: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  cardInfo: {
    flex: 1,
    alignItems: 'center',
    gap: 40,
  },
  icon: {
    marginTop: 20,
    fontSize: 50,
  },
  infoWrapper: {
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Font',
    letterSpacing: -0.3,
    fontSize: 18,
    fontWeight: 600,
  },
  tasks: {
    fontFamily: 'Font',
    letterSpacing: -0.3,
    fontSize: 16,
    color: COLORS.GRAY,
  },
  buttonsWrapper: {
    justifyContent: 'center',
    alignContent: 'center',
    gap: 32,
    flex: 1,
  },
});
