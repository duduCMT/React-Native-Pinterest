import { Pressable, Text } from "react-native";
import MaterialIcons  from "@expo/vector-icons/MaterialIcons";

import { theme } from "@/theme";

import { MenuButtonProps } from "./types";
import { styles } from "./styles";

export const MenuButton = ({ title, icon }: MenuButtonProps) => {
  return (
    <Pressable style={styles.container}>
      <MaterialIcons name={icon} size={32} color={theme.colors.white} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}