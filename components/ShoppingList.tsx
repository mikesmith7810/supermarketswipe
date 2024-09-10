import { FlatList, Text } from "react-native";
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
    <Fragment>
      {categoryOrder.map((category) => {
        return (
          <View>
            <View>
              <Text>{category}</Text>
            </View>
            <FlatList
              data={shoppingItems.filter((item) => item.category === category)}
              renderItem={({ item }) => (
                <ShoppingListItem
                  shoppingItem={item}
                  shoppingItems={shoppingItems}
                  setShoppingItems={setShoppingItems}
                />
              )}
            />
          </View>
        );
      })}
    </Fragment>
  );
}
