import { render, screen } from "@testing-library/react";
import Footer from "./footer";
import { vi } from "vitest";

describe("full detail footer", () => {
  const { open } = window;

  beforeEach((context) => {
    context.title = "TheNameOfAFilm";
    context.imdbID = "t12345";

    // Delete the existing
    delete window.open;
    // Replace with the custom value
    window.open = vi.fn();
  });

  afterEach(() => {
    window.open = open;
  });

  it("should render the footer action images", ({ title }) => {
    render(<Footer title={title} />);
    expect(screen.getByAltText("Search IMDB")).toBeInTheDocument();
    expect(screen.getByAltText("Search TMDB")).toBeInTheDocument();
    expect(
      screen.getByAltText("Search Common Sense Media")
    ).toBeInTheDocument();
  });

  it("should open IMDB with title when clicked when no imdbID is provided", async ({
    title,
    user,
  }) => {
    render(<Footer title={title} />);
    await user.click(screen.getByAltText("Search IMDB"));
    expect(window.open).toHaveBeenCalledWith(
      // Without replicating the entire URL, this should ensure the URL has the right domain and the movie title
      expect.stringMatching(new RegExp(`www.imdb.com.*${title}`)),
      "movieInfo"
    );
  });

  it("should open IMDB with imdbID and ignore title when both are provided", async ({
    title,
    imdbID,
    user,
  }) => {
    render(<Footer title={title} imdbID={imdbID} />);
    await user.click(screen.getByAltText("Search IMDB"));
    expect(window.open).toHaveBeenCalledWith(
      // Without replicating the entire URL, this should ensure the URL has the right domain and the movie title
      expect.stringMatching(new RegExp(`www.imdb.com.*t12345`)),
      "movieInfo"
    );
  });

  it("should open TMDB when clicked", async ({ title, user }) => {
    render(<Footer title={title} />);
    await user.click(screen.getByAltText("Search TMDB"));
    expect(window.open).toHaveBeenCalledWith(
      // Without replicating the entire URL, this should ensure the URL has the right domain and the movie title
      expect.stringMatching(new RegExp(`www.themoviedb.org.*${title}`)),
      "movieInfo"
    );
  });

  it("should open Common Sense Media when clicked", async ({ title, user }) => {
    render(<Footer title={title} />);
    await user.click(screen.getByAltText("Search Common Sense Media"));
    expect(window.open).toHaveBeenCalledWith(
      // Without replicating the entire URL, this should ensure the URL has the right domain and the movie title
      expect.stringMatching(new RegExp(`www.commonsensemedia.org.*${title}`)),
      "movieInfo"
    );
  });
});
