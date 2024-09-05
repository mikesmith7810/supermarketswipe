import { Pressable, StyleSheet, Text, View } from "react-native";
import ItemButton from "./ItemButton";

interface ClearListProps {
  setShoppingItems: any;
}

export default function ClearList({ setShoppingItems }: ClearListProps) {
  const clearShoppingList = () => {
    setShoppingItems([]);
  };

  return (
    <ItemButton
      onPress={clearShoppingList}
      title="Clear List"
      buttonColour="#e73a40"
      textColour="#ffffff"
    />
  );
}
