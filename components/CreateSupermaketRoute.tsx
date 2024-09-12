import { View, TextInput, FlatList, StyleSheet } from "react-native";
import { Category } from "./Category";
import ItemButton from "./ItemButton";
import SupermarketRouteItemButton from "./SupermarketRouteItemButton";
import { Fragment } from "react";

interface CreateSupermarketRouteProps {
  setSupermarketName: any;
  tempSupermarketRoute: Category[];
  setTempSupermarketRoute: any;
}

export default function CreateSupermarketRoute({
  setSupermarketName,
  tempSupermarketRoute,
  setTempSupermarketRoute,
}: CreateSupermarketRouteProps) {
  return (
    <Fragment>
      <View style={styles.createSupermarketRouteTop}>
        <View style={styles.createSupermarketRouteNameInput}>
          <TextInput
            style={styles.addItemInput}
            onChangeText={(e) => setSupermarketName(e)}
            placeholder="Eg: Lidl"
            placeholderTextColor={"#e2e4e8"}
            selectionColor={"#e2e4e8"}
            autoCorrect={false}
          />
        </View>
      </View>

      <View style={styles.createSupermarketRouteBottom}>
        <FlatList
          data={Object.values(Category)}
          renderItem={({ item }) => (
            <SupermarketRouteItemButton
              category={item}
              tempSupermarketRoute={tempSupermarketRoute}
              setTempSupermarketRoute={setTempSupermarketRoute}
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
  createSupermarketRouteName: {
    flex: 1,
    backgroundColor: "#03a2f3",
    borderRadius: 10,
    padding: 4,
  },
  createSupermarketRouteNameInput: {
    flex: 2,
    backgroundColor: "#03a2f3",
    borderRadius: 10,
    padding: 3,
  },
  addItemInput: {
    flex: 3,
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
    width: "90%",
    margin: 5,
    paddingLeft: 5,
    backgroundColor: "#2369bd",
    borderRadius: 10,
  },
  createSupermarketRouteBottom: {
    flex: 14,
    backgroundColor: "#03a2f3",
  },
});
