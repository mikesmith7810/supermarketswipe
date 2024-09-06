import { Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Item from "./Item";
import ItemButton from "./ItemButton";

interface ShoppingListItemProps {
  shoppingItem: string;
  shoppingItems: string[];
  setShoppingItems: any;
}

export default function ShoppingListItem({
  shoppingItem,
  shoppingItems,
  setShoppingItems,
}: ShoppingListItemProps) {
  const [bought, setBought] = useState(false);

  function deleteItemFromShoppingList(item: string) {
    setShoppingItems(shoppingItems.filter((e) => e !== item));
  }

  return (
    <ItemButton
      onLongPress={() => deleteItemFromShoppingList(shoppingItem)}
      onPress={() => setBought(!bought)}
      title={shoppingItem}
      buttonColour={bought ? "lightgray" : "lightgreen"}
      textColour={bought ? "gray" : "black"}
    />
  );
}
