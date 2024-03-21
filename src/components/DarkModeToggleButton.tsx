"use client";

import { useState } from "react";

export default function DarkModeToggleButton() {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode((prev) => !prev);
  };
  return (
    <button className="text-gray-600 dark:text-gray-400" onClick={handleClick}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
