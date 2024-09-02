import { Filters } from "@/components/Filters";
import { FILTERS } from "@/constants/FiltersConstants";
import { theme } from "@/theme";
import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0]);

  return (
    <View style={styles.container}>
      <Filters
        filters={FILTERS} 
        onChange={setFilter} 
        filter={filter} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    padding: 12,
    paddingTop: 52,
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
  }
})