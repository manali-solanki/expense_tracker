import { createContext, useContext, useState } from "react";

const ThemeProvider = createContext(null);

 export function ThemeContext({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return(
  <ThemeProvider.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeProvider.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeProvider);
}

export default ThemeContext;
