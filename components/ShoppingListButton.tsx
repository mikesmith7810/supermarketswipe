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
      <View style={styles(textColour, fontSize).appButtonLeft}>
        <Text style={styles(textColour, fontSize).appButtonText}>{title}</Text>
      </View>
      <View style={styles(textColour, fontSize).appButtonRight}>
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
      flexDirection: "row",
      paddingVertical: 11,
      paddingHorizontal: 11,
      margin: 4,
      borderWidth: 1,
      width: "80%",
    },
    appButtonLeft: {
      flex: 3,
      fontSize: fontSize,
      color: colour,
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
    },
    appButtonRight: {
      flex: 1,
      flexDirection: "row",
      fontSize: fontSize,
      color: colour,
      fontWeight: "bold",
      justifyContent: "flex-end",
      alignItems: "center",
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
      fontSize: fontSize,
      color: colour,
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  });
