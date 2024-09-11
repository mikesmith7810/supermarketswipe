import React, { useState } from "react";
import ItemButton from "./ItemButton";
import { Item } from "./Item";
import { SupermarketRoute } from "./SupermarketRoute";
import { Category } from "./Category";
import { View, Text } from "react-native";

interface SupermarketRouteItemButtonProps {
  category: Category;
  tempSupermarketRoute: Category[];
  setTempSupermarketRoute: any;
}

export default function SupermarketRouteItemButton({
  category,
  tempSupermarketRoute,
  setTempSupermarketRoute,
}: SupermarketRouteItemButtonProps) {
  const [added, setAdded] = useState(false);

  function addCategoryToTemporarySupermarketRoute(category: Category) {
    if (added) {
      setTempSupermarketRoute(
        tempSupermarketRoute.filter((e) => e !== category)
      );
    } else {
      setTempSupermarketRoute([...tempSupermarketRoute, category]);
    }

    setAdded(!added);
  }

  return (
    <ItemButton
      onLongPress={() => null}
      onPress={() => addCategoryToTemporarySupermarketRoute(category)}
      title={category}
      buttonColour={added ? "lightgreen" : "lightgray"}
      textColour={added ? "black" : "gray"}
    />
  );
}
