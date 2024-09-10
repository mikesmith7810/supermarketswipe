import { FlatList } from "react-native";
import React from "react";
import ShoppingListItem from "./ShoppingListItem";
import { Item } from "./Item";
import { Category } from "./Category";
import { CategoryGroup } from "@/app/(tabs)";

interface ShoppingListProps {
  shoppingItems: Item[];
  setShoppingItems: any;
  categoryOrder: number[];
  shoppingItemsByCategory: CategoryGroup[];
}

export default function ShoppingList({
  shoppingItems,
  setShoppingItems,
  categoryOrder,
  shoppingItemsByCategory,
}: ShoppingListProps) {
  return (
    // <FlatList
    //   data={shoppingItemsByCategory}
    //   renderItem={(categoryGroup) => categoryGroup.c}
    // />

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
