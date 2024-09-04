import { useEffect } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";
import { Skeleton } from "moti/skeleton";

import { theme } from "@/theme";

const skeletonColors = [
  theme.colors.gray[600],
  theme.colors.gray[700],
  theme.colors.gray[600],
];

export default function Splash() {
  const logoScale = useSharedValue(1);
  const logoPositionY = useSharedValue(0);

  const dimensions = useWindowDimensions();

  const logoAnimatedStyles = useAnimatedStyle(() => ({
    transform: [
      { scale: logoScale.value },
      { translateY: logoPositionY.value },
    ]
  }));

  const logoAnimation = () => {
    logoScale.value = withSequence(
      withTiming(0.7),
      withTiming(1.3),
      withTiming(1, undefined, (finished) => {
        if(finished) {
          logoPositionY.value = withSequence(
            withTiming(50),
            withTiming(-dimensions.height, { duration: 400 }),
          )
        }
      }),
    );
  };

  const boxes = (column: "right" | "left") => {
    const rest = column === "left" ? 0 : 1;

    return Array.from({ length: 20 })
      .filter((_, index) => index % 2 === rest)
      .map((_, index) => {
        const height = index % 2 === (column === "left" ? 0 : 1) ? 200 : 300; 
        return (
          <Animated.View key={index} style={[styles.box, { height }]}>
            <Skeleton colors={skeletonColors} width="100%" height={height} />
          </Animated.View>
        );
      });
  }

  useEffect(() => {
    logoAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image source={require("@/assets/images/logo.png")} style={[styles.logo, logoAnimatedStyles]} />
      <View style={styles.boxes}>
        <View style={styles.column}>
          {boxes("left")}
        </View>
        <View style={styles.column}>
          {boxes("right")}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 64,
    width: 64,
  },
  boxes: {
    flex: 1,
    width: "100%",
    flexDirection: "row",  
    gap: 16,
  },
  box: {
    width: "100%",
    backgroundColor: theme.colors.gray[600],
    borderRadius: 16,
  },
  column: {
    flex: 1,
    gap: 16,
  },
})