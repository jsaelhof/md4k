import axios from "axios";
import { api } from "../../../constants/api.js";

export const searchByTitle = async (parent, { title }) => {
  const { data } = await axios.get(
    `${api.OMDB}?s=${title}&type=movie&apikey=${process.env.OMDB_API_KEY}`
  );

  return data.Response === "True"
    ? data.Search.map(({ Title, Year, imdbID, Poster }) => ({
        title: Title,
        year: Year,
        imdbID,
        poster: Poster && Poster !== "N/A" ? Poster : null,
      }))
    : [];
};
