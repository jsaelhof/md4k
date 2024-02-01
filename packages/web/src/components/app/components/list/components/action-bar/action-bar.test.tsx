import { screen } from "@testing-library/react";
import { vi } from "vitest";
import { renderWithProviders } from "../../../../../../test-utils/render-with-providers";
import ActionBar, { ActionBarProps } from "./action-bar";

const { MOCK_USE_MEDIA_QUERY } = vi.hoisted(() => ({
  MOCK_USE_MEDIA_QUERY: vi.fn().mockReturnValue(true),
}));

vi.mock("@mui/material", async () => {
  const actual: any = await vi.importActual("@mui/material");
  return { ...actual, useMediaQuery: MOCK_USE_MEDIA_QUERY };
});

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual: any = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => navigateMock };
});

interface LocalTestContext {
  props: ActionBarProps;
}

describe("action-bar", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      disabled: false,
      onPick: vi.fn(),
    };
  });

  it<LocalTestContext>("should not render the bar when disabled", ({
    props,
  }) => {
    renderWithProviders(<ActionBar {...props} disabled={true} />);

    expect(screen.queryByText("Added")).not.toBeInTheDocument();
  });

  it<LocalTestContext>("should not render the bar when enabled", ({
    props,
  }) => {
    renderWithProviders(<ActionBar {...props} />);

    expect(screen.getByText("Added")).toBeInTheDocument();
    expect(screen.getByLabelText("Add Movie")).toBeInTheDocument();
    expect(screen.getByLabelText("Pick A Movie")).toBeInTheDocument();
  });

  it<LocalTestContext>("should render the Add Movie button with a label when space exists", ({
    props,
  }) => {
    renderWithProviders(<ActionBar {...props} />);

    expect(screen.getByLabelText("Add Movie")).toBeInTheDocument();
    expect(screen.getByText("Add Movie")).toBeInTheDocument();
  });

  it<LocalTestContext>("should render the Add Movie button without a label when space is limited", ({
    props,
  }) => {
    MOCK_USE_MEDIA_QUERY.mockReturnValue(false);

    renderWithProviders(<ActionBar {...props} />);

    expect(screen.getByLabelText("Add Movie")).toBeInTheDocument();
    expect(screen.queryByText("Add Movie")).not.toBeInTheDocument();
  });

  it<LocalTestContext>("should call onAdd when Add Movie is pressed", async ({
    props,
    user,
  }) => {
    renderWithProviders(<ActionBar {...props} />);

    await user.click(screen.getByLabelText("Add Movie"));
    expect(navigateMock).toHaveBeenCalledWith("/add");
  });

  it<LocalTestContext>("should call onPick when Pick A Movie is pressed", async ({
    props,
    user,
  }) => {
    renderWithProviders(<ActionBar {...props} />);

    await user.click(screen.getByRole("button", { name: "Pick A Movie" }));
    expect(props.onPick).toBeCalled();
  });
});
