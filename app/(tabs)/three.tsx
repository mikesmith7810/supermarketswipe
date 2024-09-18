import { FlatList, StyleSheet, View } from "react-native";
import { Category } from "@/components/Category";
import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "@/components/DataContext";
import ItemButton from "@/components/ItemButton";
import SupermarketRouteView from "@/components/SupermarketRouteView";
export default function TabTwoScreen() {
  const context = useContext(DataContext);
  if (!context) throw new Error("DataContext is undefined");

  const {
    currentStore,
    setCurrentStore,
    supermarketRoutes,
    setSupermarketRoutes,
    categoryOrder,
    setCategoryOrder,
  } = context;

  const [supermarketName, setSupermarketName] = useState("");

  const [tempSupermarketRoute, setTempSupermarketRoute] = useState<Category[]>(
    []
  );

  return (
    <View style={styles.container}>
      <View style={styles.existingSupermarketRouteTop}>
        <View style={styles.existingSupermarketRouteTitle}>
          <ItemButton
            onPress={undefined}
            onLongPress={undefined}
            title={"Current Store : " + currentStore}
            buttonColour="orange"
            textColour="white"
            fontSize={14}
          />
        </View>
      </View>
      <View style={styles.existingSupermarketRoutes}>
        <FlatList
          data={supermarketRoutes}
          renderItem={({ item }) => (
            <SupermarketRouteView
              supermarketRoute={item}
              setCurrentStore={setCurrentStore}
              setCategoryOrder={setCategoryOrder}
              supermarketRoutes={supermarketRoutes}
              setSupermarketRoutes={setSupermarketRoutes}
            />
          )}
          numColumns={1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "ghostwhite",
  },
  existingSupermarketRouteTop: {
    flexDirection: "row",
    width: "80%",
    flex: 1,
    backgroundColor: "#03a2f3",
    borderRadius: 10,
    padding: 4,
    margin: 5,
  },
  existingSupermarketRouteTitle: {
    flexDirection: "row",
    width: "80%",
    flex: 1,
    backgroundColor: "#03a2f3",
    borderRadius: 10,
    padding: 4,
    margin: 5,
  },
  existingSupermarketRouteSelectedStore: {
    flexDirection: "row",
    width: "80%",
    flex: 1,
    backgroundColor: "#03a2f3",
    borderRadius: 10,
    padding: 4,
    margin: 5,
  },
  existingSupermarketRoutes: {
    flex: 9,
    width: "80%",
    backgroundColor: "#03a2f3",
    borderRadius: 10,
    padding: 4,
    margin: 5,
  },
});
