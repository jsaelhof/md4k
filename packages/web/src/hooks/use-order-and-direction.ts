import { useParams } from "react-router-dom";
import { sort, SortDirection } from "../constants/sorts";

export const useOrderAndDirection = (): {
  order: string;
  direction: string;
} => {
  const params = useParams();
  const [order = sort.ADDED, direction = SortDirection.ASC] = params["*"]
    ? params["*"].split("/")
    : [];
  return { order, direction };
};
