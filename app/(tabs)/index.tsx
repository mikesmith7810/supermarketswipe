import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import GridItemSelector from "@/components/GridItemSelector";
import ClearList from "@/components/ClearList";
import ShoppingList from "@/components/ShoppingList";
import HideItems from "@/components/HideItems";

export default function TabOneList() {
  const [shoppingItems, setShoppingItems] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.emptyList}>
        {shoppingItems.length < 1 ? (
          <Text style={styles.title}>Empty shopping list!</Text>
        ) : (
          <Text style={styles.title}>Add Items To Your List</Text>
        )}
      </View>
      <Animated.View style={styles.shoppingList}>
        <ShoppingList shoppingItems={shoppingItems} />
      </Animated.View>
      <View style={styles.itemSelector}>
        <GridItemSelector
          setShoppingItems={setShoppingItems}
          shoppingItems={shoppingItems}
        />
      </View>
      <View style={styles.viewButtons}>
        <View style={styles.clearList}>
          <ClearList setShoppingItems={setShoppingItems} />
        </View>
        <View style={styles.hideItems}>
          <HideItems setShoppingItems={setShoppingItems} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "ghostwhite",
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
  },
  shoppingList: {
    flex: 3,
    justifyContent: "flex-start",
    width: "80%",
  },
  itemSelector: {
    flex: 4,
    justifyContent: "center",
    marginTop: 15,
    width: "90%",
  },
  viewButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
  },
  clearList: {
    flex: 1,
    justifyContent: "center",
  },
  hideItems: {
    flex: 2,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
