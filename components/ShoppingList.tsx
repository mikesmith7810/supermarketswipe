import { FlatList } from "react-native";
import React from "react";
import ShoppingListItem from "./ShoppingListItem";

interface ShoppingListProps {
  shoppingItems: string[];
  setShoppingItems: any;
}

export default function ShoppingList({
  shoppingItems,
  setShoppingItems,
}: ShoppingListProps) {
  return (
    <FlatList
      data={shoppingItems}
      renderItem={({ item }) => (
        <ShoppingListItem
          shoppingItem={item}
          shoppingItems={shoppingItems}
          setShoppingItems={setShoppingItems}
        />
      )}
    />
  );
}
