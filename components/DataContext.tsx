import React, { createContext, useState, ReactNode } from "react";

interface DataContextProps {
  sharedData: string;
  setSharedData: React.Dispatch<React.SetStateAction<string>>;
}

export const DataContext = createContext<DataContextProps | undefined>(
  undefined
);

export function DataProvider({ children }: { children: ReactNode }) {
  const [sharedData, setSharedData] = useState<string>(
    "Shared data across tabs"
  );

  return (
    <DataContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </DataContext.Provider>
  );
}
