import React, { useState } from "react";
import ItemButton from "./ItemButton";
import { Item } from "./Item";
import ShoppingListButton from "./ShoppingListButton";

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

  function deleteItemFromShoppingList(item: Item) {
    setShoppingItems(shoppingItems.filter((e) => e !== item));
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
