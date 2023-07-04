import { vi } from "vitest";
import { screen } from "@testing-library/react";
import EmptyList from "./empty-list";
import { renderWithProviders } from "../../../../../../../../utils/render-with-providers";

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => navigateMock };
});

describe("empty-list", () => {
  it("should render the edit button", async ({ user }) => {
    renderWithProviders(<EmptyList />);
    const button = screen.getByRole("button", { name: "Add a Movie" });
    expect(button).toBeInTheDocument();
    await user.click(button);
    expect(navigateMock).toHaveBeenCalledWith("/add");
  });
});
