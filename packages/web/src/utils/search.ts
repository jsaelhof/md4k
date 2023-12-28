import { sources } from "md4k-constants";

export const searchIMDB = (imdbId: string): string =>
  `https://www.imdb.com/title/${imdbId}`;

export const searchIMDBTitle = (title: string): string =>
  `https://www.imdb.com/find?q=${encodeURIComponent(title)}`;

export const searchTMDB = (title: string): string =>
  `https://www.themoviedb.org/search?query=${title.replaceAll(" ", "+")}`;

export const searchCommonSense = (title: string): string =>
  `https://www.commonsensemedia.org/movie-reviews/${title
    .replaceAll(" ", "-")
    .replaceAll(":", "")}`;

export const searchTorrent = (title: string): string =>
  `http://1337x.to/search/${title}/1/`;

export const searchStreaming = (title: string, source: number): string =>
  ((
    {
      [sources.NETFLIX]: `http://netflix.com/search?q=%s`, // FIXME: Doesn't like commas in the search...possibly other special chars. Other sites maybe the same?
      [sources.PRIME_VIDEO]: `https://www.primevideo.com/search/ref=atv_nb_sr?phrase=%s&ie=UTF8`,
      [sources.PLEX]: `http://192.168.1.5:32400/web/index.html#!/search?query=%s`,
      [sources.APPLE_TV]: "https://tv.apple.com/ca",
      [sources.DISNEY_PLUS]: "https://disneyplus.com",
      [sources.TUBI_TV]: `https://tubitv.com/search/%s`,
    }[source] ?? ""
  ).replace("%s", encodeURI(title)));
