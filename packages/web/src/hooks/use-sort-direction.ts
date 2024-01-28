import { useParams } from "react-router-dom";
import { SortDirection } from "../constants/sorts";

export const useSortDirection = (): SortDirection => {
  const { direction = SortDirection.ASC } = useParams();
  return direction as SortDirection;
};
