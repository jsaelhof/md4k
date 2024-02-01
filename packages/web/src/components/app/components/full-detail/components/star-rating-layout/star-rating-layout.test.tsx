import { render, waitFor, screen } from "@testing-library/react";
import { createMatchMedia } from "../../../../../../test-utils/create-match-media";
import { StarRatingLayout } from "./star-rating-layout";
import { Ratings } from "../../../../../../__generated__/graphql";

interface LocalTestContext {
  ratings: Ratings;
}

describe("star-rating-layout", () => {
  beforeEach<LocalTestContext>((context) => {
    context.ratings = {
      id: "tt2463208",
      IMDB: "67%",
      ROTTEN_TOMATOES: "68%",
      METACRITIC: "55%",
    };
  });

  it<LocalTestContext>("should render the five-star rating and ratings breakdown", ({
    ratings,
  }) => {
    render(<StarRatingLayout ratings={ratings} />);
    expect(screen.getAllByAltText(/star-/)).toHaveLength(5);
    expect(screen.getByAltText("IMDB")).toBeInTheDocument();
    expect(screen.getByText("67%")).toBeInTheDocument();
    expect(screen.getByAltText("ROTTEN_TOMATOES")).toBeInTheDocument();
    expect(screen.getByText("68%")).toBeInTheDocument();
    expect(screen.getByAltText("METACRITIC")).toBeInTheDocument();
    expect(screen.getByText("55%")).toBeInTheDocument();
  });

  it<LocalTestContext>("should toggle the ratings breakdown with mouseEnter and mouseLeave when mobile", async ({
    ratings,
    user,
  }) => {
    render(<StarRatingLayout ratings={ratings} />);

    const starRatingLayout = screen.getByTestId("starRatingLayout");
    const ratingsBreakdown = screen.getByTestId("ratingsBreakdown");

    expect(ratingsBreakdown).not.toHaveStyle({
      marginLeft: "0px",
      opacity: "-0.25",
    });

    await user.hover(starRatingLayout);
    await waitFor(
      () =>
        expect(ratingsBreakdown).toHaveStyle({
          marginLeft: "0px",
          opacity: "1",
        }),
      { timeout: 5000 }
    );

    await user.unhover(starRatingLayout);
    await waitFor(
      () =>
        expect(ratingsBreakdown).not.toHaveStyle({
          marginLeft: "0px",
          opacity: "-0.25",
        }),
      { timeout: 5000 }
    );
  });

  it<LocalTestContext>("should toggle the ratings breakdown with click when mobile", async ({
    ratings,
    user,
  }) => {
    render(<StarRatingLayout ratings={ratings} />);

    const starRatingLayout = screen.getByTestId("starRatingLayout");
    const ratingsBreakdown = screen.getByTestId("ratingsBreakdown");

    expect(ratingsBreakdown).not.toHaveStyle({
      marginLeft: "0px",
      opacity: "-0.25",
    });

    await user.click(starRatingLayout);
    await waitFor(
      () =>
        expect(ratingsBreakdown).toHaveStyle({
          marginLeft: "0px",
          opacity: "1",
        }),
      { timeout: 5000 }
    );

    await user.click(starRatingLayout);
    await waitFor(
      () =>
        expect(ratingsBreakdown).not.toHaveStyle({
          marginLeft: "0px",
          opacity: "-0.25",
        }),
      { timeout: 5000 }
    );
  });

  it<LocalTestContext>("should toggle the ratings breakdown with mouseEnter and mouseLeave when above mobile", async ({
    ratings,
    user,
  }) => {
    // Mock a 660 pixel width
    window.matchMedia = createMatchMedia(660);

    render(<StarRatingLayout ratings={ratings} />);

    const starRatingLayout = screen.getByTestId("starRatingLayout");
    const ratingsBreakdown = screen.getByTestId("ratingsBreakdown");

    expect(ratingsBreakdown).toHaveStyle({
      marginTop: "-16px",
      opacity: "-0.25",
    });

    await user.hover(starRatingLayout);
    await waitFor(
      () =>
        expect(ratingsBreakdown).toHaveStyle({
          marginTop: "16px",
          opacity: "1",
        }),
      { timeout: 5000 }
    );

    await user.unhover(starRatingLayout);
    await waitFor(
      () =>
        expect(ratingsBreakdown).toHaveStyle({
          marginTop: "-16px",
          opacity: "-0.25",
        }),
      { timeout: 5000 }
    );
  });

  it<LocalTestContext>("should toggle the ratings breakdown with click when above mobile", async ({
    ratings,
    user,
  }) => {
    // Mock a 660 pixel width
    window.matchMedia = createMatchMedia(660);

    render(<StarRatingLayout ratings={ratings} />);

    const starRatingLayout = screen.getByTestId("starRatingLayout");
    const ratingsBreakdown = screen.getByTestId("ratingsBreakdown");

    expect(ratingsBreakdown).toHaveStyle({
      marginTop: "-16px",
      opacity: "-0.25",
    });

    await user.click(starRatingLayout);
    await waitFor(
      () =>
        expect(ratingsBreakdown).toHaveStyle({
          marginTop: "16px",
          opacity: "1",
        }),
      { timeout: 5000 }
    );

    await user.click(starRatingLayout);
    await waitFor(
      () =>
        expect(ratingsBreakdown).toHaveStyle({
          marginTop: "-16px",
          opacity: "-0.25",
        }),
      { timeout: 5000 }
    );
  });
});
