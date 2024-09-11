import { View, StyleSheet, FlatList, Text } from "react-native";
import { SupermarketRoute } from "./SupermarketRoute";
import ItemButton from "./ItemButton";

interface SupermarketRouteViewProps {
  supermarketRoute: SupermarketRoute;
}
export default function SupermarketRouteView({
  supermarketRoute,
}: SupermarketRouteViewProps) {
  return (
    <View style={styles.routeView}>
      <View style={styles.routeTitle}>
        <Text>{supermarketRoute.name}</Text>
      </View>
      <View style={styles.routeCategories}>
        <FlatList
          data={supermarketRoute.route}
          renderItem={({ item }) => (
            <ItemButton
              onPress={undefined}
              onLongPress={undefined}
              title={item}
              buttonColour="red"
              textColour="white"
            />
          )}
          numColumns={3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  routeView: {
    backgroundColor: "#03a2f3",
    borderWidth: 1,
  },
  routeTitle: {
    flex: 1,
    backgroundColor: "#03a2f3",
    borderWidth: 1,
  },
  routeCategories: {
    flex: 3,
    backgroundColor: "#03a2f3",
    borderWidth: 1,
  },
});
