import { ScrollView, StyleSheet } from "react-native";
import React, { Fragment } from "react";
import ShoppingListItem from "./ShoppingListItem";
import { Item } from "./Item";
import { View } from "./Themed";

interface ShoppingListProps {
  shoppingItems: Item[];
  setShoppingItems: any;
  categoryOrder: string[];
}

export default function ShoppingList({
  shoppingItems,
  setShoppingItems,
  categoryOrder,
}: ShoppingListProps) {
  return (
    <ScrollView>
      <Fragment>
        {categoryOrder.map((category, index) => {
          return (
            <View key={index} style={styles.shoppingItem}>
              {shoppingItems
                .filter((item) => item.category === category)
                .map((item, index) => (
                  <ShoppingListItem
                    key={index}
                    shoppingItem={item}
                    shoppingItems={shoppingItems}
                    setShoppingItems={setShoppingItems}
                    category={item.category}
                  />
                ))}
            </View>
          );
        })}

        {shoppingItems
          .filter((item) => !categoryOrder.includes(item.category))
          .map((item, index) => {
            return (
              <View key={index} style={styles.shoppingItem}>
                <ShoppingListItem
                  key={index}
                  shoppingItem={item}
                  shoppingItems={shoppingItems}
                  setShoppingItems={setShoppingItems}
                  category="Unknown"
                />
              </View>
            );
          })}
      </Fragment>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  shoppingItem: {
    backgroundColor: "ghostwhite",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
