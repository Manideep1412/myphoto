"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="neon" enableSystem={false} themes={["neon", "brutalist", "filmic"]}>
      {children}
    </ThemeProvider>
  );
}
