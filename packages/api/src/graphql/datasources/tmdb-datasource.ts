import { RESTDataSource, type RequestOptions } from "apollo-datasource-rest";
import {
  type TMDBError,
  type TMDBFindResult,
  type TMDBMovieResult,
  type TMDBProviderResults,
} from "../types/tmdb.types.js";

export class TMDBDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.themoviedb.org/3";
  }

  willSendRequest(request: RequestOptions) {
    request.params.set("api_key", process.env.TMDB_API_KEY ?? "");
  }

  async getProvider(imdbID: string): Promise<TMDBProviderResults | null> {
    try {
      const data = await this.get<TMDBProviderResults | TMDBError>(
        `movie/${imdbID}/watch/providers`
      );

      if ("status_message" in data) {
        console.error(data.status_message);
        return null;
      } else {
        return data;
      }
    } catch (err) {
      return null;
    }
  }

  async find(imdbID: string): Promise<TMDBFindResult["movie_results"] | null> {
    try {
      const data = await this.get<TMDBFindResult | TMDBError>(
        `find/${imdbID}`,
        {
          language: "en-US",
          external_source: "imdb_id",
        }
      );

      if ("status_message" in data) {
        console.error(data.status_message);
        return null;
      } else {
        return data.movie_results;
      }
    } catch (err) {
      return [];
    }
  }

  // Technically this is going to overfetch a bit because in theory a query could not ask for
  // videos or images or both. However the full url + query is used to de-dupe the rest fetches
  // so splitting up the movie, the trailer and the backdrops would results in three different queries
  // that all fetch the base data (so overfetching a different way)
  // Since I don't have a use case for not getting all the data, I'm going to fetch it all at once.
  async getMovie(imdbID: string): Promise<Partial<TMDBMovieResult>> {
    try {
      const data = await this.get<TMDBMovieResult | TMDBError>(
        `movie/${imdbID}`,
        {
          append_to_response: "videos,images,credits",
          include_image_language: "en",
        }
      );

      if ("status_message" in data) {
        console.error(data.status_message);
        return {};
      } else {
        return data;
      }
    } catch (err) {
      return {};
    }
  }
}
