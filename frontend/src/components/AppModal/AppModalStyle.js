import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    height: '77%',
    backgroundColor: 'white',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 30,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontFamily: 'Font',
    fontSize: 24,
    fontWeight: '400',
    letterSpacing: -0.3,
  },
  nameWrapper: {
    marginTop: 40,
  },
  timeWrapper: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
  },
  input: {
    borderColor: COLORS.GRAY,
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 12,
    paddingLeft: 10,
    marginTop: 10,
  },
  inputIcon: {
    width: 80,
    height: 80,
    borderRadius: 50,
    position: 'absolute',
  },
  iconWrapper: {
    marginTop: 20,
  },
  iconContainer: {
    position: 'relative',
    borderWidth: 2,
    borderColor: COLORS.GRAY,
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonWrapper: {
    marginTop: 30,
    flexDirection: 'row',
    gap: 24,
  },
});
