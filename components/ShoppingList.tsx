import { FlatList } from "react-native";
import React from "react";
import ShoppingListItem from "./ShoppingListItem";
import { Item } from "./Item";

interface ShoppingListProps {
  shoppingItems: Item[];
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
