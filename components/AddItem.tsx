import { StyleSheet, Text, TextInput, View } from "react-native";

interface AddItemProps {
  availableitems: string[];
  setAvailableItems: any;
}

export default function AddItem({
  availableitems,
  setAvailableItems,
}: AddItemProps) {
  function addItemToAvailableItems(item: string) {
    setAvailableItems((availableItems: string[]) => [item, ...availableItems]);
  }

  return (
    <View>
      <Text style={styles.addItemTitle}>Item Name :</Text>
      <TextInput
        style={styles.addItemInput}
        onSubmitEditing={(item) =>
          addItemToAvailableItems(item.nativeEvent.text)
        }
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  addItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    width: "80%",
    margin: 5,
  },
  addItemInput: {
    borderWidth: 1,
    width: "80%",
    padding: 4,
    margin: 5,
  },
});
