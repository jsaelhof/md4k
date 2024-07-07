import { render, screen } from "@testing-library/react";
import Footer from "./footer";
import { vi } from "vitest";

interface LocalTestContext {
  title: string;
  imdbID: string;
}

describe("full detail footer", () => {
  beforeEach<LocalTestContext>((context) => {
    context.title = "TheNameOfAFilm";
    context.imdbID = "t12345";
    global.open = vi.fn();
  });

  it<LocalTestContext>("should render the footer action images", ({
    title,
  }) => {
    render(<Footer title={title} />);
    expect(screen.getByAltText("Search IMDB")).toBeInTheDocument();
    expect(screen.getByAltText("Search TMDB")).toBeInTheDocument();
    expect(
      screen.getByAltText("Search Common Sense Media")
    ).toBeInTheDocument();
  });

  it<LocalTestContext>("should open IMDB with title when clicked when no imdbID is provided", async ({
    title,
    user,
  }) => {
    render(<Footer title={title} />);
    await user.click(screen.getByAltText("Search IMDB"));
    expect(global.open).toHaveBeenCalledWith(
      // Without replicating the entire URL, this should ensure the URL has the right domain and the movie title
      expect.stringMatching(new RegExp(`www.imdb.com.*${title}`)),
      "movieInfo"
    );
  });

  it<LocalTestContext>("should open IMDB with imdbID and ignore title when both are provided", async ({
    title,
    imdbID,
    user,
  }) => {
    render(<Footer title={title} imdbID={imdbID} />);
    await user.click(screen.getByAltText("Search IMDB"));
    expect(global.open).toHaveBeenCalledWith(
      // Without replicating the entire URL, this should ensure the URL has the right domain and the movie title
      expect.stringMatching(new RegExp(`www.imdb.com.*t12345`)),
      "movieInfo"
    );
  });

  it<LocalTestContext>("should open TMDB when clicked", async ({
    title,
    user,
  }) => {
    render(<Footer title={title} />);
    await user.click(screen.getByAltText("Search TMDB"));
    expect(global.open).toHaveBeenCalledWith(
      // Without replicating the entire URL, this should ensure the URL has the right domain and the movie title
      expect.stringMatching(new RegExp(`www.themoviedb.org.*${title}`)),
      "movieInfo"
    );
  });

  it<LocalTestContext>("should open Common Sense Media when clicked", async ({
    title,
    user,
  }) => {
    render(<Footer title={title} />);
    await user.click(screen.getByAltText("Search Common Sense Media"));
    expect(global.open).toHaveBeenCalledWith(
      // Without replicating the entire URL, this should ensure the URL has the right domain and the movie title
      expect.stringMatching(new RegExp(`www.commonsensemedia.org.*${title}`)),
      "movieInfo"
    );
  });

  it<LocalTestContext>("should open IMDB Parental Guide when clicked", async ({
    title,
    imdbID,
    user,
  }) => {
    render(<Footer title={title} imdbID={imdbID} />);
    await user.click(screen.getByAltText("Search IMDB Parental Guide"));
    expect(global.open).toHaveBeenCalledWith(
      // Without replicating the entire URL, this should ensure the URL has the right domain and the imdbID
      expect.stringMatching(
        new RegExp(`www.imdb.com/title/${imdbID}/parentalguide`)
      ),
      "movieInfo"
    );
  });

  it<LocalTestContext>("should filter out null items", ({ title }) => {
    render(<Footer title={title} imdbID={undefined} />);
    expect(
      screen.queryByAltText("Search IMDB Parental Guide")
    ).not.toBeInTheDocument();
  });
});
