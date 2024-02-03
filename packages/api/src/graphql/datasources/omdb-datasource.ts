import { RESTDataSource, type RequestOptions } from "apollo-datasource-rest";
import {
  type OMDBGetMovieResponse,
  type OMDBSearchResponse,
} from "../types/omdb.types.js";
import { type Maybe } from "graphql/jsutils/Maybe.js";

export class OMDBDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://www.omdbapi.com/";
  }

  willSendRequest(request: RequestOptions) {
    request.params.set("apikey", process.env.OMDB_API_KEY ?? "");
  }

  async getMovie(imdbID: string) {
    const data = await this.get<OMDBGetMovieResponse>("", {
      i: imdbID,
      plot: "full",
    });
    return data;
  }

  async searchByTitle(title: string, year: Maybe<string>, page: Maybe<number>) {
    const data = await this.get<OMDBSearchResponse>("", {
      s: title,
      ...(year && { y: year }),
      page: page || 1,
      type: "movie",
    });

    return data;
  }
}
