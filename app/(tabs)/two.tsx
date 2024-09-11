import { FlatList, StyleSheet, TextInput } from "react-native";

import { Text, View } from "@/components/Themed";

import { Category } from "@/components/Category";
import ItemButton from "@/components/ItemButton";
import React, { useState } from "react";
import { SupermarketRoute } from "@/components/SupermarketRoute";
import SupermarketRouteItemButton from "@/components/SupermarketRouteItemButton";
import SupermarketRouteView from "@/components/SupermarketRouteView";
import { setMike } from "./_layout";
import { mike } from "./_layout";
import { useContext } from "react";
import { DataContext } from "@/components/DataContext";
export default function TabTwoScreen() {
  const context = useContext(DataContext);
  if (!context) throw new Error("DataContext is undefined");

  const { sharedData } = context;

  const [supermarketRoutes, setSupermarketRoutes] = useState<
    SupermarketRoute[]
  >([]);

  const [supermarketName, setSupermarketName] = useState("");

  const [tempSupermarketRoute, setTempSupermarketRoute] = useState<Category[]>(
    []
  );

  function addRouteToSupermarketRoutes() {
    setSupermarketRoutes([
      ...supermarketRoutes,
      new SupermarketRoute(supermarketName, tempSupermarketRoute),
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.createSupermarketRoute}>
        <View style={styles.createSupermarketRouteTop}>
          <Text>{mike}</Text>
          <Text style={styles.addItemInputLabel}> Name :</Text>
          <TextInput
            style={styles.addItemInput}
            onChangeText={(e) => setSupermarketName(e)}
            placeholder="Eg: Lidl"
            placeholderTextColor={"#e2e4e8"}
            selectionColor={"#e2e4e8"}
            autoCorrect={false}
          />
        </View>

        <View style={styles.createSupermarketRouteBottom}>
          <FlatList
            data={Object.values(Category)}
            renderItem={({ item }) => (
              <View style={styles.categoryButtons}>
                <SupermarketRouteItemButton
                  category={item}
                  tempSupermarketRoute={tempSupermarketRoute}
                  setTempSupermarketRoute={setTempSupermarketRoute}
                />
              </View>
            )}
            numColumns={3}
          />
        </View>
      </View>

      <View style={styles.existingSupermarketRoutes}>
        <View style={styles.existingSupermarketRoutesTitle}>
          <Text style={styles.addItemInputLabel}>Existing Routes</Text>
        </View>
        <View style={styles.existingSupermarketRoutesTempTitle}>
          <Text style={styles.addItemInputLabel}>Temporary Route</Text>
        </View>
        <View style={styles.existingSupermarketRoutesTemp}>
          <View style={styles.existingSupermarketRoutesButtonsTemp}>
            <FlatList
              data={tempSupermarketRoute}
              renderItem={({ item }) => (
                <ItemButton
                  onPress={undefined}
                  onLongPress={undefined}
                  title={item}
                  buttonColour={"lightgreen"}
                  textColour={"black"}
                />
              )}
            />
          </View>
          <View style={styles.existingSupermarketRoutesSubmitTemp}>
            <ItemButton
              onPress={() => addRouteToSupermarketRoutes()}
              onLongPress={undefined}
              title="Xreate"
              buttonColour={"#978edd"}
              textColour={"white"}
            />
          </View>
        </View>
        <View style={styles.existingSupermarketRoutesActualTitle}>
          <Text style={styles.addItemInputLabel}>{sharedData}</Text>
        </View>
        <View style={styles.existingSupermarketRoutesActual}>
          <FlatList
            data={supermarketRoutes}
            renderItem={({ item }) => (
              <SupermarketRouteView supermarketRoute={item} />
            )}
          />
        </View>
      </View>
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
  nameInput: {
    flexDirection: "row",
    width: "80%",
  },
  createSupermarketRoute: {
    width: "80%",
    flex: 1,
    backgroundColor: "#03a2f3",
    borderRadius: 10,
    padding: 4,
    margin: 5,
  },
  addSupermarketRoute: {
    width: "80%",
    flex: 1,
    backgroundColor: "#4343f2",
    borderRadius: 10,
    padding: 4,
    margin: 5,
  },
  addItemInputLabel: {
    flex: 2,
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#ffffff",
    width: "80%",
    padding: 4,
    margin: 7,
  },
  categoryButtons: {
    backgroundColor: "#03a2f3",
  },
  createSupermarketRouteTop: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#03a2f3",
    borderRadius: 10,
    padding: 4,
    margin: 5,
  },
  createSupermarketRouteBottom: {
    flexDirection: "row",
    flex: 2,
    backgroundColor: "#03a2f3",
  },
  tempSupermarketRoute: {
    flex: 1,
    flexDirection: "row",
  },
  existingSupermarketRoutes: {
    flex: 3,
    width: "80%",
    backgroundColor: "#03a2f3",
    borderRadius: 10,
    padding: 4,
    margin: 5,
  },
  existingSupermarketRoutesTitle: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#03a2f3",
    borderWidth: 1,
  },
  existingSupermarketRoutesTempTitle: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#03a2f3",
    borderWidth: 1,
  },
  existingSupermarketRoutesActualTitle: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#03a2f3",
    borderWidth: 1,
  },
  existingSupermarketRoutesTemp: {
    flex: 4,
    flexDirection: "row",
    backgroundColor: "#03a2f3",
    borderWidth: 1,
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
    borderWidth: 1,
    backgroundColor: "#03a2f3",
  },

  addItemInput: {
    flex: 3,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
    width: "90%",
    margin: 5,
    paddingLeft: 5,
    backgroundColor: "#2369bd",
    borderRadius: 10,
  },
});
