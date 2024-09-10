import React, { useState } from "react";
import ItemButton from "./ItemButton";
import { Item } from "./Item";
import { View } from "./Themed";
import CategoryItemButton from "./CategoryItemButton";

interface ShoppingListItemProps {
  shoppingItem: Item;
  shoppingItems: Item[];
  setShoppingItems: any;
}

export default function ShoppingListItem({
  shoppingItem,
  shoppingItems,
  setShoppingItems,
}: ShoppingListItemProps) {
  const [bought, setBought] = useState(false);

  function deleteItemFromShoppingList(item: Item) {
    setShoppingItems(shoppingItems.filter((e) => e !== item));
  }

  return (
    <CategoryItemButton
      onLongPress={() => deleteItemFromShoppingList(shoppingItem)}
      onPress={() => setBought(!bought)}
      item={shoppingItem}
      buttonColour={bought ? "lightgray" : "lightgreen"}
      textColour={bought ? "gray" : "black"}
    />
  );
}
