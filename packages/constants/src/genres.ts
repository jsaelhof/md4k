export enum Genre {
  NONE = 0,
  COMEDY = 1,
  DRAMA = 2,
  ACTION = 3,
  SCI_FI = 4,
  ADVENTURE = 5,
  FAMILY = 6,
  THRILLER = 7,
  MUSICAL = 8,
  DOCUMENTARY = 9,
  HORROR = 10,
}

// TS Enum like `Genre` has keys defined both ways (None: 0 and 0: "None").
// When we need to iterate over all the genres, we need just the enum values that are numbers.
export const genres: Genre[] = Object.values(Genre).reduce<Genre[]>(
  (acc, value) => {
    if (!isNaN(Number(value))) acc.push(value as Genre);
    return acc;
  },
  []
);

// TODO: This is not used by the frontend. Movie to API.
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
