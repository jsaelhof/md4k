import { sources } from "md4k-constants";
import { shouldUpdateSource } from "./should-update-source";

describe("should-update-source", () => {
  it("should update the source to None when the current source is a streaming source and no available sources exist", () => {
    expect(shouldUpdateSource(sources.NETFLIX, [])).toBe(sources.NONE);
  });

  it("should not update the source when the current source is a non-streaming source and no avaialble sources exist", () => {
    expect(shouldUpdateSource(sources.DVD, [])).toBeNull();
    expect(shouldUpdateSource(sources.PLEX, [])).toBeNull();
  });

  it("should not update the source when the current source is none and no avaialble sources exist", () => {
    expect(shouldUpdateSource(sources.NONE, [])).toBeNull();
  });

  it("should udpate the source when the current source is none and an available source exists", () => {
    expect(shouldUpdateSource(sources.NONE, [sources.NETFLIX])).toBe(
      sources.NETFLIX
    );
  });

  it("should udpate the source to the first available source when the current source is none and multiple available sources exist", () => {
    expect(
      shouldUpdateSource(sources.NONE, [sources.NETFLIX, sources.DISNEY_PLUS])
    ).toBe(sources.NETFLIX);
  });

  it("should udpate the source to a streaming source when the current source is a non-streaming source", () => {
    expect(shouldUpdateSource(sources.PLEX, [sources.NETFLIX])).toBe(
      sources.NETFLIX
    );

    expect(shouldUpdateSource(sources.DVD, [sources.NETFLIX])).toBe(
      sources.NETFLIX
    );
  });

  it("should not udpate the source when the current source is a streaming source and exists within the available sources", () => {
    expect(
      shouldUpdateSource(sources.NETFLIX, [
        sources.DISNEY_PLUS,
        sources.PRIME_VIDEO,
        sources.NETFLIX,
      ])
    ).toBeNull();
  });

  it("should update the source when the current streaming source is no longer valid but a different one exists.", () => {
    expect(shouldUpdateSource(sources.NETFLIX, [sources.DISNEY_PLUS])).toBe(
      sources.DISNEY_PLUS
    );
  });
});
