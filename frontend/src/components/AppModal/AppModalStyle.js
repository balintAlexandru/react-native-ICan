import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  modalWrapper: {
    height: '100%',
  },
  closeContainer: {
    width: '100%',
    height: '50%',
  },
  container: {
    height: '78%',
    backgroundColor: 'white',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: RFValue(24),
    paddingTop: RFValue(30),
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
    fontSize: RFValue(20),
    fontWeight: '500',
    letterSpacing: -0.3,
  },
  nameWrapper: {
    marginTop: RFValue(40),
  },
  timeWrapper: {
    marginTop: RFValue(20),
  },
  label: {
    fontSize: RFValue(16),
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: RFValue(12),
    paddingLeft: RFValue(10),
    marginTop: RFValue(10),
  },
  icon: {
    fontSize: 50,
  },
  iconWrapper: {
    marginTop: RFValue(20),
  },
  iconContainer: {
    position: 'relative',
    borderWidth: 2,
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFValue(10),
  },
  buttonWrapper: {
    marginTop: RFValue(30),
    flexDirection: 'row',
    gap: 16,
  },
  timeInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeInput: {},
});
