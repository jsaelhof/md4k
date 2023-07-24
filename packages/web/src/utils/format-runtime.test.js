import { formatRuntime } from "./format-runtime";

describe("formatRuntime", () => {
  it("should format a value over an hour as Xh Ym format", () => {
    expect(formatRuntime(7260)).toBe("2h 01m");
  });

  it("should format a value under an hour as Ym format", () => {
    expect(formatRuntime(3500)).toBe("58m");
  });

  it("should format a value under an hour as h:mm format when editing is true", () => {
    expect(formatRuntime(7260, true)).toBe("2:01");
  });
});
