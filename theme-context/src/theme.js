import React, { createContext } from "react";
import { useContext } from "react";

export const ThemeContext = createContext({
    theme: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}
