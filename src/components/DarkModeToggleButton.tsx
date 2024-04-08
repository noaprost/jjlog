"use client";

import { useState } from "react";

export default function DarkModeToggleButton() {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode((prev) => !prev);
  };
  return (
    <button
      className="text-neutral-700 dark:text-neutral-400 ml-3"
      onClick={handleClick}
    >
      {darkMode ? "LightMode" : "DarkMode"}
    </button>
  );
}
