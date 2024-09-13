import React, { createContext, useState, ReactNode } from "react";
import { SupermarketRoute } from "./SupermarketRoute";
import { Category } from "./Category";

interface DataContextProps {
  currentStore: string;
  setCurrentStore: React.Dispatch<React.SetStateAction<string>>;
  supermarketRoutes: SupermarketRoute[];
  setSupermarketRoutes: React.Dispatch<
    React.SetStateAction<SupermarketRoute[]>
  >;
  categoryOrder: Category[];
  setCategoryOrder: React.Dispatch<React.SetStateAction<Category[]>>;
}

export const DataContext = createContext<DataContextProps | undefined>(
  undefined
);

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

  return (
    <DataContext.Provider
      value={{
        currentStore,
        setCurrentStore,
        supermarketRoutes,
        setSupermarketRoutes,
        categoryOrder,
        setCategoryOrder,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
