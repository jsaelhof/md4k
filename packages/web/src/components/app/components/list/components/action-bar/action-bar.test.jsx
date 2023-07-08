import { screen } from "@testing-library/react";
import { vi } from "vitest";
import { renderWithProviders } from "../../../../../../utils/render-with-providers";
import ActionBar from "./action-bar";

const { MOCK_USE_MEDIA_QUERY } = vi.hoisted(() => ({
  MOCK_USE_MEDIA_QUERY: vi.fn().mockReturnValue(true),
}));

vi.mock("@mui/material", async () => {
  const actual = await vi.importActual("@mui/material");
  return { ...actual, useMediaQuery: MOCK_USE_MEDIA_QUERY };
});

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => navigateMock };
});

describe("action-bar", () => {
  beforeEach((context) => {
    context.onAdd = vi.fn();
    context.onPick = vi.fn();
  });

  it("should not render the bar when disabled", ({ onAdd, onPick }) => {
    renderWithProviders(
      <ActionBar disabled={true} onAdd={onAdd} onPick={onPick} />
    );

    expect(screen.queryByText("Added")).not.toBeInTheDocument();
  });

  it("should not render the bar when enabled", ({ onAdd, onPick }) => {
    renderWithProviders(
      <ActionBar disabled={false} onAdd={onAdd} onPick={onPick} />
    );

    expect(screen.getByText("Added")).toBeInTheDocument();
    expect(screen.getByLabelText("Add Movie")).toBeInTheDocument();
    expect(screen.getByLabelText("Pick A Movie")).toBeInTheDocument();
  });

  it("should render the Add Movie button with a label when space exists", ({
    onAdd,
    onPick,
  }) => {
    renderWithProviders(
      <ActionBar disabled={false} onAdd={onAdd} onPick={onPick} />
    );

    expect(screen.getByLabelText("Add Movie")).toBeInTheDocument();
    expect(screen.getByText("Add Movie")).toBeInTheDocument();
  });

  it("should render the Add Movie button without a label when space is limited", ({
    onAdd,
    onPick,
  }) => {
    MOCK_USE_MEDIA_QUERY.mockReturnValue(false);

    renderWithProviders(
      <ActionBar disabled={false} onAdd={onAdd} onPick={onPick} />
    );

    expect(screen.getByLabelText("Add Movie")).toBeInTheDocument();
    expect(screen.queryByText("Add Movie")).not.toBeInTheDocument();
  });

  it("should call onAdd when Add Movie is pressed", async ({
    onAdd,
    onPick,
    user,
  }) => {
    renderWithProviders(
      <ActionBar disabled={false} onAdd={onAdd} onPick={onPick} />
    );

    await user.click(screen.getByLabelText("Add Movie"));
    expect(navigateMock).toHaveBeenCalledWith("/add");
  });

  it("should call onPick when Pick A Movie is pressed", async ({
    onAdd,
    onPick,
    user,
  }) => {
    renderWithProviders(
      <ActionBar disabled={false} onAdd={onAdd} onPick={onPick} />
    );

    await user.click(screen.getByRole("button", { name: "Pick A Movie" }));
    expect(onPick).toBeCalled();
  });
});
