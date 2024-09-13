import { View, Text, FlatList, StyleSheet } from "react-native";
import { Category } from "./Category";
import ItemButton from "./ItemButton";
import { Fragment, useEffect, useState } from "react";
import { SupermarketRoute } from "./SupermarketRoute";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  async function addRouteToSupermarketRoutes() {
    const newSupermarketRoutes = [
      ...supermarketRoutes,
      new SupermarketRoute(supermarketName, tempSupermarketRoute),
    ];

    setSupermarketRoutes(newSupermarketRoutes);

    try {
      await AsyncStorage.setItem(
        "supermarketroutes",
        JSON.stringify(newSupermarketRoutes)
      );
    } catch (error) {
      console.log(error);
    }
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
          onPress={() => setCurrentStore(supermarketName)}
          onLongPress={undefined}
          title="Set Store"
          buttonColour={"#978edd"}
          textColour={"white"}
          fontSize={12}
        />
      </View>
      <View style={styles.createSupermarketRouteBottom}>
        <Text>Stored length : {supermarketRoutes.length}</Text>
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

      {/* <View style={styles.existingSupermarketRoutesActual}>
        <FlatList
          data={supermarketRoutes}
          renderItem={({ item }) => (
            <SupermarketRouteView supermarketRoute={item} />
          )}
        />
      </View> */}
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
