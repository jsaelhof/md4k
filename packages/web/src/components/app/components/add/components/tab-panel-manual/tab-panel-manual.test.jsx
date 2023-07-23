import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import TabPanelManual from "./tab-panel-manual";

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => navigateMock };
});

describe("tab-panel-manual", () => {
  beforeEach((context) => {
    context.props = {
      tabId: 0,
      hidden: false,
      onAddMovie: vi.fn(),
      initialState: {
        title: "Test",
      },
    };
  });

  it("should render the form", ({ props }) => {
    render(<TabPanelManual {...props} />);
    expect(screen.getByLabelText("Title")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Movie" })
    ).toBeInTheDocument();
  });

  it("should call onAddMovie", async ({ props, user }) => {
    render(<TabPanelManual {...props} />);
    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).toHaveBeenCalled();
  });
});
