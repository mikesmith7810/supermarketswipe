import { Animated, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import GridItemSelector from "@/components/GridItemSelector";
import ClearList from "@/components/ClearList";
import ShoppingList from "@/components/ShoppingList";
import HideItems from "@/components/HideItems";
import AddItem from "@/components/AddItem";

export default function TabOneList() {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [showItems, setShowItems] = useState(true);
  const [showShoppingList, setShowShoppingList] = useState(true);
  const [showAddItem, setShowAddItem] = useState(false);
  const [shoppingListFlexSize, setShoppingListFlexSize] = useState(3);
  const [availableItems, setAvailableItems] = useState([
    "Beer",
    "Ham",
    "Apples",
    "Bread",
    "Choc",
    "Courgette",
    "Pies",
    "Trousers",
    "Bananas",
    "Cat Food",
  ]);

  return (
    <View style={styles(shoppingListFlexSize).container}>
      <View style={styles(shoppingListFlexSize).header}>
        {shoppingItems.length < 1 ? (
          <Text style={styles(shoppingListFlexSize).title}>
            Empty shopping list!
          </Text>
        ) : (
          <Text style={styles(shoppingListFlexSize).title}>
            Your Shopping List
          </Text>
        )}
      </View>
      {showShoppingList ? (
        <View style={styles(shoppingListFlexSize).shoppingList}>
          <ShoppingList shoppingItems={shoppingItems} />
        </View>
      ) : null}
      {showAddItem ? (
        <View style={styles(shoppingListFlexSize).addItem}>
          <AddItem
            availableitems={availableItems}
            setAvailableItems={setAvailableItems}
          />
        </View>
      ) : null}
      {showItems ? (
        <View style={styles(shoppingListFlexSize).itemSelector}>
          <GridItemSelector
            availableItems={availableItems}
            setShoppingItems={setShoppingItems}
            shoppingItems={shoppingItems}
            setShowShoppingList={setShowShoppingList}
            showShoppingList={showShoppingList}
            setShowAddItem={setShowAddItem}
            showAddItem={showAddItem}
          />
        </View>
      ) : null}
      <View style={styles(shoppingListFlexSize).viewButtons}>
        <View style={styles(shoppingListFlexSize).clearList}>
          <ClearList setShoppingItems={setShoppingItems} />
        </View>
        <View style={styles(shoppingListFlexSize).hideItems}>
          <HideItems
            showItems={showItems}
            setShowItems={setShowItems}
            setShoppingListFlexSize={setShoppingListFlexSize}
          />
        </View>
      </View>
    </View>
  );
}

export const styles = (shoppingListFlexSize: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "ghostwhite",
    },
    header: {
      flex: 1,
      justifyContent: "center",
    },
    shoppingList: {
      flex: shoppingListFlexSize,
      justifyContent: "flex-start",
      width: "80%",
    },
    addItem: {
      flex: shoppingListFlexSize,
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
    addItemTitle: {
      fontSize: 18,
      fontWeight: "bold",
      width: "80%",
      margin: 5,
    },
    addItemInput: {
      borderWidth: 1,
      width: "80%",
      padding: 4,
      margin: 5,
    },
  });
