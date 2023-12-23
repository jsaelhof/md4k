import { useParams } from "react-router-dom";
import { sortDirection } from "../constants/sorts";

export const useSortDirection = () => {
  const { direction = sortDirection.ASC } = useParams();
  return direction;
};
