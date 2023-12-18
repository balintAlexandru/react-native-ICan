import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingTop: RFValue(15),
    paddingBottom: RFValue(12),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFValue(24),
    borderBottomWidth: 1,
    borderColor: COLORS.GRAY,
    paddingBottom: RFValue(12),
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  title: {
    fontFamily: 'Font',
    fontSize: RFValue(18),
    fontWeight: '600',
    letterSpacing: -0.3,
    paddingRight: RFValue(2),
  },
  icon: {
    fontSize: RFValue(18),
  },
  tasksList: {
    paddingHorizontal: RFValue(24),
    paddingTop: RFValue(24),
    flex: 1,
    marginBottom: RFValue(40),
  },
});
