import lodash from "lodash";
import { convertOmdbRatings } from "../../../utils/convert-omdb-ratings.js";
import { QueryResolvers } from "../../../__generated__/graphql.js";
import { Genre } from "md4k-constants";

const { findKey } = lodash;

// The backend uses the english genre labels when reverse-mapping the third-party API genre to my genre id's
export const genreLabels = Object.freeze({
  [Genre.NONE]: "None",
  [Genre.COMEDY]: "Comedy",
  [Genre.DRAMA]: "Drama",
  [Genre.ACTION]: "Action",
  [Genre.SCI_FI]: "Sci-Fi",
  [Genre.ADVENTURE]: "Adventure",
  [Genre.FAMILY]: "Family",
  [Genre.THRILLER]: "Thriller",
  [Genre.MUSICAL]: "Musical",
  [Genre.DOCUMENTARY]: "Documentary",
  [Genre.HORROR]: "Horror",
});

export const thirdPartyMovie: QueryResolvers["thirdPartyMovie"] = async (
  parent,
  { imdbID },
  { dataSources }
) => {
  const { Response, Title, Year, Ratings, Runtime, Genre, Poster, Rated } =
    await dataSources.OMDB.getMovie(imdbID);

  if (Response === "True") {
    // Runtime includes " min" like "113 min".
    // ParseInt strips out the text portion.
    const runtime =
      Runtime && Runtime !== "N/A" ? parseInt(Runtime) * 60 : null;

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
      runtime,
      ...(genre && { genre: parseInt(genre) }),
      ratings: {
        id: imdbID,
        ...convertOmdbRatings(Ratings),
      },
      poster: Poster && Poster !== "N/A" ? Poster : null,
    };
  } else {
    return {
      imdbID,
    };
  }
};
