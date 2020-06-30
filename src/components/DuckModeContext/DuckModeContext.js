import React from "react";

export const DuckModeContext = React.createContext({ isDuckModeOn: false });

export const DuckModeContextProvider = ({ children }) => {
  const [isDuckModeOn, setIsDuckModeOn] = React.useState(false);
  const toggleDuckMode = () => {
    setIsDuckModeOn(!isDuckModeOn);
  };
  return (
    <DuckModeContext.Provider value={{ isDuckModeOn, toggleDuckMode }}>
      {children}
    </DuckModeContext.Provider>
  );
};
