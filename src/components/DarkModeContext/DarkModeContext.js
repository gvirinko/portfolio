import React from "react";

export const DarkModeContext = React.createContext({ isDarkModeOn: false });

export const DarkModeContextProvider = ({ children }) => {
  const [isDarkModeOn, setIsDarkModeOn] = React.useState(false);
  console.log("mooooo");

  const toggleDarkMode = () => {
    setIsDarkModeOn(!isDarkModeOn);
    console.log("mooooo");
  };
  return (
    <DarkModeContext.Provider value={{ isDarkModeOn, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
