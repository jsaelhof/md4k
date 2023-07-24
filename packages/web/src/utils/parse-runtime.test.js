import { parseRuntime } from "./parse-runtime";

describe("parseRuntime", () => {
  it("should parse as null when input is undefined", () => {
    expect(parseRuntime()).toBeNull();
  });

  it("should parse as null when input is empty string", () => {
    expect(parseRuntime("")).toBeNull();
  });

  it("should parse correctly when hh:mm format", () => {
    expect(parseRuntime("1:35")).toBe(5700);
  });

  it("should parse correctly when mm format", () => {
    expect(parseRuntime("95")).toBe(5700);
  });

  it("should parse correctly when the input is a number", () => {
    expect(parseRuntime(95)).toBe(5700);
  });
});
