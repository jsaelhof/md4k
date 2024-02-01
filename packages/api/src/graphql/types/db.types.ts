import { ObjectId } from "mongodb";

export type List = {
  _id: ObjectId;
  id: string;
  label: string;
  userId: string;
};

export type Movie = {
  _id: ObjectId;
  id: string;
  title: string;
  runtime?: number;
  genre?: number;
  source?: number;
  addedOn?: string;
  locked?: boolean;
  editedOn?: string;
  poster?: string;
  year?: string;
  imdbID?: string;
  ratings: {
    id: string;
    IMDB?: string;
    ROTTEN_TOMATOES?: string;
    METACRITIC?: string;
  };
  list: string;
  background?: string | null;
  watchedOn?: string | null;
};
