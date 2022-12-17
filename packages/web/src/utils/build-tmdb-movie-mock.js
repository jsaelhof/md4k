export const buildTMDBMovieMock = (mockData = {}) => ({
  imdbID: "tt0258463",
  backdrop: "http://image.tmdb.org/t/1.jpg",
  backdrops: [
    "http://image.tmdb.org/t/1.jpg",
    "http://image.tmdb.org/t/2.jpg",
    "http://image.tmdb.org/t/3.jpg",
    "http://image.tmdb.org/t/4.jpg",
  ],
  trailer: {
    site: "YouTube",
    key: "2tqK_3mKQUw",
  },
  plot: "Wounded to the brink of death",
  ...mockData,
});
