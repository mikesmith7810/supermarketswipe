import React, { useState } from "react";
import { Item } from "./Item";


import { persistData } from "./DataContext";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

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
    const newShoppingItems = shoppingItems.filter((e) => e !== item);

    setShoppingItems(newShoppingItems);

    persistData(newShoppingItems, "shoppingItems");
  }

  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={() => setBought(!bought)}
      onLongPress={() => deleteItemFromShoppingList(shoppingItem)}
      style={styles(bought ? "lightgray" : "lightgreen", 14).appButtonContainer}
    >
      <View style={styles(bought ? "gray" : "black", 14).appButtonLeft}>
        <Text style={styles(bought ? "gray" : "black", 14).appButtonText}>
          {shoppingItem.name}
        </Text>
      </View>
      <View style={styles(bought ? "gray" : "black", 14).appButtonRight}>
        <Text style={styles(bought ? "gray" : "black", 10).appButtonCategory}>
          {category}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export const styles = (colour: string, fontSize: number) =>
  StyleSheet.create({
    appButtonContainer: {
      backgroundColor: colour,
      borderRadius: 10,
      flexDirection: "row",
      paddingVertical: 11,
      paddingHorizontal: 11,
      margin: 4,
      width: "80%",
    },
    appButtonLeft: {
      flex: 3,
      fontSize: fontSize,
      color: colour,
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
    },
    appButtonRight: {
      flex: 1,
      flexDirection: "row",
      fontSize: fontSize,
      color: colour,
      fontWeight: "bold",
      justifyContent: "flex-end",
      alignItems: "center",
      textTransform: "uppercase",
    },
    appButtonText: {
      flex: 2,
      fontSize: fontSize,
      color: colour,
      fontWeight: "bold",
      alignItems: "flex-start",
      textTransform: "uppercase",
    },
    appButtonCategory: {
      fontSize: fontSize,
      color: colour,
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  });
