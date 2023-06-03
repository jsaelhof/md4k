import "@testing-library/jest-dom";
import { beforeAll, beforeEach, vi } from "vitest";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
  // Define a mock for intersection observer.
  // Currently this is simply stubbing mock functions and is enough for my needs.
  global.IntersectionObserver = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
  }));
});

beforeEach((context) => {
  context.user = userEvent.setup();
});
