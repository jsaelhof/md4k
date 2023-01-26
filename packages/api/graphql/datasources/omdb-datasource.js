import { RESTDataSource } from "apollo-datasource-rest";

export class OMDBDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://www.omdbapi.com/";
  }

  willSendRequest(request) {
    request.params.set("apikey", process.env.OMDB_API_KEY);
  }

  async getMovie(imdbID) {
    const data = await this.get("", {
      i: imdbID,
      plot: "full",
    });
    return data;
  }

  async searchByTitle(title) {
    const data = await this.get("", {
      s: title,
      type: "movie",
    });
    return data;
  }
}
