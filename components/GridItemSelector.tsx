import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import ItemButton from "./ItemButton";

interface GridItemSelectorProps {
  availableItems: string[];
  setShoppingItems: any;
  shoppingItems: string[];
  setShowShoppingList: any;
  showShoppingList: any;
  setShowAddItem: any;
  showAddItem: any;
}

export default function GridItemSelector({
  availableItems,
  setShoppingItems,
  shoppingItems,
  setShowShoppingList,
  showShoppingList,
  setShowAddItem,
  showAddItem,
}: GridItemSelectorProps) {
  function addItemToShoppingList({ item }: { item: string }) {
    if (shoppingItems.indexOf(item) == -1) {
      setShoppingItems((shoppingItems: string[]) => [item, ...shoppingItems]);
    }
  }

  function toggleAddItemForm() {
    setShowAddItem(!showAddItem);
    setShowShoppingList(!showShoppingList);
  }

  const footer = () => {
    return (
      <ItemButton
        onPress={toggleAddItemForm}
        title={"Add New Item"}
        buttonColour={"#306cb5"}
        textColour={"white"}
      />
    );
  };

  return (
    <FlatList
      data={availableItems}
      renderItem={({ item }) => (
        <View style={styles.itemCell}>
          <ItemButton
            onPress={() => addItemToShoppingList({ item })}
            title={item}
            buttonColour="#03a2f3"
            textColour="#ffffff"
          />
        </View>
      )}
      ListHeaderComponent={footer}
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
  itemCell: {
    margin: 0,
    width: "33%",
  },
  itemCellText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
