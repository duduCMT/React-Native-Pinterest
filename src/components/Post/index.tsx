import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { theme } from "@/theme";

import { styles } from "./styles";
import { PostProps } from "./types";

export const Post = ({ post }: PostProps) => {
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    if(post.image) {
      Image.getSize(post.image, (width, height) => {
        setAspectRatio(width / height);
      });
    }
  }, [post])

  return (
    <View style={styles.container}>
      <Image source={{ uri: post.image }} style={[styles.image, { aspectRatio }]} />
      <View style={styles.footer}>
        <Text style={styles.title}>{post.title}</Text>
        <Feather name="more-horizontal" size={16} color={theme.colors.white} />
      </View>
    </View>
  )
};