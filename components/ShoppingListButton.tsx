import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

interface ShoppingListItemProps {
  onPress: any;
  onLongPress: any;
  title: string;
  category: string;
  buttonColour: string;
  textColour: string;
  fontSize: number;
}

export default function ShoppingListButton({
  onPress,
  onLongPress,
  title,
  category,
  buttonColour,
  textColour,
  fontSize,
}: ShoppingListItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles(buttonColour, fontSize).appButtonContainer}
    >
      <View style={styles(textColour, fontSize).appButtonContents}>
        <Text style={styles(textColour, fontSize).appButtonText}>{title}</Text>
        <Text style={styles(textColour, 10).appButtonCategory}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
}

export const styles = (colour: string, fontSize: number) =>
  StyleSheet.create({
    appButtonContainer: {
      backgroundColor: colour,
      borderRadius: 10,
      paddingVertical: 11,
      paddingHorizontal: 11,
      margin: 4,
    },
    appButtonContents: {
      flexDirection: "row",
      fontSize: fontSize,
      color: colour,
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
    },
    appButtonText: {
      flex: 2,
      fontSize: fontSize,
      color: colour,
      fontWeight: "bold",
      alignItems: "flex-start",
      textTransform: "uppercase",
    },
    appButtonCategory: {
      flex: 1,
      fontSize: fontSize,
      backgroundColor: "lightblue",

      color: colour,
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
    },
  });
