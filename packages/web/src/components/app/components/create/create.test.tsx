import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../test-utils/render-with-providers";
import { Create } from "./create";
import { vi } from "vitest";

const { useAddList } = vi.hoisted(() => ({
  useAddList: vi.fn(),
}));

vi.mock("../../../../graphql/mutations", (actual) => {
  return {
    ...actual,
    useAddList,
  };
});

describe("create", () => {
  it("should render the create list state", () => {
    useAddList.mockReturnValueOnce([vi.fn(), {}]);

    renderWithProviders(<Create />);

    expect(screen.getByText(/New List Name/)).toBeInTheDocument();
    expect(screen.getByText(/Create List/)).toBeInTheDocument();
  });

  it("should render the error state", () => {
    useAddList.mockReturnValueOnce([
      vi.fn(),
      { error: new Error("Test Error") },
    ]);

    renderWithProviders(<Create />);

    expect(screen.getByText(/Sorry/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Try Again" })
    ).toBeInTheDocument();
  });

  it("should render the loading state", () => {
    useAddList.mockReturnValueOnce([vi.fn(), { loading: true }]);
    renderWithProviders(<Create />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
