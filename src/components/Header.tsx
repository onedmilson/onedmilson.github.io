import { Moon, Sun } from "lucide-react";
import { US, BR } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";

type Theme = "light" | "dark";

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const { i18n } = useTranslation();

  return (
    <header className="w-full flex justify-end max-w-6xl mx-auto py-4 gap-4">
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#E7E7E7] dark:bg-[#333333] hover:bg-[#D4D4D4] dark:hover:bg-[#3A3A3A] transition-colors cursor-pointer font-medium"
      >
        {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
      </button>

      <div className="flex gap-2">
        <button
          onClick={() => i18n.changeLanguage("en")}
          className={`p-1 rounded transition-transform hover:scale-110 ${i18n.language === "en" ? "ring-2 ring-[#007ACC] dark:ring-[#0E639C]" : ""}`}
        >
          <US title="English" className="w-6 h-4 rounded-sm shadow-sm" />
        </button>
        <button
          onClick={() => i18n.changeLanguage("pt")}
          className={`p-1 rounded transition-transform hover:scale-110 ${i18n.language === "pt" ? "ring-2 ring-[#007ACC] dark:ring-[#0E639C]" : ""}`}
        >
          <BR title="Português" className="w-6 h-4 rounded-sm shadow-sm" />
        </button>
      </div>
    </header>
  );
}
