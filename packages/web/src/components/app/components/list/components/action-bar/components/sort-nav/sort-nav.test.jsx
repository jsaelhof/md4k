import { fireEvent } from "@testing-library/react";
import { sortDirection } from "../../../../../../../../constants/sorts";
import { renderWithProviders } from "../../../../../../../../utils/render-with-providers";
import SortNav from "./sort-nav";

describe("sort-nav", () => {
  it("should render all sort options", async () => {
    const { getByText } = await renderWithProviders(<SortNav />);

    expect(getByText("Added")).toBeInTheDocument();
    expect(getByText("Runtime")).toBeInTheDocument();
    expect(getByText("Title")).toBeInTheDocument();
  });

  it("should select added desc by default", async () => {
    const { getByText } = await renderWithProviders(<SortNav />);
    expect(getByText("Added")).toHaveAttribute("data-active", "true");
    expect(getByText("Added")).toHaveAttribute("data-sort", sortDirection.DESC);
    expect(getByText("Runtime")).toHaveAttribute("data-active", "false");
    expect(getByText("Title")).toHaveAttribute("data-active", "false");
  });

  it("should toggle runtime", async () => {
    const { getByText } = await renderWithProviders(<SortNav />);

    fireEvent.click(getByText("Runtime"));
    expect(getByText("Runtime")).toHaveAttribute("data-active", "true");
    expect(getByText("Runtime")).toHaveAttribute(
      "data-sort",
      sortDirection.ASC
    );
    expect(getByText("Added")).toHaveAttribute("data-active", "false");
    expect(getByText("Title")).toHaveAttribute("data-active", "false");

    fireEvent.click(getByText("Runtime"));
    expect(getByText("Runtime")).toHaveAttribute("data-active", "true");
    expect(getByText("Runtime")).toHaveAttribute(
      "data-sort",
      sortDirection.DESC
    );
    expect(getByText("Added")).toHaveAttribute("data-active", "false");
    expect(getByText("Title")).toHaveAttribute("data-active", "false");
  });

  it("should toggle title", async () => {
    const { getByText } = await renderWithProviders(<SortNav />);

    fireEvent.click(getByText("Title"));
    expect(getByText("Title")).toHaveAttribute("data-active", "true");
    expect(getByText("Title")).toHaveAttribute("data-sort", sortDirection.ASC);
    expect(getByText("Runtime")).toHaveAttribute("data-active", "false");
    expect(getByText("Added")).toHaveAttribute("data-active", "false");

    fireEvent.click(getByText("Title"));
    expect(getByText("Title")).toHaveAttribute("data-active", "true");
    expect(getByText("Title")).toHaveAttribute("data-sort", sortDirection.DESC);
    expect(getByText("Runtime")).toHaveAttribute("data-active", "false");
    expect(getByText("Added")).toHaveAttribute("data-active", "false");
  });

  it("should toggle added", async () => {
    const { getByText } = await renderWithProviders(<SortNav />);

    fireEvent.click(getByText("Added"));
    expect(getByText("Added")).toHaveAttribute("data-active", "true");
    expect(getByText("Added")).toHaveAttribute("data-sort", sortDirection.ASC);
    expect(getByText("Runtime")).toHaveAttribute("data-active", "false");
    expect(getByText("Title")).toHaveAttribute("data-active", "false");

    fireEvent.click(getByText("Added"));
    expect(getByText("Added")).toHaveAttribute("data-active", "true");
    expect(getByText("Added")).toHaveAttribute("data-sort", sortDirection.DESC);
    expect(getByText("Runtime")).toHaveAttribute("data-active", "false");
    expect(getByText("Title")).toHaveAttribute("data-active", "false");
  });

  it("should show the correct icon for the sort direction and option", async () => {
    const { getByText, getByTestId } = await renderWithProviders(<SortNav />);

    fireEvent.click(getByText("Title"));
    expect(getByText("Title")).toHaveAttribute("data-sort", sortDirection.ASC);
    expect(getByTestId("KeyboardArrowDownIcon")).toBeInTheDocument();

    fireEvent.click(getByText("Title"));
    expect(getByText("Title")).toHaveAttribute("data-sort", sortDirection.DESC);
    expect(getByTestId("KeyboardArrowUpIcon")).toBeInTheDocument();

    fireEvent.click(getByText("Runtime"));
    expect(getByText("Runtime")).toHaveAttribute(
      "data-sort",
      sortDirection.ASC
    );
    expect(getByTestId("KeyboardArrowDownIcon")).toBeInTheDocument();

    fireEvent.click(getByText("Runtime"));
    expect(getByText("Runtime")).toHaveAttribute(
      "data-sort",
      sortDirection.DESC
    );
    expect(getByTestId("KeyboardArrowUpIcon")).toBeInTheDocument();

    // Added uses the opposite icon for desc (Down) and defaults to "desc" first
    fireEvent.click(getByText("Added"));
    expect(getByText("Added")).toHaveAttribute("data-sort", sortDirection.DESC);
    expect(getByTestId("KeyboardArrowDownIcon")).toBeInTheDocument();

    // Added uses the opposite icon for asc (Up)
    fireEvent.click(getByText("Added"));
    expect(getByText("Added")).toHaveAttribute("data-sort", sortDirection.ASC);
    expect(getByTestId("KeyboardArrowUpIcon")).toBeInTheDocument();
  });
});
