import { render, screen } from "@testing-library/react";
import NavButton from "./nav-button";
import { vi } from "vitest";
import { Keyboard } from "@mui/icons-material";

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual: any = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => navigateMock };
});

describe("nav-button", () => {
  it("should navigate to the provided href", async ({ user }) => {
    render(<NavButton href="/test">Test Button</NavButton>);
    await user.click(screen.getByRole("button", { name: "Test Button" }));
    expect(navigateMock).toBeCalledWith("/test");
  });

  it("should call the provided onClick", async ({ user }) => {
    const onClick = vi.fn();
    render(<NavButton onClick={onClick}>Test Button</NavButton>);
    await user.click(screen.getByRole("button", { name: "Test Button" }));
    expect(onClick).toHaveBeenCalled();
  });

  it("should prefer onClick over the href if both are provided", async ({
    user,
  }) => {
    const onClick = vi.fn();
    render(
      <NavButton href="/test" onClick={onClick}>
        Test Button
      </NavButton>
    );
    await user.click(screen.getByRole("button", { name: "Test Button" }));
    expect(onClick).toHaveBeenCalled();
    expect(navigateMock).not.toHaveBeenCalled();
  });

  it("should render the provided children", () => {
    render(
      <NavButton href="/test">
        <div>Content</div>
      </NavButton>
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should render the icon", () => {
    render(
      <NavButton href="/test" startIcon={<Keyboard />}>
        <div>Content</div>
      </NavButton>
    );

    expect(screen.getByTestId("KeyboardIcon")).toBeInTheDocument();
  });
});
