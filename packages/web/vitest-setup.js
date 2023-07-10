import "@testing-library/jest-dom";
import { beforeAll, beforeEach, vi } from "vitest";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
  // Define a mock for Rooks useInViewRef hook.
  // Currently this is simply returning a null ref and always returns true for intersecting.
  vi.mock("rooks/dist/esm/hooks/useInViewRef", () => ({
    useInViewRef: vi.fn().mockReturnValue([null, true]),
  }));
});

beforeEach((context) => {
  context.user = userEvent.setup();

  // This is a separate user object configured without pointer event checks enabled
  // for use with tests that have trouble due to elements iwth pointer-events: none.
  context.userNoPointerCheck = userEvent.setup({ pointerEventsCheck: 0 });
});
