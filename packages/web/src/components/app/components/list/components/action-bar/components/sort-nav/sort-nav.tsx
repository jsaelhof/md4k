import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import {
  SortNavList,
  SortNavListItem,
  sortNavSelectedItem,
  sortOrderIcon,
} from "./sort-nav.styles";
import { useNavigate } from "react-router-dom";
import { useOrderAndDirection } from "../../../../../../../../hooks/use-order-and-direction";
import { sort, SortDirection } from "../../../../../../../../constants/sorts";
import { type ReactElement } from "react";
import { useTranslation } from "react-i18next";
import type resources from "../../../../../../../../__generated__/resources";

const SortNav = (): ReactElement => {
  const { t } = useTranslation(["list"]);
  const navigate = useNavigate();
  const { order, direction } = useOrderAndDirection();

  const SortOrderIcon =
    order === sort.ADDED
      ? direction === SortDirection.ASC
        ? KeyboardArrowUp
        : KeyboardArrowDown
      : direction === SortDirection.ASC
      ? KeyboardArrowDown
      : KeyboardArrowUp;

  const resolveOrder = (key: string): [string, string] => [
    key,
    key !== order
      ? [sort.ADDED, sort.RATING].includes(key)
        ? SortDirection.DESC
        : SortDirection.ASC
      : direction === SortDirection.ASC
      ? SortDirection.DESC
      : SortDirection.ASC,
  ];

  return (
    <SortNavList>
      {Object.values(sort)
        // For the time being, remove the genre sort.
        // There are too many sorts to fit at mobile size.
        .filter((key) => key !== sort.GENRE)
        .map((key) => (
          <SortNavListItem
            key={key}
            data-active={key === order}
            data-sort={key === order ? direction : undefined}
            sx={[key === order && sortNavSelectedItem]}
            onClick={(): void => {
              navigate(`/list/${resolveOrder(key).join("/")}`);
            }}
          >
            {t(`list:sort.${key as keyof typeof resources.list.sort}`)}
            {key === order && (
              <SortOrderIcon fontSize="small" style={sortOrderIcon} />
            )}
          </SortNavListItem>
        ))}
    </SortNavList>
  );
};

export default SortNav;
