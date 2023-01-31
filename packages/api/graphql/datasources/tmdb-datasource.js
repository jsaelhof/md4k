import { RESTDataSource } from "apollo-datasource-rest";

export class TMDBDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.themoviedb.org/3";
  }

  willSendRequest(request) {
    request.params.set("api_key", process.env.TMDB_API_KEY);
  }

  async getProvider(imdbID) {
    try {
      const data = await this.get(`movie/${imdbID}/watch/providers`);
      return data;
    } catch (err) {
      return null;
    }
  }

  async find(imdbID) {
    try {
      const { movie_results } = await this.get(`find/${imdbID}`, {
        language: "en-US",
        external_source: "imdb_id",
      });
      return movie_results;
    } catch (err) {
      return [];
    }
  }

  // Technically this is going to overfetch a bit because in theory a query could not ask for
  // videos or images or both. However the full url + query is used to de-dupe the rest fetches
  // so splitting up the movie, the trailer and the backdrops would results in three different queries
  // that all fetch the base data (so overfetching a different way)
  // Since I don't have a use case for not getting all the data, I'm going to fetch it all at once.
  async getMovie(imdbID) {
    try {
      const data = await this.get(`movie/${imdbID}`, {
        append_to_response: "videos,images",
        include_image_language: "en",
      });
      return data;
    } catch (err) {
      return {};
    }
  }
}
