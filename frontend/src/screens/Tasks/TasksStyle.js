import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: COLORS.GRAY,
    paddingBottom: 20,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontFamily: 'Font',
    fontSize: 28,
    fontWeight: '600',
    letterSpacing: -0.3,
  },
  icon: {
    fontSize: 24,
  },
  tasksList: {
    paddingHorizontal: 24,
    paddingTop: 40,
  },
});
