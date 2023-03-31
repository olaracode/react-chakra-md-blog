import { createContext, useState, useEffect } from "react";

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const handleTheme = () => {
    localStorage.setItem("theme", !theme);
    setTheme(!theme);
  };
  const store = { theme };
  const actions = { handleTheme };

  const context = { store, actions };
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme === "true");
    }
  }, []);
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppProvider;
