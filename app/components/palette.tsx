"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useMemo, useState } from "react";
import { NavigationTab } from "@/data/navigation";
import { Search } from "lucide-react";

export function CommandPalette({
  open,
  onClose,
  onNavigate,
  tabs
}: {
  open: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
  tabs: NavigationTab[];
}) {
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    if (!query) return tabs;
    return tabs.filter((tab) => tab.name.toLowerCase().includes(query.toLowerCase()));
  }, [query, tabs]);

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery("")}>
      <Dialog as="div" className="relative z-[999]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 command-palette-backdrop" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto p-6">
          <div className="flex min-h-full items-start justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl">
                <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
                  <Search className="h-4 w-4 text-white/60" />
                  <input
                    autoFocus
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search sections or jump to a page"
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                  />
                  <kbd className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wide text-white/40">
                    Esc
                  </kbd>
                </div>
                <ul className="max-h-80 space-y-1 overflow-y-auto px-4 py-3">
                  {matches.length === 0 ? (
                    <li className="px-3 py-6 text-center text-sm text-white/50">No matches. Try “Work” or “Contact”.</li>
                  ) : (
                    matches.map((tab) => (
                      <li key={tab.href}>
                        <button
                          type="button"
                          onClick={() => onNavigate(tab.href)}
                          className="flex w-full flex-col rounded-2xl border border-transparent px-4 py-3 text-left transition hover:border-white/20 hover:bg-white/5"
                        >
                          <span className="text-sm font-semibold text-white">{tab.name}</span>
                          <span className="text-xs text-white/50">{tab.description}</span>
                        </button>
                      </li>
                    ))
                  )}
                </ul>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
