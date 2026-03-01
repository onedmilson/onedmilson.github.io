import { useLayoutEffect, useState } from "react";
import "./i18n";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

type Theme = "light" | "dark";

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored =
      typeof window !== "undefined"
        ? (localStorage.getItem("theme") as Theme | null)
        : null;
    return stored ?? "dark";
  });

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] dark:bg-[#1E1E1E] text-[#000000] dark:text-[#D4D4D4] transition-colors px-6 md:px-0">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero /> 
      <Footer />
    </div>
  );
}

