import { Pressable, StyleSheet, Text, View } from "react-native";
import ItemButton from "./ItemButton";

interface HideItemsProps {
  setShoppingItems: any;
}

export default function HideItems({ setShoppingItems }: HideItemsProps) {
  const clearShoppingList = () => {
    setShoppingItems([]);
  };

  return (
    <ItemButton
      onPress={clearShoppingList}
      title="Hide Items"
      buttonColour="#978edd"
      textColour="#ffffff"
    />
  );
}
