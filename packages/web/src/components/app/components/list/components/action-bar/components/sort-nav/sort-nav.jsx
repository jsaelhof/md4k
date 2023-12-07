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
import { sort, sortDirection } from "../../../../../../../../constants/sorts";
import { useI18n } from "../../../../../../../../hooks/use-i18n";
import listStrings from "../../../../i18n/i18n";

const SortNav = () => {
  const { t } = useI18n(listStrings);
  const navigate = useNavigate();
  const { order, direction } = useOrderAndDirection();

  const SortOrderIcon =
    order === sort.ADDED
      ? direction === sortDirection.ASC
        ? KeyboardArrowUp
        : KeyboardArrowDown
      : direction === sortDirection.ASC
      ? KeyboardArrowDown
      : KeyboardArrowUp;

  const resolveOrder = (key) => [
    key,
    key !== order
      ? [sort.ADDED, sort.RATING].includes(key)
        ? sortDirection.DESC
        : sortDirection.ASC
      : direction === sortDirection.ASC
      ? sortDirection.DESC
      : sortDirection.ASC,
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
            onClick={() => {
              navigate(`/list/${resolveOrder(key).join("/")}`);
            }}
          >
            {t(`list:sort.${key}`)}
            {key === order && (
              <SortOrderIcon fontSize="small" style={sortOrderIcon} />
            )}
          </SortNavListItem>
        ))}
    </SortNavList>
  );
};

export default SortNav;
