import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Item from "./Item";
import ShoppingListItem from "./ShoppingListItem";

interface ShoppingListProps {
  shoppingItems: string[];
}

export default function ShoppingList({ shoppingItems }: ShoppingListProps) {
  return (
    <FlatList
      data={shoppingItems}
      renderItem={({ item }) => <ShoppingListItem shoppingItem={item} />}
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
  shoppingListItem: {
    margin: 5,
    width: "100%",
    backgroundColor: "lightgreen",
  },
  itemCellText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
