import { render, waitFor, screen } from "@testing-library/react";
import ScrollArea from "./scroll-area";

const enableScrollScenario = (scrollTop: number, scrollHeight: number) => {
  Object.defineProperty(HTMLElement.prototype, "clientHeight", {
    configurable: true,
    value: 100,
  });

  Object.defineProperty(HTMLElement.prototype, "scrollTop", {
    configurable: true,
    value: scrollTop,
  });

  Object.defineProperty(HTMLElement.prototype, "scrollHeight", {
    configurable: true,
    value: scrollHeight,
  });
};

describe("scroll-area", () => {
  it("should enable the scroll affordance on the top when overflowed above", async () => {
    enableScrollScenario(20, 0);

    render(
      <ScrollArea text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    );

    await waitFor(() => {
      expect(screen.getByTestId("top")).toHaveStyle("opacity: 1");
    });

    await waitFor(() => {
      expect(screen.getByTestId("bottom")).toHaveStyle("opacity: 0");
    });
  });

  it("should enable the scroll affordance on the bottom when overflowed below", async () => {
    enableScrollScenario(0, 200);

    render(
      <ScrollArea text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    );

    await waitFor(() => {
      expect(screen.getByTestId("top")).toHaveStyle("opacity: 0");
    });

    await waitFor(() => {
      expect(screen.getByTestId("bottom")).toHaveStyle("opacity: 1");
    });
  });

  it("should enable the scroll affordance on both the top and bottom when overflowed in both directions", async () => {
    enableScrollScenario(20, 200);

    render(
      <ScrollArea text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    );

    await waitFor(() => {
      expect(screen.getByTestId("top")).toHaveStyle("opacity: 1");
    });

    await waitFor(() => {
      expect(screen.getByTestId("bottom")).toHaveStyle("opacity: 1");
    });
  });
});
