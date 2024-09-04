import { Pressable, StyleSheet, Text, View } from "react-native";

interface ClearListProps {
  setShoppingItems: any;
}

export default function ClearList({ setShoppingItems }: ClearListProps) {
  const clearShoppingList = () => {
    setShoppingItems([]);
  };

  return (
    <View style={styles.optionsRow}>
      <Pressable onPress={clearShoppingList}>
        <Text style={styles.addItem}>Clear Shopping List</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  addItem: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});
