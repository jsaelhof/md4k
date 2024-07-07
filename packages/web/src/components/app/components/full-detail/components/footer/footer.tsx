import React, { type ReactElement } from "react";

import {
  searchCommonSense,
  searchIMDB,
  searchIMDBParentalGuide,
  searchIMDBTitle,
  searchTMDB,
} from "../../../../../../utils/search";
import { ActionImage, Container } from "./footer.styles";
import { type Maybe } from "../../../../../../__generated__/graphql";
import { useTranslation } from "react-i18next";
import { notEmpty } from "../../../../../../utils/not-empty";

export type FooterProps = {
  title: string;
  imdbID?: Maybe<string>;
};

const Footer = ({ title, imdbID }: FooterProps): ReactElement => {
  const { t } = useTranslation(["full_detail"]);

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
          imdbID ? searchIMDB(imdbID) : searchIMDBTitle(title),
          "movieInfo"
        ),
    },
    imdbID
      ? {
          label: t("full_detail:footer.imdb_parental_guide"),
          src: "/images/third_party/imdb_parental_guide.png",
          action: () =>
            window.open(searchIMDBParentalGuide(imdbID), "movieInfo"),
        }
      : null,
    {
      label: t("full_detail:footer.common_sense"),
      src: "/images/third_party/commonsense.png",
      action: () => window.open(searchCommonSense(title), "movieInfo"),
    },
  ];

  return (
    <Container>
      {actions.filter(notEmpty).map(({ label, src, action }) => (
        <ActionImage
          key={label}
          alt={t("full_detail:footer.search", { site: label })}
          src={src}
          onClick={action}
        />
      ))}
    </Container>
  );
};

export default Footer;
