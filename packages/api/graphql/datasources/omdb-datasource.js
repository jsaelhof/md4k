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

  async searchByTitle(title, year, page) {
    const data = await this.get("", {
      s: title,
      ...(year && { y: year }),
      page: page || 1,
      type: "movie",
    });

    return data;
  }
}
