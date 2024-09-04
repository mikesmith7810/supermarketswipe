import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Item from "./Item";

interface ShoppingListItemProps {
  shoppingItem: string;
}

export default function ShoppingListItem({
  shoppingItem,
}: ShoppingListItemProps) {
  const [bought, setBought] = useState(false);

  return (
    <View style={styles.shoppingListItem}>
      <Pressable
        onPress={() => setBought(!bought)}
        style={{ backgroundColor: bought ? "lightgray" : "transparent" }}
      >
        <Item name={shoppingItem} bought={bought} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  addItem: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  shoppingListItem: {
    margin: 5,
    width: "100%",
    backgroundColor: "lightgreen",
  },
  itemCellText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "pink",
  },
});
