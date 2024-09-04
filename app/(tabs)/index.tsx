import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import GridItemSelector from "@/components/GridItemSelector";
import ClearList from "@/components/ClearList";
import ShoppingList from "@/components/ShoppingList";

export default function TabOneList() {
  const [shoppingItems, setShoppingItems] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.emptyList}>
        {shoppingItems.length < 1 ? (
          <Text style={styles.title}>Empty shopping list!</Text>
        ) : (
          <Text style={styles.title}>Go get your swag!</Text>
        )}
      </View>
      <View style={styles.shoppingList}>
        <ShoppingList shoppingItems={shoppingItems} />
      </View>
      <View style={styles.itemSelector}>
        <GridItemSelector
          setShoppingItems={setShoppingItems}
          shoppingItems={shoppingItems}
        />
      </View>
      <View style={styles.clearList}>
        <ClearList setShoppingItems={setShoppingItems} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
  },
  shoppingList: {
    flex: 5,
    justifyContent: "flex-start",
    width: "80%",
  },
  itemSelector: {
    flex: 2,
    justifyContent: "center",
    width: "90%",
  },
  clearList: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
