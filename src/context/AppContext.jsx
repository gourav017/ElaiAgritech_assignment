import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <AppContext.Provider value={{ count, handleCount }}>
      {children}
    </AppContext.Provider>
  );
};
