import { fireEvent, render } from "@testing-library/react";
import Footer from "./footer";
import { vi } from "vitest";

describe("full detail footer", () => {
  const { open } = window;

  beforeEach((context) => {
    context.movie = {
      id: 123,
      title: "TheNameOfAFilm",
    };

    // Delete the existing
    delete window.open;
    // Replace with the custom value
    window.open = vi.fn();
  });

  afterEach(() => {
    window.open = open;
  });

  it("should render the footer action images", ({ movie }) => {
    const { getByAltText } = render(<Footer movie={movie} />);
    expect(getByAltText("Search IMDB")).toBeInTheDocument();
    expect(getByAltText("Search TMDB")).toBeInTheDocument();
    expect(getByAltText("Search Common Sense Media")).toBeInTheDocument();
  });

  it("should open IMDB with title when clicked when no imdbID is provided", ({
    movie,
  }) => {
    const { getByAltText } = render(<Footer movie={movie} />);
    fireEvent.click(getByAltText("Search IMDB"));
    expect(window.open).toHaveBeenCalledWith(
      // Without replicating the entire URL, this should ensure the URL has the right domain and the movie title
      expect.stringMatching(new RegExp(`www.imdb.com.*${movie.title}`)),
      "movieInfo"
    );
  });

  it("should open IMDB with imdbID and ignore title when both are provided", ({
    movie,
  }) => {
    const { getByAltText } = render(
      <Footer movie={{ ...movie, imdbID: "t12345" }} />
    );
    fireEvent.click(getByAltText("Search IMDB"));
    expect(window.open).toHaveBeenCalledWith(
      // Without replicating the entire URL, this should ensure the URL has the right domain and the movie title
      expect.stringMatching(new RegExp(`www.imdb.com.*t12345`)),
      "movieInfo"
    );
  });

  it("should open TMDB when clicked", ({ movie }) => {
    const { getByAltText } = render(<Footer movie={movie} />);
    fireEvent.click(getByAltText("Search TMDB"));
    expect(window.open).toHaveBeenCalledWith(
      // Without replicating the entire URL, this should ensure the URL has the right domain and the movie title
      expect.stringMatching(new RegExp(`www.themoviedb.org.*${movie.title}`)),
      "movieInfo"
    );
  });

  it("should open Common Sense Media when clicked", ({ movie }) => {
    const { getByAltText } = render(<Footer movie={movie} />);
    fireEvent.click(getByAltText("Search Common Sense Media"));
    expect(window.open).toHaveBeenCalledWith(
      // Without replicating the entire URL, this should ensure the URL has the right domain and the movie title
      expect.stringMatching(
        new RegExp(`www.commonsensemedia.org.*${movie.title}`)
      ),
      "movieInfo"
    );
  });
});
