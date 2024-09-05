import { TouchableOpacity, StyleSheet, Text } from "react-native";

interface ItemButtonProps {
  onPress: any;
  title: string;
  buttonColour: string;
  textColour: string;
}

export default function ItemButton({
  onPress,
  title,
  buttonColour,
  textColour,
}: ItemButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={onPress}
      style={styles(buttonColour).appButtonContainer}
    >
      <Text style={styles(textColour).appButtonText}>{title}</Text>
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
