"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { NAV_TABS, type NavigationTab } from "@/data/navigation";
import { useMagnetic } from "@/lib/animations";
import { CommandPalette } from "./palette";
import { ThemeToggle } from "./theme-toggle";
import { Search, Menu } from "lucide-react";
import classNames from "classnames";

function NavTabLink({ tab, active }: { tab: NavigationTab; active: boolean }) {
  const ref = useMagnetic<HTMLAnchorElement>({ strength: 0.4 });
  return (
    <Link
      href={tab.href}
      prefetch
      ref={ref}
      className={classNames(
        "magnetic-button relative rounded-full px-3 py-2 text-sm transition-colors",
        active ? "text-white" : "text-white/60 hover:text-white"
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {tab.name}
        <span
          className={classNames(
            "absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-magenta to-cyan transition-all",
            active ? "opacity-100" : "opacity-0"
          )}
        />
      </span>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleDown);
    return () => window.removeEventListener("keydown", handleDown);
  }, []);

  const navigate = useCallback(
    (href: string) => {
      setPaletteOpen(false);
      setMobileOpen(false);
      router.push(href);
    },
    [router]
  );

  const tabs = useMemo(() => NAV_TABS, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 pt-4">
      <div className="glass-panel flex items-center justify-between gap-6 rounded-3xl px-6 py-3">
        <Link href="/" className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-white/70">
          <span className="inline-flex h-3 w-3 animate-pulse rounded-full bg-magenta shadow-neon" />
          MyPhoto
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {tabs.map((tab) => {
            const active = pathname === tab.href || (tab.href !== "/" && pathname?.startsWith(tab.href));
            return <NavTabLink key={tab.name} tab={tab} active={active} />;
          })}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPaletteOpen(true)}
            className="magnetic-button hidden items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-white/70 transition hover:text-white md:flex"
            aria-label="Command search"
          >
            <Search className="h-4 w-4" />
            <span className="text-xs uppercase tracking-wide">Cmd + K</span>
          </button>
          <ThemeToggle />
          <button
            type="button"
            className="magnetic-button flex items-center justify-center rounded-full border border-white/10 p-2 text-white/70 transition hover:text-white md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {mobileOpen ? (
        <div className="glass-panel mt-3 flex flex-col gap-2 rounded-3xl px-6 py-4 md:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              type="button"
              onClick={() => navigate(tab.href)}
              className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-left text-sm text-white/80 transition hover:border-white/30 hover:text-white"
            >
              <span className="font-semibold">{tab.name}</span>
              <span className="text-xs text-white/50">{tab.description}</span>
            </button>
          ))}
        </div>
      ) : null}
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onNavigate={navigate}
        tabs={tabs}
      />
    </header>
  );
}
