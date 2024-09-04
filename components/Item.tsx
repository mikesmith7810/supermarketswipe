import { StyleSheet, Text } from "react-native";

interface ListItemProps {
  name: string;
}

export default function ListItem({ name }: ListItemProps) {
  return <Text style={styles.listItem}>{name}</Text>;
}

const styles = StyleSheet.create({
  listItem: {
    margin: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
});
