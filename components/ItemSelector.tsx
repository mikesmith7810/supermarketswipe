import { Pressable, StyleSheet, Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";

interface ItemSelectorProps {
  setShoppingItems: any;
  shoppingItems: string[];
}

export default function ItemSelector({
  setShoppingItems,
  shoppingItems,
}: ItemSelectorProps) {
  const availableItems = [
    { key: "1", value: "Beer" },
    { key: "2", value: "Ham" },
    { key: "3", value: "Apples" },
    { key: "4", value: "Bread" },
    { key: "5", value: "Choc" },
    { key: "6", value: "Courgette" },
  ];

  const [selectedItem, setSelectedItem] = useState("");

  const addItemToShoppingList = () => {
    if (shoppingItems.indexOf(selectedItem) == -1) {
      setShoppingItems((shoppingItems: string[]) => [
        selectedItem,
        ...shoppingItems,
      ]);
    }
  };

  return (
    <View style={styles.optionsRow}>
      <SelectList
        setSelected={setSelectedItem}
        data={availableItems}
        save="value"
      />
      <Pressable onPress={addItemToShoppingList}>
        <Text style={styles.addItem}>Add an Item</Text>
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
