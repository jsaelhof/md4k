import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../utils/render-with-providers";
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
  beforeEach((context) => {
    context.addListReturn = {
      addList: vi.fn(),
      loading: false,
      error: false,
      reset: vi.fn(),
    };
  });

  it("should render the create list state", ({ addListReturn }) => {
    useAddList.mockReturnValueOnce(addListReturn);

    renderWithProviders(<Create />);

    expect(screen.getByText(/New List Name/)).toBeInTheDocument();
    expect(screen.getByText(/Create List/)).toBeInTheDocument();
  });

  it("should render the error state", ({ addListReturn }) => {
    useAddList.mockReturnValueOnce({ ...addListReturn, error: true });

    renderWithProviders(<Create />);

    expect(screen.getByText(/Sorry/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Try Again" })
    ).toBeInTheDocument();
  });

  it("should render the loading state", ({ addListReturn }) => {
    useAddList.mockReturnValueOnce({ ...addListReturn, loading: true });
    renderWithProviders(<Create />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
