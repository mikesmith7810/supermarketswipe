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
    } else {
      setShowItems(true);
      setShoppingListFlexSize(3);
    }
  };

  return (
    <ItemButton
      onPress={toggleItems}
      title="Hide Items"
      buttonColour="#978edd"
      textColour="#ffffff"
    />
  );
}
