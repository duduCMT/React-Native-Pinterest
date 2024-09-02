import { FlatList } from "react-native";

import { Filter } from "@/components/Filter";

import { styles } from "./styles";
import { FiltersProps } from "./types";


export const Filters = ({ filters, filter, onChange }: FiltersProps) => {
  return (
    <FlatList 
      data={filters}
      renderItem={({ item }) => (
        <Filter 
          filter={item} 
          selected={item === filter} 
          onPress={() => onChange(item)} 
        />
      )}
      keyExtractor={item => item}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
    />
  )
}