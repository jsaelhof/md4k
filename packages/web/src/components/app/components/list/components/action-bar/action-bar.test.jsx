import { fireEvent, screen } from "@testing-library/react";
import { vi } from "vitest";
import { renderWithProviders } from "../../../../../../utils/render-with-providers";
import ActionBar from "./action-bar";
import * as mui from "@mui/material";

vi.mock("@mui/material", async () => {
  const actual = await vi.importActual("@mui/material");
  return { ...actual, useMediaQuery: vi.fn().mockReturnValue(true) };
});

describe("action-bar", () => {
  beforeEach((context) => {
    context.onAdd = vi.fn();
    context.onPick = vi.fn();
  });

  it("should not render the bar when disabled", async ({ onAdd, onPick }) => {
    renderWithProviders(
      <ActionBar disabled={true} onAdd={onAdd} onPick={onPick} />
    );

    expect(screen.queryByText("Added")).not.toBeInTheDocument();
  });

  it("should not render the bar when enabled", async ({ onAdd, onPick }) => {
    renderWithProviders(
      <ActionBar disabled={false} onAdd={onAdd} onPick={onPick} />
    );

    expect(screen.getByText("Added")).toBeInTheDocument();
    expect(screen.getByLabelText("Add Movie")).toBeInTheDocument();
    expect(screen.getByLabelText("Pick A Movie")).toBeInTheDocument();
  });

  it("should render the Add Movie button with a label when space exists", async ({
    onAdd,
    onPick,
  }) => {
    renderWithProviders(
      <ActionBar disabled={false} onAdd={onAdd} onPick={onPick} />
    );

    expect(screen.getByLabelText("Add Movie")).toBeInTheDocument();
    expect(screen.getByText("Add Movie")).toBeInTheDocument();
  });

  it("should render the Add Movie button without a label when space is limited", async ({
    onAdd,
    onPick,
  }) => {
    // eslint-disable-next-line no-import-assign
    mui.useMediaQuery = vi.fn().mockReturnValue(false);

    renderWithProviders(
      <ActionBar disabled={false} onAdd={onAdd} onPick={onPick} />
    );

    expect(screen.getByLabelText("Add Movie")).toBeInTheDocument();
    expect(screen.queryByText("Add Movie")).not.toBeInTheDocument();
  });

  it("should call onAdd when Add Movie is pressed", async ({
    onAdd,
    onPick,
  }) => {
    renderWithProviders(
      <ActionBar disabled={false} onAdd={onAdd} onPick={onPick} />
    );

    fireEvent.click(screen.getByLabelText("Add Movie"));
    expect(onAdd).toBeCalled();
  });

  it("should call onPick when Pick A Movie is pressed", async ({
    onAdd,
    onPick,
  }) => {
    renderWithProviders(
      <ActionBar disabled={false} onAdd={onAdd} onPick={onPick} />
    );

    fireEvent.click(screen.getByRole("button", { name: "Pick A Movie" }));
    expect(onPick).toBeCalled();
  });
});
