import { screen } from "@testing-library/dom";
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

  it("should render the create list state", (context) => {
    useAddList.mockReturnValueOnce(context.addListReturn);

    renderWithProviders(<Create />);

    expect(screen.getByText(/New List Name/)).toBeInTheDocument();
    expect(screen.getByText(/Create List/)).toBeInTheDocument();
  });

  it("should render the error state", (context) => {
    useAddList.mockReturnValueOnce({ ...context.addListReturn, error: true });

    renderWithProviders(<Create />);

    expect(screen.getByText(/Sorry/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Try Again" })
    ).toBeInTheDocument();
  });

  it("should render the loading state", (context) => {
    useAddList.mockReturnValueOnce({ ...context.addListReturn, loading: true });
    renderWithProviders(<Create />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
