import { render, screen } from "@testing-library/react";
import Logo from "./logo";
import { vi } from "vitest";

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => navigateMock };
});

describe("logo", () => {
  it("should navigate to the root on click", async ({ user }) => {
    render(<Logo />);
    await user.click(screen.getByLabelText("Movie Decider 4000"));
    expect(navigateMock).toBeCalledWith("/");
  });
});
