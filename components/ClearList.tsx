import { Pressable, StyleSheet, Text, View } from "react-native";
import ItemButton from "./ItemButton";
import { persistData } from "./DataContext";
import { Item } from "./Item";

interface ClearListProps {
  setShoppingItems: any;
}

export default function ClearList({ setShoppingItems }: ClearListProps) {
  function clearShoppingList() {
    setShoppingItems([]);

    persistData([], "shoppingItems");
  }

  return (
    <ItemButton
      onPress={() => alert("Hold to clear.")}
      onLongPress={() => clearShoppingList()}
      title="Clear List"
      buttonColour="#e73a40"
      textColour="#ffffff"
      fontSize={14}
    />
  );
}
