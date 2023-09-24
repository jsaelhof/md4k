import React from "react";

import {
  searchCommonSense,
  searchIMDB,
  searchIMDBTitle,
  searchTMDB,
} from "../../../../../../utils/search";
import { ActionImage, Container } from "./footer.styles";
import { useI18n } from "../../../../../../hooks/use-i18n";
import fullDetailStrings from "../../i18n/i18n";

const Footer = ({ movie }) => {
  const { t } = useI18n(fullDetailStrings);
  const { title } = movie;

  const actions = [
    {
      label: t("full_detail:footer.tmdb"),
      src: "/images/third_party/tmdb.png",
      action: () => window.open(searchTMDB(title), "movieInfo"),
    },
    {
      label: t("full_detail:footer.imdb"),
      src: "/images/third_party/imdb.png",
      action: () =>
        window.open(
          movie.imdbID ? searchIMDB(movie.imdbID) : searchIMDBTitle(title),
          "movieInfo"
        ),
    },
    {
      label: t("full_detail:footer.common_sense"),
      src: "/images/third_party/commonsense.png",
      action: () => window.open(searchCommonSense(title), "movieInfo"),
    },
  ];

  return (
    <Container>
      {actions.map(({ label, src, action }) => (
        <ActionImage
          key={label}
          alt={t("full_detail:footer.search", { site: label })}
          src={src}
          onClick={() => {
            action(movie);
          }}
        />
      ))}
    </Container>
  );
};

export default Footer;
