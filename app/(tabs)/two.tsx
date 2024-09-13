import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { Category } from "@/components/Category";
import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "@/components/DataContext";
import CreateSupermarketRoute from "@/components/CreateSupermaketRoute";
import ExistingSupermarketRoutes from "@/components/ExistingSupermaketRoutes";
import TempSupermarketRoute from "@/components/TempSupermaketRoute";
export default function TabTwoScreen() {
  const context = useContext(DataContext);
  if (!context) throw new Error("DataContext is undefined");

  const {
    currentStore,
    setCurrentStore,
    supermarketRoutes,
    setSupermarketRoutes,
  } = context;

  const [supermarketName, setSupermarketName] = useState("");

  const [tempSupermarketRoute, setTempSupermarketRoute] = useState<Category[]>(
    []
  );

  return (
    <View style={styles.container}>
      <View style={styles.createSupermarketRoute}>
        <CreateSupermarketRoute
          setSupermarketName={setSupermarketName}
          tempSupermarketRoute={tempSupermarketRoute}
          setTempSupermarketRoute={setTempSupermarketRoute}
        />
      </View>
      <View style={styles.existingSupermarketRoutes}>
        <TempSupermarketRoute
          tempSupermarketRoute={tempSupermarketRoute}
          setSupermarketRoutes={setSupermarketRoutes}
          supermarketRoutes={supermarketRoutes}
          supermarketName={supermarketName}
          setCurrentStore={setCurrentStore}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  createSupermarketRoute: {
    width: "80%",
    flex: 1,
    backgroundColor: "#03a2f3",
    borderRadius: 10,
    padding: 4,
    margin: 5,
  },
  tempSupermarketRoute: {
    flex: 1,
    flexDirection: "row",
  },
  existingSupermarketRoutes: {
    flex: 1,
    width: "80%",
    backgroundColor: "#03a2f3",
    borderRadius: 10,
    padding: 4,
    margin: 5,
  },
});
