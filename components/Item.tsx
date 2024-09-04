import { StyleSheet, Text } from "react-native";

interface ListItemProps {
  name: string;
  bought: boolean;
}

export default function ListItem({ name, bought }: ListItemProps) {
  return (
    <Text
      style={{
        backgroundColor: bought ? "lightgray" : "transparent",
        margin: 10,
        fontSize: 25,
        fontWeight: "bold",
        color: bought ? "gray" : "black",
      }}
    >
      {name}
    </Text>
  );
}
