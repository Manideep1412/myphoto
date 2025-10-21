"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunMedium, MoonStar, Palette } from "lucide-react";

const THEMES = [
  { id: "neon", label: "Neon", icon: <SunMedium className="h-4 w-4" /> },
  { id: "brutalist", label: "Brutalist", icon: <Palette className="h-4 w-4" /> },
  { id: "filmic", label: "Filmic", icon: <MoonStar className="h-4 w-4" /> }
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!theme) return;
    document.body.classList.remove("neon", "brutalist", "filmic");
    document.body.classList.add(theme);
  }, [theme]);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs backdrop-blur">
      {THEMES.map((option) => (
        <button
          key={option.id}
          type="button"
          aria-pressed={theme === option.id}
          onClick={() => setTheme(option.id as ThemeId)}
          className={`flex items-center gap-1 rounded-full px-2 py-1 transition ${
            theme === option.id ? "bg-white/20 text-white" : "text-white/60 hover:text-white"
          }`}
        >
          {option.icon}
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
}
