import { theme } from '@/theme';
import { colors } from './../../theme/colors'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fonts.family.medium,
    marginTop: 10,
  },
  icon: {
    padding: 24,
    backgroundColor: theme.colors.gray[700],
    borderRadius: 18,
  },
});