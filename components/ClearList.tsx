import { Pressable, StyleSheet, Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";

interface ClearListProps {
  setShoppingItems: any;
  shoppingItems: string[];
}

export default function ClearList({
  setShoppingItems,
  shoppingItems,
}: ClearListProps) {
  const availableItems = [
    { key: "1", value: "Beer" },
    { key: "2", value: "Ham" },
    { key: "3", value: "Apples" },
    { key: "4", value: "Bread" },
    { key: "5", value: "Choc" },
    { key: "6", value: "Courgette" },
  ];

  const [selectedItem, setSelectedItem] = useState("");

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
