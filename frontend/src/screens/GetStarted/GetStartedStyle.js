import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    paddingTop: 114,
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: "Font",
    fontSize: 26,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 28,
    marginTop: 4,
  },
  input: {
    borderColor: COLORS.GRAY,
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 12,
    paddingLeft: 10,
    marginTop: 40,
    marginBottom: 28,
  },
});
