import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

import { Category } from "@/components/Category";
import ItemButton from "@/components/ItemButton";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>supermarket routes</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <FlatList
        data={Object.values(Category)}
        renderItem={({ item }) => (
          <View>
            <ItemButton
              onLongPress={() => null}
              onPress={() => null}
              title={item}
              buttonColour="#2369bd"
              textColour="#ffffff"
            />
          </View>
        )}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
