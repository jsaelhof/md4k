import { Source } from "md4k-constants";
import { shouldUpdateSource } from "./should-update-source.js";

describe("should-update-source", () => {
  it("should update the source to None when the current source is a streaming source and no available sources exist", () => {
    expect(shouldUpdateSource(Source.NETFLIX, [])).toBe(Source.NONE);
  });

  it("should not update the source when the current source is a non-streaming source and no avaialble sources exist", () => {
    expect(shouldUpdateSource(Source.DVD, [])).toBeNull();
    expect(shouldUpdateSource(Source.PLEX, [])).toBeNull();
  });

  it("should not update the source when the current source is none and no avaialble sources exist", () => {
    expect(shouldUpdateSource(Source.NONE, [])).toBeNull();
  });

  it("should udpate the source when the current source is none and an available source exists", () => {
    expect(shouldUpdateSource(Source.NONE, [Source.NETFLIX])).toBe(
      Source.NETFLIX
    );
  });

  it("should udpate the source to the first available source when the current source is none and multiple available sources exist", () => {
    expect(
      shouldUpdateSource(Source.NONE, [Source.NETFLIX, Source.DISNEY_PLUS])
    ).toBe(Source.NETFLIX);
  });

  it("should udpate the source to a streaming source when the current source is a non-streaming source", () => {
    expect(shouldUpdateSource(Source.PLEX, [Source.NETFLIX])).toBe(
      Source.NETFLIX
    );

    expect(shouldUpdateSource(Source.DVD, [Source.NETFLIX])).toBe(
      Source.NETFLIX
    );
  });

  it("should not udpate the source to a streaming source when the current source is a non-streaming source and the available source is ad-supported", () => {
    expect(shouldUpdateSource(Source.PLEX, [Source.TUBI_TV])).toBeNull();
  });

  it("should not update the source when the current source is a streaming source and exists within the available sources", () => {
    // Assert that it works when the current source is in the list but not first.
    expect(
      shouldUpdateSource(Source.NETFLIX, [
        Source.DISNEY_PLUS,
        Source.PRIME_VIDEO,
        Source.NETFLIX,
      ])
    ).toBeNull();

    // Assert that it works when the first source is the same as the current source.
    expect(
      shouldUpdateSource(Source.NETFLIX, [
        Source.NETFLIX,
        Source.DISNEY_PLUS,
        Source.PRIME_VIDEO,
      ])
    ).toBeNull();
  });

  it("should update the source when the current streaming source is no longer valid but a different one exists.", () => {
    expect(shouldUpdateSource(Source.NETFLIX, [Source.DISNEY_PLUS])).toBe(
      Source.DISNEY_PLUS
    );
  });

  it("should update the source when the current streaming source is ad supported and a flatrate service is available.", () => {
    expect(
      shouldUpdateSource(Source.TUBI_TV, [Source.DISNEY_PLUS, Source.TUBI_TV])
    ).toBe(Source.DISNEY_PLUS);
  });
});
