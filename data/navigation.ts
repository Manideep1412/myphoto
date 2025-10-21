export type NavigationTab = {
  name: string;
  href: string;
  description: string;
};

export const NAV_TABS: NavigationTab[] = [
  { name: "Home", href: "/", description: "Return to the hero showcase" },
  { name: "Work", href: "/work", description: "Explore curated galleries" },
  { name: "Series", href: "/series", description: "Dive into long-form projects" },
  { name: "About", href: "/about", description: "Meet the photographer" },
  { name: "Prints", href: "/prints", description: "Shop limited edition prints" },
  { name: "Contact", href: "/contact", description: "Book a shoot or collaborate" }
];
