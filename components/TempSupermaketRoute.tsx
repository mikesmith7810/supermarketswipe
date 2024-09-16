import { View, FlatList, StyleSheet } from "react-native";
import { Category } from "./Category";
import ItemButton from "./ItemButton";
import { Fragment } from "react";
import { SupermarketRoute } from "./SupermarketRoute";

import { persistData } from "./DataContext";

interface TempSupermarketRouteProps {
  tempSupermarketRoute: Category[];
  setSupermarketRoutes: any;
  supermarketRoutes: SupermarketRoute[];
  supermarketName: string;
  setCurrentStore: any;
}

export default function TempSupermarketRoute({
  tempSupermarketRoute,
  setSupermarketRoutes,
  supermarketRoutes,
  supermarketName,
  setCurrentStore,
}: TempSupermarketRouteProps) {
  function addRouteToSupermarketRoutes() {
    if (
      !supermarketRoutes.some(
        (supermarketRoute) => supermarketRoute.name === supermarketName
      )
    ) {
      const newSupermarketRoutes = [
        ...supermarketRoutes,
        new SupermarketRoute(supermarketName, tempSupermarketRoute),
      ];

      setSupermarketRoutes(newSupermarketRoutes);

      persistData(newSupermarketRoutes, "supermarketRoutes");
    } else {
      alert("Store already exists.");
    }
  }

  function setStore() {
    setCurrentStore(supermarketName);

    persistData(supermarketName, "currentStore");
  }

  return (
    <Fragment>
      <View style={styles.createSupermarketRouteTop}>
        <ItemButton
          onPress={() => addRouteToSupermarketRoutes()}
          onLongPress={undefined}
          title="Create"
          buttonColour={"#978edd"}
          textColour={"white"}
          fontSize={12}
        />
        <ItemButton
          onPress={() => setStore()}
          onLongPress={undefined}
          title="Set Store"
          buttonColour={"#978edd"}
          textColour={"white"}
          fontSize={12}
        />
      </View>
      <View style={styles.createSupermarketRouteBottom}>
        <FlatList
          data={tempSupermarketRoute}
          renderItem={({ item }) => (
            <ItemButton
              onPress={undefined}
              onLongPress={undefined}
              title={item}
              buttonColour={"lightgreen"}
              textColour={"black"}
              fontSize={10}
            />
          )}
          numColumns={1}
        />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  createSupermarketRouteTop: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#03a2f3",
    borderRadius: 10,
    padding: 4,
    margin: 5,
  },
  createSupermarketRouteBottom: {
    flex: 14,
    backgroundColor: "#03a2f3",
  },
  existingSupermarketRoutesTemp: {
    flex: 4,
    flexDirection: "row",
    backgroundColor: "#03a2f3",
  },
  existingSupermarketRoutesButtonsTemp: {
    flex: 2,
    backgroundColor: "#03a2f3",
  },
  existingSupermarketRoutesSubmitTemp: {
    flex: 1,
    backgroundColor: "#03a2f3",
  },
  existingSupermarketRoutesActual: {
    flex: 6,
    flexDirection: "row",
    backgroundColor: "#03a2f3",
  },
});
