import { vi } from "vitest";

export const mockInteresctionObserver = () => {
  global.IntersectionObserver = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
  }));
};
