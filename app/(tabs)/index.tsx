import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import GridItemSelector from "@/components/GridItemSelector";
import ClearList from "@/components/ClearList";
import ShoppingList from "@/components/ShoppingList";
import HideItems from "@/components/HideItems";
import { Item } from "@/components/Item";
import { KeyboardAvoiderView } from "@good-react-native/keyboard-avoider";
import { Category } from "@/components/Category";
import ItemButton from "@/components/ItemButton";
import { useContext } from "react";
import { DataContext } from "@/components/DataContext";
import { SupermarketRoute } from "@/components/SupermarketRoute";

export interface CategoryGroup {
  category: Category;
  categoryItems: Item[];
}
export default function TabOneList() {
  const context = useContext(DataContext);
  if (!context) throw new Error("DataContext is undefined");

  const {
    currentStore,
    setCurrentStore,
    supermarketRoutes,
    setSupermarketRoutes,
  } = context;

  const [shoppingItems, setShoppingItems] = useState([]);
  const [showAvailableItems, setShowAvailableItems] = useState(true);
  const [showShoppingList, setShowShoppingList] = useState(true);
  const [shoppingListFlexSize, setShoppingListFlexSize] = useState(3);
  const [availableItems, setAvailableItems] = useState([
    new Item("Bread", Category.Bakery),
    new Item("Ice Cream", Category.Frozen),
    new Item("Apples", Category.FruitVeg),
  ]);

  const [categoryOrder, setCategoryOrder] = useState([
    Category.Frozen,
    Category.Bakery,
    Category.FruitVeg,
  ]);

  function addItemToAvailableItems(item: Item) {
    setAvailableItems([item, ...availableItems].sort());
  }

  function setCurrentStoreAndReorderCategories(
    supermarketRoute: SupermarketRoute
  ) {
    setCurrentStore(supermarketRoute.name);
    setCategoryOrder(supermarketRoute.route);
  }

  const [newItem, setNewItem] = useState<string>("AA");

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
          <ShoppingList
            shoppingItems={shoppingItems}
            setShoppingItems={setShoppingItems}
            categoryOrder={categoryOrder}
          />
        </View>
      ) : null}

      {showAvailableItems ? (
        <View style={styles(shoppingListFlexSize).itemSelector}>
          <View style={styles(shoppingListFlexSize).availableItems}>
            <GridItemSelector
              availableItems={availableItems}
              setAvailableItems={setAvailableItems}
              setShoppingItems={setShoppingItems}
              shoppingItems={shoppingItems}
            />
          </View>
          <KeyboardAvoiderView
            style={styles(shoppingListFlexSize).addItemKeyboardInput}
          >
            <View style={styles(shoppingListFlexSize).addAvailableItem}>
              <View style={styles(shoppingListFlexSize).addAvailableItemTop}>
                <Text style={styles(shoppingListFlexSize).addItemInputLabel}>
                  Add new item :
                </Text>

                <TextInput
                  style={styles(shoppingListFlexSize).addItemInput}
                  onChangeText={(e) => setNewItem(e)}
                  placeholder="Eg: Apples"
                  placeholderTextColor={"#e2e4e8"}
                  selectionColor={"#e2e4e8"}
                  autoCorrect={false}
                />
              </View>
              <View style={styles(shoppingListFlexSize).addAvailableItemBottom}>
                <FlatList
                  data={Object.values(Category)}
                  renderItem={({ item }) => (
                    <View style={styles(shoppingListFlexSize).itemCell}>
                      <ItemButton
                        onLongPress={() => null}
                        onPress={() =>
                          addItemToAvailableItems(new Item(newItem, item))
                        }
                        title={item}
                        buttonColour="#2369bd"
                        textColour="#ffffff"
                      />
                    </View>
                  )}
                  numColumns={3}
                />
              </View>
            </View>
          </KeyboardAvoiderView>
        </View>
      ) : null}
      <View style={styles(shoppingListFlexSize).selectedStore}>
        <View style={styles(shoppingListFlexSize).selectedStoreUpdate}>
          <ItemButton
            onPress={() => setCurrentStore("Lidl")}
            onLongPress={undefined}
            title={"Update"}
            buttonColour={"lightgreen"}
            textColour={"black"}
          />
        </View>
        <View style={styles(shoppingListFlexSize).selectedStoreList}>
          <FlatList
            data={supermarketRoutes}
            renderItem={({ item }) => (
              <ItemButton
                onPress={() => setCurrentStoreAndReorderCategories(item)}
                onLongPress={undefined}
                title={item.name}
                buttonColour={"yellow"}
                textColour={"black"}
              />
            )}
            numColumns={1}
          />
        </View>
        <View style={styles(shoppingListFlexSize).selectedStoreName}>
          <ItemButton
            onPress={undefined}
            onLongPress={undefined}
            title={currentStore}
            buttonColour={"pink"}
            textColour={"black"}
          />
        </View>
      </View>
      <View style={styles(shoppingListFlexSize).viewButtons}>
        <View style={styles(shoppingListFlexSize).clearList}>
          <ClearList setShoppingItems={setShoppingItems} />
        </View>
        <View style={styles(shoppingListFlexSize).hideItems}>
          <HideItems
            showItems={showAvailableItems}
            setShowItems={setShowAvailableItems}
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
      flex: 5,
      justifyContent: "center",
      marginTop: 15,
      width: "90%",
    },
    availableItems: {
      flex: 6,
    },
    addAvailableItem: {
      flex: 1,
      backgroundColor: "#03a2f3",
      borderRadius: 10,
      padding: 4,
      margin: 5,
    },
    addAvailableItemTop: {
      flexDirection: "row",
      flex: 1,
      backgroundColor: "#03a2f3",
      borderRadius: 10,
      padding: 4,
      margin: 5,
    },
    addAvailableItemBottom: {
      flexDirection: "row",
      flex: 1,
      backgroundColor: "#03a2f3",
    },
    itemCell: {
      margin: 0,
      width: "33%",
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
    selectedStore: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      borderWidth: 1,
      width: "80%",
    },
    selectedStoreUpdate: {
      flex: 1,
      justifyContent: "center",
      borderWidth: 1,
    },
    selectedStoreList: {
      flex: 1,
      justifyContent: "center",
      borderWidth: 1,
    },
    selectedStoreName: {
      flex: 1,
      justifyContent: "center",
      borderWidth: 1,
    },
  });
