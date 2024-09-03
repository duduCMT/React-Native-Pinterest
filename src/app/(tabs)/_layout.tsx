import { Tabs } from "expo-router";
import { Foundation, FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";

import { theme } from "@/theme";
import { Avatar } from "@/components/Avatar";
import { Menu } from "@/components/Menu";
import { View } from "react-native";
import { useRef } from "react";

const activeTintColor = theme.colors.white;

export default function TabLayout() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleBottomSheetOpen = () => {
    bottomSheetRef.current?.expand();
  }

  const handleBottomSheetClose = () => {
    bottomSheetRef.current?.snapToIndex(0);
  }

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: activeTintColor,
          tabBarInactiveTintColor: theme.colors.gray[600],
          tabBarStyle: {
            backgroundColor: theme.colors.black,
            borderColor: theme.colors.black,
          }
        }}
      >
        <Tabs.Screen
          name="index" 
          options={{
            tabBarIcon: ({ size, color }) => (
              <Foundation name="home" size={size} color={color} />
            )
          }} 
        />
        <Tabs.Screen 
          name="search"
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="search" size={size} color={color} />
            )
          }}
        />
        <Tabs.Screen 
          name="menu"
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5 name="plus" size={size} color={color} />
            )
          }}
          listeners={() => ({
            tabPress: (event) => {
              event.preventDefault();
              handleBottomSheetOpen();
            }
          })}
        />
        <Tabs.Screen 
          name="messages" 
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="chatbubble-ellipses-sharp" size={size} color={color} />
            )
          }}
        />
        <Tabs.Screen 
          name="profile" 
          options={{
            tabBarIcon: ({ size, color }) => (
              <Avatar selected={color === activeTintColor} source={{ uri: "https://github.com/duducmt.png" }} />  
            )
          }}
        />
      </Tabs>
      <Menu ref={bottomSheetRef} onClose={handleBottomSheetClose} />
    </View>
  );
};