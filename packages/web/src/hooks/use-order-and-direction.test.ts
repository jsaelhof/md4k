import { renderHook } from "@testing-library/react";
import { useOrderAndDirection } from "./use-order-and-direction";
import { sort, sortDirection } from "../constants/sorts";
import { vi } from "vitest";

const { MOCK_USE_PARAMS } = vi.hoisted(() => ({
  MOCK_USE_PARAMS: vi.fn().mockReturnValue({}),
}));

vi.mock("react-router-dom", async (original) => {
  const actual: any = await original();

  return {
    ...actual,
    useParams: MOCK_USE_PARAMS,
  };
});

describe("useOrderAndDirection", () => {
  it("should get the default values", () => {
    const { result } = renderHook(() => useOrderAndDirection());

    expect(result.current.order).toBe(sort.ADDED);
    expect(result.current.direction).toBe(sortDirection.ASC);
  });

  it("should get the values fron the params", () => {
    MOCK_USE_PARAMS.mockReturnValue({
      "*": "runtime/desc",
    });
    const { result } = renderHook(() => useOrderAndDirection());

    expect(result.current.order).toBe(sort.RUNTIME);
    expect(result.current.direction).toBe(sortDirection.DESC);
  });
});
