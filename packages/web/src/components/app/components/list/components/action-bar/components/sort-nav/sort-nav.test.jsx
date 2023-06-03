import { screen } from "@testing-library/react";
import { sortDirection } from "../../../../../../../../constants/sorts";
import {
  renderWithProviders,
  renderWithProvidersAsRoute,
} from "../../../../../../../../utils/render-with-providers";
import SortNav from "./sort-nav";

describe("sort-nav", () => {
  it("should render all sort options", async () => {
    renderWithProviders(<SortNav />);

    expect(screen.getByText("Added")).toBeInTheDocument();
    expect(screen.getByText("Runtime")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("should select added desc by default", async () => {
    renderWithProvidersAsRoute(<SortNav />, "/list/*", "/list/addedOn/desc");

    expect(screen.getByText("Added")).toHaveAttribute("data-active", "true");
    expect(screen.getByText("Added")).toHaveAttribute(
      "data-sort",
      sortDirection.DESC
    );
    expect(screen.getByText("Runtime")).toHaveAttribute("data-active", "false");
    expect(screen.getByText("Title")).toHaveAttribute("data-active", "false");
  });

  it("should toggle runtime", async ({ user }) => {
    renderWithProvidersAsRoute(<SortNav />, "/list/*", "/list/addedOn/desc");

    await user.click(screen.getByText("Runtime"));
    expect(screen.getByText("Runtime")).toHaveAttribute("data-active", "true");
    expect(screen.getByText("Runtime")).toHaveAttribute(
      "data-sort",
      sortDirection.ASC
    );
    expect(screen.getByText("Added")).toHaveAttribute("data-active", "false");
    expect(screen.getByText("Title")).toHaveAttribute("data-active", "false");

    await user.click(screen.getByText("Runtime"));
    expect(screen.getByText("Runtime")).toHaveAttribute("data-active", "true");
    expect(screen.getByText("Runtime")).toHaveAttribute(
      "data-sort",
      sortDirection.DESC
    );
    expect(screen.getByText("Added")).toHaveAttribute("data-active", "false");
    expect(screen.getByText("Title")).toHaveAttribute("data-active", "false");
  });

  it("should toggle title", async ({ user }) => {
    renderWithProvidersAsRoute(<SortNav />, "/list/*", "/list/addedOn/desc");

    await user.click(screen.getByText("Title"));
    expect(screen.getByText("Title")).toHaveAttribute("data-active", "true");
    expect(screen.getByText("Title")).toHaveAttribute(
      "data-sort",
      sortDirection.ASC
    );
    expect(screen.getByText("Runtime")).toHaveAttribute("data-active", "false");
    expect(screen.getByText("Added")).toHaveAttribute("data-active", "false");

    await user.click(screen.getByText("Title"));
    expect(screen.getByText("Title")).toHaveAttribute("data-active", "true");
    expect(screen.getByText("Title")).toHaveAttribute(
      "data-sort",
      sortDirection.DESC
    );
    expect(screen.getByText("Runtime")).toHaveAttribute("data-active", "false");
    expect(screen.getByText("Added")).toHaveAttribute("data-active", "false");
  });

  it("should toggle added", async ({ user }) => {
    renderWithProvidersAsRoute(<SortNav />, "/list/*", "/list/addedOn/desc");

    await user.click(screen.getByText("Added"));
    expect(screen.getByText("Added")).toHaveAttribute("data-active", "true");
    expect(screen.getByText("Added")).toHaveAttribute(
      "data-sort",
      sortDirection.ASC
    );
    expect(screen.getByText("Runtime")).toHaveAttribute("data-active", "false");
    expect(screen.getByText("Title")).toHaveAttribute("data-active", "false");

    await user.click(screen.getByText("Added"));
    expect(screen.getByText("Added")).toHaveAttribute("data-active", "true");
    expect(screen.getByText("Added")).toHaveAttribute(
      "data-sort",
      sortDirection.DESC
    );
    expect(screen.getByText("Runtime")).toHaveAttribute("data-active", "false");
    expect(screen.getByText("Title")).toHaveAttribute("data-active", "false");
  });

  it("should show the correct icon for the sort direction and option", async ({
    user,
  }) => {
    renderWithProvidersAsRoute(<SortNav />, "/list/*", "/list/addedOn/desc");

    await user.click(screen.getByText("Title"));
    expect(screen.getByText("Title")).toHaveAttribute(
      "data-sort",
      sortDirection.ASC
    );
    expect(screen.getByTestId("KeyboardArrowDownIcon")).toBeInTheDocument();

    await user.click(screen.getByText("Title"));
    expect(screen.getByText("Title")).toHaveAttribute(
      "data-sort",
      sortDirection.DESC
    );
    expect(screen.getByTestId("KeyboardArrowUpIcon")).toBeInTheDocument();

    await user.click(screen.getByText("Runtime"));
    expect(screen.getByText("Runtime")).toHaveAttribute(
      "data-sort",
      sortDirection.ASC
    );
    expect(screen.getByTestId("KeyboardArrowDownIcon")).toBeInTheDocument();

    await user.click(screen.getByText("Runtime"));
    expect(screen.getByText("Runtime")).toHaveAttribute(
      "data-sort",
      sortDirection.DESC
    );
    expect(screen.getByTestId("KeyboardArrowUpIcon")).toBeInTheDocument();

    // Added uses the opposite icon for desc (Down) and defaults to "desc" first
    await user.click(screen.getByText("Added"));
    expect(screen.getByText("Added")).toHaveAttribute(
      "data-sort",
      sortDirection.DESC
    );
    expect(screen.getByTestId("KeyboardArrowDownIcon")).toBeInTheDocument();

    // Added uses the opposite icon for asc (Up)
    await user.click(screen.getByText("Added"));
    expect(screen.getByText("Added")).toHaveAttribute(
      "data-sort",
      sortDirection.ASC
    );
    expect(screen.getByTestId("KeyboardArrowUpIcon")).toBeInTheDocument();
  });
});
