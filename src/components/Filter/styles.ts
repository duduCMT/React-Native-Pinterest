import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pressable: {
    paddingBottom: 4,
  },
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fonts.family.medium,
  },
  pressableSelected: {
    borderBottomWidth: 3,
    borderBottomColor: theme.colors.white,
  },
});