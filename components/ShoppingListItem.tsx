import React, { useState } from "react";
import ItemButton from "./ItemButton";
import { Item } from "./Item";

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
    <ItemButton
      onLongPress={() => deleteItemFromShoppingList(shoppingItem)}
      onPress={() => setBought(!bought)}
      title={shoppingItem.name}
      buttonColour={bought ? "lightgray" : "lightgreen"}
      textColour={bought ? "gray" : "black"}
      fontSize={14}
    />
  );
}
