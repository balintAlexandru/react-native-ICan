import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: RFValue(150),
    width: '48%',
    borderRadius: 10,
    paddingVertical: RFValue(10),
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
    right: 5,
    top: 5,
    width: RFValue(25),
    height: RFValue(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardInfo: {
    flex: 1,
    alignItems: 'center',
    gap: 12,
  },
  icon: {
    marginTop: RFValue(18),
    fontSize: RFValue(35),
  },
  infoWrapper: {
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Font',
    letterSpacing: -0.3,
    fontSize: RFValue(16),
    fontWeight: '500',
  },
  tasks: {
    fontFamily: 'Font',
    letterSpacing: -0.3,
    fontSize: 16,
    color: COLORS.GRAY,
    paddingTop: RFValue(5),
  },
  tasksCompleted: {
    fontFamily: 'Font',
    letterSpacing: -0.3,
    fontSize: 16,
    color: COLORS.GRAY,
  },
  buttonsWrapper: {
    paddingTop: RFValue(20),
    justifyContent: 'center',
    alignContent: 'center',
    gap: 15,
    flex: 1,
  },
});
