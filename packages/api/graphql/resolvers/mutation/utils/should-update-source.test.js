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

  it("should not udpate the source to a streaming source when the current source is a non-streaming source and the available source is ad-supported", () => {
    expect(shouldUpdateSource(sources.PLEX, [sources.TUBI_TV])).toBeNull();
  });

  it("should not update the source when the current source is a streaming source and exists within the available sources", () => {
    // Assert that it works when the current source is in the list but not first.
    expect(
      shouldUpdateSource(sources.NETFLIX, [
        sources.DISNEY_PLUS,
        sources.PRIME_VIDEO,
        sources.NETFLIX,
      ])
    ).toBeNull();

    // Assert that it works when the first source is the same as the current source.
    expect(
      shouldUpdateSource(sources.NETFLIX, [
        sources.NETFLIX,
        sources.DISNEY_PLUS,
        sources.PRIME_VIDEO,
      ])
    ).toBeNull();
  });

  it("should update the source when the current streaming source is no longer valid but a different one exists.", () => {
    expect(shouldUpdateSource(sources.NETFLIX, [sources.DISNEY_PLUS])).toBe(
      sources.DISNEY_PLUS
    );
  });

  it("should update the source when the current streaming source is ad supported and a flatrate service is available.", () => {
    expect(
      shouldUpdateSource(sources.TUBI_TV, [
        sources.DISNEY_PLUS,
        sources.TUBI_TV,
      ])
    ).toBe(sources.DISNEY_PLUS);
  });
});
