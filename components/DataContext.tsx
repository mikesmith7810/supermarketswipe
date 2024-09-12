import React, { createContext, useState, ReactNode } from "react";
import { SupermarketRoute } from "./SupermarketRoute";

interface DataContextProps {
  currentStore: string;
  setCurrentStore: React.Dispatch<React.SetStateAction<string>>;
  supermarketRoutes: SupermarketRoute[];
  setSupermarketRoutes: React.Dispatch<
    React.SetStateAction<SupermarketRoute[]>
  >;
}

export const DataContext = createContext<DataContextProps | undefined>(
  undefined
);

export function DataProvider({ children }: { children: ReactNode }) {
  const [currentStore, setCurrentStore] = useState<string>("Unknown");

  const [supermarketRoutes, setSupermarketRoutes] = useState<
    SupermarketRoute[]
  >([]);

  return (
    <DataContext.Provider
      value={{
        currentStore,
        setCurrentStore,
        supermarketRoutes,
        setSupermarketRoutes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
