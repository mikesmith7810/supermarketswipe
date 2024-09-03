import { Pressable, StyleSheet, TextInput } from "react-native";

import { Text, View } from "@/components/Themed";

import { useState } from "react";
import { FlatList } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default function TabOneList() {
  const [shoppingItems, setShoppingItems] = useState([
    "bread",
    "chocolate",
    "apples",
  ]);

  const [selectedItem, setSelectedItem] = useState("");

  const availableItems = [
    { key: "1", value: "Beer" },
    { key: "2", value: "Ham" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empty shopping list!</Text>
      <FlatList
        data={shoppingItems}
        renderItem={({ item }) => <Text>{item}</Text>}
      />

      <View style={styles.optionsContainer}>
        <View style={styles.optionsRow}>
          <SelectList
            setSelected={setSelectedItem}
            data={availableItems}
            save="value"
          />
          <Pressable
            onPress={() =>
              setShoppingItems((shoppingItems) => [
                ...shoppingItems,
                selectedItem,
              ])
            }
          >
            {/* <Pressable onPress={() => alert(selectedItem)}>*/}
            <Text>Add an Item</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  listItem: {
    fontSize: 20,
    fontWeight: "bold",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  itemInput: {
    width: "80%",
    backgroundColor: "lightgray",
    color: "black",
  },
});
