import { useParams } from "react-router-dom";
import { sortDirection } from "../constants/sorts";
import { ValueOf } from "../types";

export const useSortDirection = (): ValueOf<typeof sortDirection> => {
  const { direction = sortDirection.ASC } = useParams();
  return direction as ValueOf<typeof sortDirection>;
};
