import {
  Animated,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import GridItemSelector from "@/components/GridItemSelector";
import ClearList from "@/components/ClearList";
import ShoppingList from "@/components/ShoppingList";
import HideItems from "@/components/HideItems";
import AddItem from "@/components/AddItem";
import { KeyboardAvoiderView } from "@good-react-native/keyboard-avoider";

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

  function addItemToAvailableItems(item: string) {
    setAvailableItems((availableItems: string[]) => [item, ...availableItems]);
    // setAvailableItems(availableItems.toSorted());
  }

  return (
    <View style={styles(shoppingListFlexSize).container}>
      <View style={styles(shoppingListFlexSize).header}>
        {shoppingItems.length < 1 ? (
          <Text style={styles(shoppingListFlexSize).title}>
            No Shopping List Created!
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

      {showItems ? (
        <View style={styles(shoppingListFlexSize).itemSelector}>
          <View style={styles(shoppingListFlexSize).availableItems}>
            <GridItemSelector
              availableItems={availableItems}
              setAvailableItems={setAvailableItems}
              setShoppingItems={setShoppingItems}
              shoppingItems={shoppingItems}
            />
          </View>

          <View style={styles(shoppingListFlexSize).addAvailableItem}>
            <Text style={styles(shoppingListFlexSize).addItemInputLabel}>
              Add new item :
            </Text>
            <KeyboardAvoiderView
              style={styles(shoppingListFlexSize).addItemKeyboardInput}
            >
              <TextInput
                style={styles(shoppingListFlexSize).addItemInput}
                onSubmitEditing={(item) =>
                  addItemToAvailableItems(item.nativeEvent.text)
                }
                placeholder="Eg: Apples"
                placeholderTextColor={"#e2e4e8"}
                selectionColor={"#e2e4e8"}
                autoCorrect={false}
              />
            </KeyboardAvoiderView>
          </View>
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
    availableItems: {
      flex: 6,
    },
    addAvailableItem: {
      flexDirection: "row",
      flex: 1,
      backgroundColor: "#03a2f3",
      borderRadius: 10,
      padding: 4,
      margin: 5,
    },
    addItemInput: {
      flex: 3,
      fontSize: 16,
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "white",
      width: "90%",
      margin: 5,
      paddingLeft: 5,
      backgroundColor: "#2369bd",
      borderRadius: 10,
    },
    addItemKeyboardInput: {
      flex: 3,
    },
    addItemInputLabel: {
      flex: 2,
      fontSize: 14,
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "#ffffff",
      width: "80%",
      padding: 4,
      margin: 7,
    },
    appButtonContainer: {
      elevation: 8,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      margin: 4,
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
  });
