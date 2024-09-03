import { forwardRef } from "react";
import { Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { MenuProps } from "./types";
import { styles } from "./styles";
import { theme } from "@/theme";
import { MenuButton } from "../MenuButton";

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet 
      ref={ref} 
      index={0} 
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="close" size={24} color={theme.colors.white} onPress={onClose} />
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>
        <View style={styles.options}>
          <MenuButton title="Pin" icon="push-pin" />
          <MenuButton title="Colagem" icon="app-shortcut" />
          <MenuButton title="Pasta" icon="space-dashboard" />
        </View>
      </View>
    </BottomSheet>
  )
});