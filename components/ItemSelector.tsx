import { Pressable, StyleSheet, TextInput } from "react-native";
import { Text, View } from "@/components/Themed";
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
  ];

  const [selectedItem, setSelectedItem] = useState("");

  return (
    <View style={styles.optionsContainer}>
      <View style={styles.optionsRow}>
        <SelectList
          setSelected={setSelectedItem}
          data={availableItems}
          save="value"
        />
        <Pressable
          onPress={() =>
            setShoppingItems((shoppingItems: string[]) => [
              ...shoppingItems,
              selectedItem,
            ])
          }
        >
          <Text style={styles.addItem}>Add an Item</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "column",
  },
  addItem: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
