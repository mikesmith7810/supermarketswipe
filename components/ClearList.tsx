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
      onPress={() => alert("Hold to clear.")}
      onLongPress={clearShoppingList}
      title="Clear List"
      buttonColour="#e73a40"
      textColour="#ffffff"
    />
  );
}
