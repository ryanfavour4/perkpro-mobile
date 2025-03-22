import { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";

// Define theme colors
const lightColors = {
    background: "#ffffff",
    "light-100": "#ffffff",
    "dark-50": "#707070",
    "dark-100": "#1A1A1A",
    text: "#000000",
    primary: "#0415FE",
    "primary-100": "#0415FE",
    "primary-200": "#010B98",
    secondary: "#FFC107",
    "secondary-100": "#FFC107",
    error: "#D92D20",
    success: "#054F31",
};

const darkColors = {
    background: "#ffffff",
    "light-100": "#ffffff",
    "dark-50": "#707070",
    "dark-100": "#1A1A1A",
    text: "#000000",
    primary: "#0415FE",
    "primary-100": "#0415FE",
    "primary-200": "#010B98",
    secondary: "#FFC107",
    "secondary-100": "#FFC107",
    error: "#D92D20",
    success: "#054F31",
};

// Define the theme context type
interface ThemeContextType {
    isDark: boolean;
    colors: typeof lightColors;
    toggleTheme: () => void;
}

// Create context with default values
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const systemScheme = useColorScheme(); // Get system theme
    const [isDark, setIsDark] = useState(systemScheme === "dark");

    useEffect(() => {
        setIsDark(systemScheme === "dark");
    }, [systemScheme]);

    const toggleTheme = () => setIsDark((prev) => !prev);

    return (
        <ThemeContext.Provider
            value={{
                isDark,
                colors: isDark ? darkColors : lightColors,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

// Custom hook for using theme
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within ThemeProvider");
    return context;
}
