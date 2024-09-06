import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import ItemButton from "./ItemButton";

interface GridItemSelectorProps {
  setShoppingItems: any;
  shoppingItems: string[];
  setAvailableItems: any;
  availableItems: string[];
}

export default function GridItemSelector({
  availableItems,
  setAvailableItems,
  setShoppingItems,
  shoppingItems,
}: GridItemSelectorProps) {
  function addItemToShoppingList(item: string) {
    if (shoppingItems.indexOf(item) == -1) {
      setShoppingItems((shoppingItems: string[]) => [item, ...shoppingItems]);
    }
  }

  function deleteItemFromAvailableItems(item: string) {
    setAvailableItems(availableItems.filter((e) => e !== item));
  }

  return (
    <FlatList
      data={availableItems}
      renderItem={({ item }) => (
        <View style={styles.itemCell}>
          <ItemButton
            onLongPress={() => deleteItemFromAvailableItems(item)}
            onPress={() => addItemToShoppingList(item)}
            title={item}
            buttonColour="#03a2f3"
            textColour="#ffffff"
          />
        </View>
      )}
      numColumns={3}
    />
  );
}

const styles = StyleSheet.create({
  addItem: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  itemsHeader: {
    flexDirection: "row",
  },
  addItemButton: {
    flex: 2,
  },
  itemInput: {
    flex: 3,
  },
  itemCell: {
    margin: 0,
    width: "33%",
  },
  itemCellText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  addItemInput: {
    borderWidth: 1,
    width: "80%",
    padding: 4,
    margin: 5,
  },
});
