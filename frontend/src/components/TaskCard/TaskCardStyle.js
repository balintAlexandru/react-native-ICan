import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    borderRadius: 10,
    marginVertical: RFValue(10),
    marginHorizontal: RFValue(5),
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
    borderWidth: 2,
    borderColor: COLORS.PURPLE,
    borderRadius: 50,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    width: '70%',
    gap: 4,
  },
  name: {
    fontFamily: 'Font',
    fontSize: RFValue(16),
    letterSpacing: -0.3,
  },
  timeText: {
    fontFamily: 'Font',
    fontSize: RFValue(14),
    letterSpacing: -0.3,
    fontWeight: '600',
    color: COLORS.GRAY,
  },
  time: {
    fontFamily: 'Font',
    fontSize: RFValue(14),
    letterSpacing: -0.3,
    fontWeight: '400',
    color: COLORS.GRAY,
  },
  settings: {},
  settingWrapper: {
    borderTopWidth: 1,
    borderColor: COLORS.GRAY,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(20),
    gap: 30,
  },
  taskWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFValue(20),
    paddingTop: RFValue(20),
    paddingBottom: RFValue(10),
  },
  dots: {
    width: RFValue(30),
    height: RFValue(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    fontSize: RFValue(14),
    letterSpacing: -0.3,
    fontWeight: '500',
    color: COLORS.GRAY,
    fontStyle: 'italic',
  },
});
