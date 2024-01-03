import { useSpring } from "react-spring";
import MoviePoster from "../../../../../../../movie-poster/movie-poster";
import { Layout, Title, Info } from "./poster-grid-item.styles";
import React, { ReactElement } from "react";
import { SearchResult } from "../../../../../../../../../../__generated__/graphql";

export type PosterGridItemProps = {
  height: number;
  searchResult: SearchResult;
  delay: number;
  onClick: (
    searchResult: SearchResult,
    event: React.MouseEvent<HTMLDivElement>
  ) => void;
};

const PosterGridItem = ({
  height,
  searchResult,
  delay,
  onClick,
}: PosterGridItemProps): ReactElement => {
  const mountSpring = useSpring({
    from: {
      opacity: 0,
      transform: "scaleX(85%) translateY(-40px)",
    },
    to: {
      opacity: 1,
      transform: "scaleX(100%) translateY(0px)",
    },
    delay: delay * 50,
  });

  return (
    <Layout
      onClick={(event): void => onClick && onClick(searchResult, event)}
      style={mountSpring}
    >
      <MoviePoster movie={searchResult} height={height} shadow />
      <Title>{searchResult.title}</Title>
      <Info>{searchResult.year}</Info>
    </Layout>
  );
};

export default PosterGridItem;
