import { type Movie } from "../../../../../../../__generated__/graphql";

export type ListGridProps = ListGridHandlers & {
  movies?: Movie[];
};

export type ListGridHandlers = {
  onRemoveMovie: (movie: Movie) => void;
  onMarkWatched: (movie: Movie) => void;
  onEditMovie: (movie: Movie, useEditor?: boolean) => void;
};
