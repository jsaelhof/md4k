import { fireEvent, render, screen } from "@testing-library/react";
import NavButton from "./nav-button";
import { vi } from "vitest";

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => navigateMock };
});

describe("nav-button", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should navigate to the provided href", () => {
    render(<NavButton href="/test">Test Button</NavButton>);
    fireEvent.click(screen.getByRole("button", { name: "Test Button" }));
    expect(navigateMock).toBeCalledWith("/test");
  });

  it("should call the provided onClick", () => {
    const onClick = vi.fn();
    render(<NavButton onClick={onClick}>Test Button</NavButton>);
    fireEvent.click(screen.getByRole("button", { name: "Test Button" }));
    expect(onClick).toHaveBeenCalled();
  });

  it("should prefer onClick over the href if both are provided", () => {
    const onClick = vi.fn();
    render(
      <NavButton herf="/test" onClick={onClick}>
        Test Button
      </NavButton>
    );
    fireEvent.click(screen.getByRole("button", { name: "Test Button" }));
    expect(onClick).toHaveBeenCalled();
    expect(navigateMock).not.toHaveBeenCalled();
  });

  it("should render the provided children", () => {
    render(
      <NavButton herf="/test">
        <div>Content</div>
      </NavButton>
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should pass through props to the button", () => {
    render(
      <NavButton herf="/test" aria-label="testButton">
        Test Button
      </NavButton>
    );
    expect(screen.getByLabelText("testButton")).toBeInTheDocument();
  });
});
