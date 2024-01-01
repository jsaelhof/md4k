import { useParams } from "react-router-dom";
import { sort, sortDirection } from "../constants/sorts";

export const useOrderAndDirection = (): {
  order: string;
  direction: string;
} => {
  const params = useParams();
  const [order = sort.ADDED, direction = sortDirection.ASC] = params["*"]
    ? params["*"].split("/")
    : [];
  return { order, direction };
};
