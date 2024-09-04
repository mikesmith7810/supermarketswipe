import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

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
    "Bin Liners",
    "Cat Food",
  ];

  function addItemToShoppingList({ item }: { item: string }) {
    if (shoppingItems.indexOf(item) == -1) {
      setShoppingItems((shoppingItems: string[]) => [item, ...shoppingItems]);
    }
  }

  return (
    <FlatList
      data={availableItems}
      renderItem={({ item }) => (
        <View style={styles.itemCell}>
          <Pressable onPress={() => addItemToShoppingList({ item })}>
            <Text style={styles.itemCellText}>{item}</Text>
          </Pressable>
        </View>
      )}
      numColumns={3}
    />
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
  itemCell: {
    margin: 5,
    width: "33%",
  },
  itemCellText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
