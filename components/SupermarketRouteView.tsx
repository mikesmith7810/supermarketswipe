import { View, StyleSheet, FlatList, Text, ScrollView } from "react-native";
import { SupermarketRoute } from "./SupermarketRoute";
import ItemButton from "./ItemButton";
import { FadeInLeft } from "react-native-reanimated";

interface SupermarketRouteViewProps {
  supermarketRoute: SupermarketRoute;
  setCurrentStore: any;
  setCategoryOrder: any;
}
export default function SupermarketRouteView({
  supermarketRoute,
  setCurrentStore,
  setCategoryOrder,
}: SupermarketRouteViewProps) {
  function setCurrentStoreAndReorderCategories(
    supermarketRoute: SupermarketRoute
  ) {
    setCurrentStore(supermarketRoute.name);
    setCategoryOrder(supermarketRoute.route);
  }

  return (
    <View style={styles.routeView}>
      <View style={styles.routeTitle}>
        <ItemButton
          onPress={() => setCurrentStoreAndReorderCategories(supermarketRoute)}
          onLongPress={undefined}
          title={supermarketRoute.name}
          buttonColour="lightgreen"
          textColour="black"
          fontSize={14}
        />
      </View>
      <View style={styles.routeCategories}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          {supermarketRoute.route.map((item, index) => (
            <ItemButton
              onPress={undefined}
              onLongPress={undefined}
              title={item}
              buttonColour="lightpink"
              textColour="black"
              fontSize={0}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  routeView: {
    backgroundColor: "#03a2f3",
    borderWidth: 1,
    margin: 10,
  },
  routeTitle: {
    flex: 1,
    backgroundColor: "#03a2f3",
    alignItems: "flex-start",
  },
  routeCategories: {
    flexDirection: "row",
    backgroundColor: "#03a2f3",
  },
});
