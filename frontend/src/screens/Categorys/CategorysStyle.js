import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textWrapper: {
    marginTop: 1,
  },
  title: {
    fontFamily: 'Font',
    fontSize: 36,
    fontWeight: '400',
    letterSpacing: -0.3,
  },
  day: {
    fontFamily: 'Font',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: -0.3,
    color: COLORS.GRAY,
  },
  date: {
    fontFamily: 'Font',
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: -0.3,
    color: COLORS.GRAY,
  },
  completedTasks: {
    height: 130,
    borderRadius: 10,
    backgroundColor: COLORS.PURPLE,
    marginTop: 24,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    gap: 10,
    fontFamily: 'Font',
    letterSpacing: -0.3,
  },
  textContent: {
    color: 'white',
  },
  categorysList: {
    marginTop: 15,
    marginBottom: 20,
  },
  listContent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    padding: 5,
    paddingBottom: 30,
  },
  circle: {
    borderColor: 'white',
    borderWidth: 2,
    width: 95,
    height: 95,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryInfo: {
    height: 350,
    paddingBottom: 35,
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontFamily: 'Font',
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: -0.3,
    color: COLORS.GRAY,
  },
});
