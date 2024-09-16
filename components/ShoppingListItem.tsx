import React, { useState } from "react";
import ItemButton from "./ItemButton";
import { Item } from "./Item";
import ShoppingListButton from "./ShoppingListButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistData } from "./DataContext";

interface ShoppingListItemProps {
  shoppingItem: Item;
  shoppingItems: Item[];
  setShoppingItems: any;
  category: string;
}

export default function ShoppingListItem({
  shoppingItem,
  shoppingItems,
  setShoppingItems,
  category,
}: ShoppingListItemProps) {
  const [bought, setBought] = useState(false);

  async function deleteItemFromShoppingList(item: Item) {
    const newShoppingItems = shoppingItems.filter((e) => e !== item);

    setShoppingItems(newShoppingItems);

    persistData(newShoppingItems, "shoppingItems");
  }

  return (
    <ShoppingListButton
      onLongPress={() => deleteItemFromShoppingList(shoppingItem)}
      onPress={() => setBought(!bought)}
      title={shoppingItem.name}
      category={category}
      buttonColour={bought ? "lightgray" : "lightgreen"}
      textColour={bought ? "gray" : "black"}
      fontSize={14}
    />
  );
}
