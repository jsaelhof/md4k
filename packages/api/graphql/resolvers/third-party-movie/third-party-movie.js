import lodash from "lodash";
import { genreLabels } from "md4k-constants";
import { convertOmdbRatings } from "../../../utils/convert-omdb-ratings.js";

const { findKey } = lodash;

export const thirdPartyMovie = async (parent, { imdbID }, { dataSources }) => {
  const {
    Response,
    Title,
    Year,
    Ratings,
    Runtime,
    Genre,
    Poster,
    Rated,
    Actors,
  } = await dataSources.OMDB.getMovie(imdbID);

  if (Response === "True") {
    // Runtime includes " min" like "113 min".
    // ParseInt strips out the text portion.
    const runtime =
      Runtime && Runtime !== "N/A" ? (parseInt(Runtime) * 60).toString() : null;

    // Genre is a delimited string of genres.
    // Search my list and see if a match is found.
    // If so we'll set that as the genre, otherwise ignore.
    const genre = findKey(genreLabels, (genre) =>
      Genre.split(", ").includes(genre)
    );

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
        ...convertOmdbRatings(Ratings),
      },
      poster: Poster && Poster !== "N/A" ? Poster : null,
    };
  } else {
    return null;
  }
};
