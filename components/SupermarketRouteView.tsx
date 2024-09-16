import { View, StyleSheet, FlatList, Text, ScrollView } from "react-native";
import { SupermarketRoute } from "./SupermarketRoute";
import ItemButton from "./ItemButton";
import { FadeInLeft } from "react-native-reanimated";
import { persistData } from "./DataContext";

interface SupermarketRouteViewProps {
  supermarketRoute: SupermarketRoute;
  setCurrentStore: any;
  setCategoryOrder: any;
  supermarketRoutes: SupermarketRoute[];
  setSupermarketRoutes: any;
}
export default function SupermarketRouteView({
  supermarketRoute,
  setCurrentStore,
  setCategoryOrder,
  supermarketRoutes,
  setSupermarketRoutes,
}: SupermarketRouteViewProps) {
  function setCurrentStoreAndReorderCategories(
    supermarketRoute: SupermarketRoute
  ) {
    setCurrentStore(supermarketRoute.name);
    setCategoryOrder(supermarketRoute.route);
  }

  function deleteRouteFromSupermarketRoutes(
    supermarketRoute: SupermarketRoute
  ) {
    const newSupermarketRoutes = supermarketRoutes.filter(
      (e) => e !== supermarketRoute
    );

    setSupermarketRoutes(newSupermarketRoutes);

    persistData(newSupermarketRoutes, "supermarketRoutes");
  }

  return (
    <View style={styles.routeView}>
      <View style={styles.routeTitle}>
        <ItemButton
          onPress={() => setCurrentStoreAndReorderCategories(supermarketRoute)}
          onLongPress={() => deleteRouteFromSupermarketRoutes(supermarketRoute)}
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
              key={index}
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
