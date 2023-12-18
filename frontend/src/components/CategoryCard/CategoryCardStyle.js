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
    right: 10,
    top: 10,
  },
  cardInfo: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
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
    fontSize: RFValue(14),
    fontWeight: '500',
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
