import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-20 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center transition-colors duration-300"
    >
      {/* Toggle deslizante */}
      <div
        className={`w-10 h-10 bg-white dark:bg-gray-950 rounded-full transform transition-transform duration-300 ${
          darkMode ? "translate-x-10" : ""
        }`}
      />

      {/* Icono de Sol (visible en modo oscuro) */}
      <Sun
        size={20}
        className={`absolute left-2 transition-opacity duration-300 text-yellow-400 ${
          darkMode ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Icono de Luna (visible en modo claro) */}
      <Moon
        size={20}
        className={`absolute right-2 transition-opacity duration-300 text-white ${
          darkMode ? "opacity-0" : "opacity-100"
        }`}
      />
    </button>
  );
}
