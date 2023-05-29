import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useMediaQuery } from "@mui/material";

import { StatusMessage, Slider } from "./carousel.styles";
import CarouselPoster from "./components/carousel-poster/carousel-poster";
import { useEffect, useRef } from "react";
import LoadMore from "./components/load-more/load-more";

const Carousel = ({ movies, searching, page, onSelectMovie, onLoadMore }) => {
  const xsmall = useMediaQuery("(max-width: 600px), (max-height: 414px)");
  const currentSlide = useRef(1);
  const ref = useRef();

  // This monkey-patches a bug with slick carousel. Setting initialSlide works but
  // the next page button always goes to page 2 from there.
  useEffect(() => {
    ref.current?.slickGoTo(page > 1 ? currentSlide.current : 1, true);
  }, [page]);

  return (
    <div
      style={{
        height: xsmall ? 190 : 280,
      }}
    >
      <ConditionalRender cond={!movies && !searching} message="">
        <ConditionalRender
          cond={searching && page === 1}
          message="Searching..."
        >
          <ConditionalRender
            cond={movies?.length === 0}
            message="No Movies Found"
          >
            <Slider
              ref={ref}
              arrows
              dots
              infinite={false}
              speed={500}
              slidesToShow={4}
              slidesToScroll={4}
              afterChange={(index) => (currentSlide.current = index)}
              responsive={[
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  },
                },
                {
                  breakpoint: 850,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                  },
                },
              ]}
            >
              {movies?.map((movie, index) => (
                <CarouselPoster
                  key={movies.imdbID}
                  movie={movie}
                  height={xsmall ? 110 : 200}
                  onClick={() => {
                    onSelectMovie(index);
                  }}
                />
              ))}

              {/* The API sends back 10 movies. If the count of movies divided by 
                  the page number is less than the page number then the last load
                  was an incomplete page and there is no more to load. */}
              <LoadMore
                searching={searching}
                disabled={
                  searching ||
                  (!searching && movies && movies.length / 10 < page)
                }
                onLoadMore={onLoadMore}
              />
            </Slider>
          </ConditionalRender>
        </ConditionalRender>
      </ConditionalRender>
    </div>
  );
};

const ConditionalRender = ({ cond, message, children }) =>
  cond ? <StatusMessage>{message}</StatusMessage> : children;

export default Carousel;
