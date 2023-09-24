export const genres = Object.freeze({
  NONE: 0,
  COMEDY: 1,
  DRAMA: 2,
  ACTION: 3,
  SCI_FI: 4,
  ADVENTURE: 5,
  FAMILY: 6,
  THRILLER: 7,
  MUSICAL: 8,
  DOCUMENTARY: 9,
  HORROR: 10,
});

// This map is inserted into the common i18n namespace.
// The backend uses the english genre labels when reverse-mapping the third-party API genre to my genre id's
export const genreLabels = Object.freeze({
  [genres.NONE]: "None",
  [genres.COMEDY]: "Comedy",
  [genres.DRAMA]: "Drama",
  [genres.ACTION]: "Action",
  [genres.SCI_FI]: "Sci-Fi",
  [genres.ADVENTURE]: "Adventure",
  [genres.FAMILY]: "Family",
  [genres.THRILLER]: "Thriller",
  [genres.MUSICAL]: "Musical",
  [genres.DOCUMENTARY]: "Documentary",
  [genres.HORROR]: "Horror",
});
