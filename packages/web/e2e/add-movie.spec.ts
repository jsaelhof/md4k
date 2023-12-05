import { test, expect } from "@playwright/test";

test("add movie", async ({ page }) => {
  page.on("request", (request) => {
    if (request.url.toString().includes("graphql"))
      console.log(">>", request.method(), request.url());
  });
  page.on("response", (response) =>
    console.log("<<", response.status(), response.url())
  );

  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Movie Decider 4000/);

  await expect(page.getByRole("button", { name: "Add Movie" })).toBeVisible();

  // Mock the api call before navigating
  await page.route("**/graphql", async (route) => {
    const { operationName, variables } = route.request().postDataJSON();

    switch (operationName) {
      case "SearchByTitle":
        if (variables.page === 1) {
          await route.fulfill({
            json: {
              data: {
                searchByTitle: {
                  results: [
                    {
                      title: "Star Wars: Episode IV - A New Hope",
                      year: "1977",
                      imdbID: "tt0076759",
                      poster:
                        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
                      __typename: "SearchResult",
                    },
                  ],
                  pageInfo: {
                    pages: 2,
                    page: 1,
                    __typename: "PageInfo",
                  },
                  __typename: "SearchResults",
                },
              },
            },
          });
        } else if (variables.page === 2) {
          await route.fulfill({
            json: {
              data: {
                searchByTitle: {
                  results: [
                    {
                      title: "Star Wars: Episode V - The Empire Strikes Back",
                      year: "1980",
                      imdbID: "tt0080684",
                      poster:
                        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
                      __typename: "SearchResult",
                    },
                  ],
                  pageInfo: {
                    pages: 2,
                    page: 2,
                    __typename: "PageInfo",
                  },
                  __typename: "SearchResults",
                },
              },
            },
          });
        }

        break;
    }
  });

  await page.getByRole("button", { name: "Add Movie" }).click();

  await expect(page).toHaveURL("/add");

  await page.getByRole("textbox", { name: "Search" }).fill("Star Wars");

  await expect(page.getByLabel("Search Results")).toBeVisible();

  await expect(page.getByTestId("poster")).toHaveCount(1);
  await expect(page.getByRole("button", { name: "Load More" })).toBeVisible();

  await page.getByRole("button", { name: "Load More" }).click();

  await expect(page.getByTestId("poster")).toHaveCount(2);

  await expect(
    page.getByText("Star Wars: Episode IV - A New Hope")
  ).toHaveCount(2);

  await page.getByText("Star Wars: Episode IV - A New Hope").nth(1).click();

  await expect(
    page.getByRole("button", { name: "Watch Trailer" })
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Add Movie" })).toBeVisible();

  await page.getByRole("button", { name: "Add Movie" }).click();
});
