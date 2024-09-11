import { useState } from "react";
import ItemButton from "./ItemButton";

interface HideItemsProps {
  showItems: boolean;
  setShowItems: any;
  setShoppingListFlexSize: any;
}

export default function HideItems({
  showItems,
  setShowItems,
  setShoppingListFlexSize,
}: HideItemsProps) {
  const toggleItems = () => {
    if (showItems) {
      setShowItems(false);
      setShoppingListFlexSize(7);
      setTitle("Show Items");
    } else {
      setShowItems(true);
      setShoppingListFlexSize(3);
      setTitle("Hide Items");
    }
  };

  const [title, setTitle] = useState("Hide Items");

  return (
    <ItemButton
      onPress={toggleItems}
      title={title}
      buttonColour="#978edd"
      textColour="#ffffff"
      onLongPress={undefined}
    />
  );
}
