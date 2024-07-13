import { useEffect, useState } from "react";
import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { ThemeContextProvider } from "./theme.js";

function App() {
    const [theme, setTheme] = useState("light");

    const darkTheme = () => {
        setTheme("dark");
    };

    const lightTheme = () => {
        setTheme("light");
    };

    useEffect(() => {
        document.querySelector("html").classList.remove("light", "dark");
        document.querySelector("html").classList.add(theme);
    }, [theme]);

    return (
        <ThemeContextProvider value={{ theme, darkTheme, lightTheme }}>
            <div className="flex flex-wrap w-1/3 min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>
                    <Card />
                    <div className="w-full max-w-sm mx-auto"></div>
                </div>
            </div>
        </ThemeContextProvider>
    );
}

export default App;
