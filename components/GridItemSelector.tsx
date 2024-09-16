import { FlatList, StyleSheet, View } from "react-native";
import { Item } from "./Item";
import ItemButton from "./ItemButton";
import { persistData } from "./DataContext";
import AvailableItemButton from "./AvailableItemButton";

interface GridItemSelectorProps {
  setShoppingItems: any;
  shoppingItems: Item[];
  setAvailableItems: any;
  availableItems: Item[];
}

export default function GridItemSelector({
  setShoppingItems,
  shoppingItems,
  setAvailableItems,
  availableItems,
}: GridItemSelectorProps) {
  function addItemToShoppingList(item: Item) {
    if (
      !shoppingItems.some((shoppingItem) => shoppingItem.name === item.name)
    ) {
      const newShoppingItems = [item, ...shoppingItems];

      setShoppingItems(newShoppingItems);

      persistData(newShoppingItems, "shoppingItems");
    }
  }

  function deleteItemFromAvailableItems(item: Item) {
    const newAvailableItems = availableItems.filter(
      (availableItem) => availableItem.name !== item.name
    );

    setAvailableItems(newAvailableItems);

    persistData(newAvailableItems, "availableItems");
  }

  return (
    <FlatList
      data={availableItems}
      renderItem={({ item }) => (
        <View style={styles.itemCell}>
          <AvailableItemButton
            onPress={() => addItemToShoppingList(item)}
            onLongPress={() => deleteItemFromAvailableItems(item)}
            title={item.name}
            category={item.category}
            buttonColour="#03a2f3"
            textColour="#ffffff"
            fontSize={15}
          />
        </View>
      )}
      numColumns={3}
    />
  );
}

const styles = StyleSheet.create({
  addItem: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  itemsHeader: {
    flexDirection: "row",
  },
  addItemButton: {
    flex: 2,
  },
  itemInput: {
    flex: 3,
  },
  itemCell: {
    margin: 0,
    width: "33%",
  },
  itemCellText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  addItemInput: {
    borderWidth: 1,
    width: "80%",
    padding: 4,
    margin: 5,
  },
});
