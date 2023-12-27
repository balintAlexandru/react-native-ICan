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
    paddingHorizontal: RFValue(24),
    paddingTop: RFValue(10),
    paddingBottom: RFValue(10),
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textWrapper: {
    marginTop: RFValue(5),
  },
  title: {
    fontFamily: 'Font',
    fontSize: RFValue(36),
    fontWeight: '400',
    letterSpacing: -0.3,
  },
  day: {
    fontFamily: 'Font',
    fontSize: RFValue(16),
    fontWeight: '600',
    letterSpacing: -0.3,
    color: COLORS.GRAY,
  },
  date: {
    fontFamily: 'Font',
    fontSize: RFValue(16),
    fontWeight: '400',
    letterSpacing: -0.3,
    color: COLORS.GRAY,
  },
  completedTasks: {
    borderRadius: 10,
    backgroundColor: COLORS.PURPLE,
    marginTop: RFValue(24),
    paddingHorizontal: RFValue(30),
    paddingVertical: RFValue(18),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    gap: 10,
    fontFamily: 'Font',
    letterSpacing: -0.3,
  },
  categoryTitle: {
    gap: 10,
    fontFamily: 'Font',
    letterSpacing: -0.3,
    marginTop: 20,
    fontWeight: '600',
    fontSize: RFValue(18),
  },
  textContent: {
    color: 'white',
  },
  categorysList: {
    width: '100%',
    marginTop: RFValue(5),
    marginBottom: RFValue(30),
  },

  listContent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    padding: RFValue(7),
    paddingBottom: RFValue(30),
  },
  circle: {
    position: 'relative',
    width: 95,
    height: 95,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryInfo: {
    flex: 1,
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFValue(15),
    marginBottom: RFValue(20),
  },
  infoText: {
    fontFamily: 'Font',
    fontSize: RFValue(16),
    fontWeight: '400',
    letterSpacing: -0.3,
    color: COLORS.GRAY,
    textAlign: 'center',
  },
});
