import { createContext, useContext } from "react";
import { CurrentTheme } from "../types/index";

interface ThemeContextType {
  theme: CurrentTheme;
  setCurrentTheme: (theme: CurrentTheme) => void;
}

const ThemeContext = createContext<ThemeContextType>(null!);

function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeContext, useTheme };

// import { createContext, useContext } from "react";
// import { CurrentTheme } from "../types/index";

// interface ThemeContextType {
//   theme: CurrentTheme;
//   setCurrentTheme: (theme: CurrentTheme) => void;
// }

// const ThemeContext = createContext<ThemeContextType>(null!);

// function useTheme() {
//   return useContext(ThemeContext);
// }

// export { ThemeContext, useTheme };
