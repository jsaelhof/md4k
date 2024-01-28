import { renderHook } from "@testing-library/react";
import { SortDirection } from "../constants/sorts";
import { vi } from "vitest";
import { useSortDirection } from "./use-sort-direction";

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

describe("useSortDirection", () => {
  it("should get the default value", () => {
    const { result } = renderHook(() => useSortDirection());
    expect(result.current).toBe(SortDirection.ASC);
  });

  it("should get the value from params", () => {
    MOCK_USE_PARAMS.mockReturnValue({ direction: "desc" });
    const { result } = renderHook(() => useSortDirection());
    expect(result.current).toBe(SortDirection.DESC);
  });
});
