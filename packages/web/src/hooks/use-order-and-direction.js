import { useParams } from "react-router-dom";
import { sort, sortDirection } from "../constants/sorts";

export const useOrderAndDirection = () => {
  const params = useParams();
  const [order = sort.ADDED, direction = sortDirection.ASC] =
    params["*"].split("/");
  return { order, direction };
};
