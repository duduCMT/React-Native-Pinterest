import { MaterialIcons } from "@expo/vector-icons";

export type MenuButtonProps = {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}