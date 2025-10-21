import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../page";

vi.mock("next/link", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  useRouter: () => ({ push: vi.fn() })
}));

vi.mock("@/lib/media", async () => {
  const actual = await vi.importActual<typeof import("@/lib/media")>("@/lib/media");
  return {
    ...actual,
    listPhotos: () => actual.listPhotos(),
    listSeries: () => actual.listSeries(),
    listTags: () => actual.listTags()
  };
});

describe("HomePage", () => {
  it("renders hero and work sections", () => {
    render(<HomePage />);
    expect(screen.getByText(/Urban neon collides/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Work" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Interaction Highlights" })).toBeInTheDocument();
  });
});
