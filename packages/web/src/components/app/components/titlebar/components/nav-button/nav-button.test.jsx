import { fireEvent, render } from "@testing-library/react";
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
    const { getByRole } = render(
      <NavButton href="/test">Test Button</NavButton>
    );
    fireEvent.click(getByRole("button", { name: "Test Button" }));
    expect(navigateMock).toBeCalledWith("/test");
  });

  it("should call the provided onClick", () => {
    const onClick = vi.fn();
    const { getByRole } = render(
      <NavButton onClick={onClick}>Test Button</NavButton>
    );
    fireEvent.click(getByRole("button", { name: "Test Button" }));
    expect(onClick).toHaveBeenCalled();
  });

  it("should prefer onClick over the href if both are provided", () => {
    const onClick = vi.fn();
    const { getByRole } = render(
      <NavButton herf="/test" onClick={onClick}>
        Test Button
      </NavButton>
    );
    fireEvent.click(getByRole("button", { name: "Test Button" }));
    expect(onClick).toHaveBeenCalled();
    expect(navigateMock).not.toHaveBeenCalled();
  });

  it("should render the provided children", () => {
    const { getByText } = render(
      <NavButton herf="/test">
        <div>Content</div>
      </NavButton>
    );
    expect(getByText("Content")).toBeInTheDocument();
  });

  it("should pass through props to the button", () => {
    const { getByLabelText } = render(
      <NavButton herf="/test" aria-label="testButton">
        Test Button
      </NavButton>
    );
    expect(getByLabelText("testButton")).toBeInTheDocument();
  });
});
