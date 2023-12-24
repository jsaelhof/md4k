import {
  searchIMDB,
  searchIMDBTitle,
  searchTMDB,
  searchCommonSense,
  searchTorrent,
  searchStreaming,
} from "./search";
import { sources } from "md4k-constants";

describe("searchIMDB", () => {
  it("should return the url", () => {
    expect(searchIMDB("tt1234567")).toBe(
      "https://www.imdb.com/title/tt1234567"
    );
  });
});

describe("searchIMDBTitle", () => {
  it("should return the url with uri encoded title", () => {
    expect(searchIMDBTitle("The Dark Knight")).toBe(
      "https://www.imdb.com/find?q=The%20Dark%20Knight"
    );
  });
});

describe("searchTMDB", () => {
  it("should return the url with spaces as +", () => {
    expect(searchTMDB("The Dark Knight")).toBe(
      "https://www.themoviedb.org/search?query=The+Dark+Knight"
    );
  });
});

describe("searchCommonSense", () => {
  it("should return the url with spaces as - and colons omitted", () => {
    expect(searchCommonSense("Batman: The Dark Knight")).toBe(
      "https://www.commonsensemedia.org/movie-reviews/Batman-The-Dark-Knight"
    );
  });
});

describe("searchTorrent", () => {
  it("should return the url", () => {
    expect(searchTorrent("Batman: The Dark Knight")).toBe(
      "http://1337x.to/search/Batman: The Dark Knight/1/"
    );
  });
});

describe("searchStreaming", () => {
  it("should return the Netflix url", () => {
    expect(searchStreaming("Batman: The Dark Knight", sources.NETFLIX)).toBe(
      "http://netflix.com/search?q=Batman:%20The%20Dark%20Knight"
    );
  });

  it("should return the Prime Video url", () => {
    expect(
      searchStreaming("Batman: The Dark Knight", sources.PRIME_VIDEO)
    ).toBe(
      "https://www.primevideo.com/search/ref=atv_nb_sr?phrase=Batman:%20The%20Dark%20Knight&ie=UTF8"
    );
  });

  it("should return the Plex url", () => {
    expect(searchStreaming("Batman: The Dark Knight", sources.PLEX)).toBe(
      "http://192.168.1.5:32400/web/index.html#!/search?query=Batman:%20The%20Dark%20Knight"
    );
  });

  it("should return the Apple TV url without search params (Apple TV doesn't have a search URL format to use)", () => {
    expect(searchStreaming("Batman: The Dark Knight", sources.APPLE_TV)).toBe(
      "https://tv.apple.com/ca"
    );
  });

  it("should return the Disney Plus url without search params (Disney Plus doesn't have a search URL format to use)", () => {
    expect(
      searchStreaming("Batman: The Dark Knight", sources.DISNEY_PLUS)
    ).toBe("https://disneyplus.com");
  });
});
