import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    paddingTop: RFValue(100),
    paddingHorizontal: RFValue(24),
  },
  title: {
    fontFamily: 'Font',
    fontSize: RFValue(26),
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: RFValue(28),
    marginTop: RFValue(4),
  },
  input: {
    borderColor: COLORS.GRAY,
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 12,
    paddingLeft: RFValue(10),
    marginTop: RFValue(45),
    marginBottom: RFValue(20),
    width: '100%',
  },
});
