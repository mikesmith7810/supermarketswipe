import { TouchableOpacity, StyleSheet, Text } from "react-native";

interface ItemButtonProps {
  onPress: any;
  onLongPress: any;
  title: string;
  buttonColour: string;
  textColour: string;
  fontSize: number;
}

export default function ItemButton({
  onPress,
  onLongPress,
  title,
  buttonColour,
  textColour,
  fontSize,
}: ItemButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles(buttonColour, fontSize).appButtonContainer}
    >
      <Text style={styles(textColour, fontSize).appButtonText}>{title}</Text>
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
    appButtonText: {
      fontSize: fontSize,
      color: colour,
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
    },
  });
