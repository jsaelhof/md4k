import { toTMDBImageUrl } from "./to-tmdb-image-url";

describe("toTMDBImageUrl", () => {
  it("should add the path with default image size", () => {
    expect(toTMDBImageUrl("/test/1/2/3/image.jpg")).toBe(
      "http://image.tmdb.org/t/p/original/test/1/2/3/image.jpg"
    );
  });

  it("should add the path with a provided image size", () => {
    expect(toTMDBImageUrl("/test/1/2/3/image.jpg", "w300")).toBe(
      "http://image.tmdb.org/t/p/w300/test/1/2/3/image.jpg"
    );
  });

  it("should return null when no path is provided", () => {
    expect(toTMDBImageUrl()).toBeNull();
  });
});
