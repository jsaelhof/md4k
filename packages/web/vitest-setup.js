import "@testing-library/jest-dom";
import { beforeAll, vi } from "vitest";

beforeAll(() => {
  // Define a mock for intersection observer.
  // Currently this is simply stubbing mock functions and is enough for my needs.
  global.IntersectionObserver = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
  }));
});
