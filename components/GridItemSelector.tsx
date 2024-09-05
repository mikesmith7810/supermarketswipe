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
  setShoppingItems: any;
  shoppingItems: string[];
}

export default function GridItemSelector({
  setShoppingItems,
  shoppingItems,
}: GridItemSelectorProps) {
  const availableItems = [
    "Beer",
    "Ham",
    "Apples",
    "Bread",
    "Choc",
    "Courgette",
    "Pies",
    "Trousers",
    "Bananas",
    "Cat Food",
  ];

  function addItemToShoppingList({ item }: { item: string }) {
    if (shoppingItems.indexOf(item) == -1) {
      setShoppingItems((shoppingItems: string[]) => [item, ...shoppingItems]);
    }
  }

  const footer = () => {
    return (
      <ItemButton
        onPress={() => alert(1)}
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
      ListFooterComponent={footer}
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
