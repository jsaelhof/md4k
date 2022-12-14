import axios from "axios";
import lodash from "lodash";
import { convertOmdbRatings } from "../../../utils/convert-omdb-ratings.js";
import { genreLabels } from "md4k-constants";
import { api } from "md4k-constants";
import { toFiveStarRating } from "../../../utils/to-five-star-rating.js";

const { findKey } = lodash;

export const omdbMovie = async (parent, { imdbID }) => {
  const {
    data: {
      Response,
      Title,
      Year,
      Runtime,
      Genre,
      Ratings,
      Poster,
      Rated,
      Actors,
    },
  } = await axios.get(
    `${api.OMDB}?i=${imdbID}&apikey=${process.env.OMDB_API_KEY}&plot=full`
  );

  if (Response === "True") {
    // Runtime includes " min" like "113 min".
    // ParseInt strips out the text portion.
    const runtime =
      Runtime && Runtime !== "N/A" ? parseInt(Runtime).toString() : null;

    // Genre is a delimited string of genres.
    // Search my list and see if a match is found.
    // If so we'll set that as the genre, otherwise ignore.
    const genre = findKey(genreLabels, (genre) =>
      Genre.split(", ").includes(genre)
    );

    const ratings = convertOmdbRatings(Ratings);

    return {
      imdbID,
      title: Title,
      year: Year,
      rated: Rated,
      actors: Actors.split(", "),
      runtime,
      ...(genre && { genre: parseInt(genre) }),
      ratings: {
        id: imdbID,
        ...ratings,
      },
      fiveStarRating: toFiveStarRating(ratings),
      poster: Poster && Poster !== "N/A" ? Poster : null,
    };
  } else {
    return null;
  }
};
