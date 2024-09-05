import { FlatList } from "react-native";
import React from "react";
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
