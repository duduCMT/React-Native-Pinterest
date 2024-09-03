import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
  },
  image: {
    borderRadius: 18,
  },
  title: {
    fontSize: 14,
    color: theme.colors.white,
    fontFamily: theme.fonts.family.medium,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginTop: 7,
    paddingHorizontal: 4,
  },
});