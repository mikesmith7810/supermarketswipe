import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Item } from "./Item";

interface CategoryItemButtonProps {
  onPress: any;
  onLongPress: any;
  item: Item;
  buttonColour: string;
  textColour: string;
}

export default function CategoryItemButton({
  onPress,
  onLongPress,
  item,
  buttonColour,
  textColour,
}: CategoryItemButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles(buttonColour).appButtonContainer}
    >
      <Text style={styles(textColour).appButtonText}>
        {item.name} {item.category}
      </Text>
    </TouchableOpacity>
  );
}

export const styles = (colour: string) =>
  StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: colour,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      margin: 4,
    },
    appButtonText: {
      fontSize: 14,
      color: colour,
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
    },
  });
