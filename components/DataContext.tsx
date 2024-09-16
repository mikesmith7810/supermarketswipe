import React, { createContext, useState, ReactNode, useEffect } from "react";
import { SupermarketRoute } from "./SupermarketRoute";
import { Category } from "./Category";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Item } from "./Item";

interface DataContextProps {
  currentStore: string;
  setCurrentStore: React.Dispatch<React.SetStateAction<string>>;
  supermarketRoutes: SupermarketRoute[];
  setSupermarketRoutes: React.Dispatch<
    React.SetStateAction<SupermarketRoute[]>
  >;
  categoryOrder: Category[];
  setCategoryOrder: React.Dispatch<React.SetStateAction<Category[]>>;
  availableItems: Item[];
  setAvailableItems: React.Dispatch<React.SetStateAction<Item[]>>;
  shoppingItems: Item[];
  setShoppingItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

export const DataContext = createContext<DataContextProps | undefined>(
  undefined
);

export async function persistData(data: any, key: string) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}

export function DataProvider({ children }: { children: ReactNode }) {
  const [currentStore, setCurrentStore] = useState<string>("Store Not Set");

  const [supermarketRoutes, setSupermarketRoutes] = useState<
    SupermarketRoute[]
  >([]);

  const [categoryOrder, setCategoryOrder] = useState([
    Category.Frozen,
    Category.Bakery,
    Category.FruitVeg,
  ]);

  const [availableItems, setAvailableItems] = useState([
    new Item("Bread", Category.Bakery),
    new Item("Ice Cream", Category.Frozen),
    new Item("Apples", Category.FruitVeg),
  ]);

  const [shoppingItems, setShoppingItems] = useState<Item[]>([]);

  async function loadSupermarketRoutes() {
    try {
      const rawSavedSupermarketRoutes = await AsyncStorage.getItem(
        "supermarketRoutes"
      );

      if (rawSavedSupermarketRoutes != null) {
        setSupermarketRoutes(JSON.parse(rawSavedSupermarketRoutes));
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function loadAvailableItems() {
    try {
      const rawAvailableItems = await AsyncStorage.getItem("availableItems");

      if (rawAvailableItems != null) {
        setAvailableItems(JSON.parse(rawAvailableItems));
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function loadShoppingItems() {
    try {
      const rawShoppingItems = await AsyncStorage.getItem("shoppingItems");

      if (rawShoppingItems != null) {
        setShoppingItems(JSON.parse(rawShoppingItems));
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadSupermarketRoutes();
    loadAvailableItems();
    loadShoppingItems();
    // AsyncStorage.clear();
  }, []);

  return (
    <DataContext.Provider
      value={{
        currentStore,
        setCurrentStore,
        supermarketRoutes,
        setSupermarketRoutes,
        categoryOrder,
        setCategoryOrder,
        availableItems,
        setAvailableItems,
        shoppingItems,
        setShoppingItems,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
