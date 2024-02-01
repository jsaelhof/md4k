import { Source } from "md4k-constants";
import { toSubscribedSources } from "./to-subscribed-sources.js";

describe("toSubscribedSources", () => {
  it("should return a list of sources", () => {
    expect(
      toSubscribedSources({
        results: {
          CA: {
            flatrate: [
              { provider_name: "Netflix" },
              { provider_name: "Disney Plus" },
            ],
          },
        },
      })
    ).toEqual([Source.NETFLIX, Source.DISNEY_PLUS]);
  });

  it("should filter out sources that aren't subscribed", () => {
    expect(
      toSubscribedSources({
        results: {
          CA: {
            flatrate: [
              { provider_name: "Netflix" },
              { provider_name: "SOME OTHER SERVICE" },
              { provider_name: "Disney Plus" },
              { provider_name: "ANOTHER SERVICE" },
            ],
          },
        },
      })
    ).toEqual([Source.NETFLIX, Source.DISNEY_PLUS]);
  });

  it("should handle missing flatrate", () => {
    expect(
      toSubscribedSources({
        results: {
          CA: {},
        },
      })
    ).toEqual([]);
  });

  it("should handle missing CA", () => {
    expect(
      toSubscribedSources({
        results: {},
      })
    ).toEqual([]);
  });

  it("should handle missing results", () => {
    expect(toSubscribedSources({})).toEqual([]);
  });

  it("should handle missing provider data", () => {
    expect(toSubscribedSources(undefined)).toEqual([]);
  });
});
