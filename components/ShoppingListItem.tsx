import { Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Item from "./Item";
import ItemButton from "./ItemButton";

interface ShoppingListItemProps {
  shoppingItem: string;
}

export default function ShoppingListItem({
  shoppingItem,
}: ShoppingListItemProps) {
  const [bought, setBought] = useState(false);

  return (
    <ItemButton
      onPress={() => setBought(!bought)}
      title={shoppingItem}
      buttonColour={bought ? "lightgray" : "lightgreen"}
      textColour={bought ? "gray" : "black"}
    />
  );
}
