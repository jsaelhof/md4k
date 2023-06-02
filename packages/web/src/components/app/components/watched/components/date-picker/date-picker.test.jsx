import { fireEvent } from "@testing-library/react";
import DatePicker from "./date-picker";
import { vi } from "vitest";
import { renderWithProviders } from "../../../../../../utils/render-with-providers";

describe("date-picker", () => {
  beforeEach((context) => {
    context.props = {
      defaultDate: new Date("2022-01-02T12:00:00"),
      onChange: vi.fn(),
      onCancel: vi.fn(),
      onSave: vi.fn(),
      onDelete: vi.fn(),
    };
  });

  it("should render the date picker without a drawer by default", async ({
    props,
  }) => {
    const { getByTestId, queryByRole } = renderWithProviders(
      <DatePicker {...props} />
    );

    expect(queryByRole("presentation")).not.toBeInTheDocument();
    expect(getByTestId("datePicker")).toBeInTheDocument();
  });

  it("should render the date picker in a drawer when useDrawer is true", async ({
    props,
  }) => {
    const { getByTestId, queryByRole } = renderWithProviders(
      <DatePicker {...props} useDrawer />
    );

    expect(queryByRole("presentation")).toBeInTheDocument();
    expect(getByTestId("datePicker")).toBeInTheDocument();
  });

  it("should ignore title when not in a drawer", async ({ props }) => {
    const { queryByText } = renderWithProviders(
      <DatePicker {...props} title="Test Title" />
    );

    expect(queryByText("Test Title")).not.toBeInTheDocument();
  });

  it("should render the title when in a drawer", async ({ props }) => {
    const { queryByText } = renderWithProviders(
      <DatePicker {...props} useDrawer title="Test Title" />
    );

    expect(queryByText("Test Title")).toBeInTheDocument();
  });

  it("should set the default date", async ({ props }) => {
    const { getByText, getByRole } = renderWithProviders(
      <DatePicker {...props} />
    );
    expect(getByText("January 2022")).toBeInTheDocument();
    expect(getByRole("button", { name: "2nd January (Sunday)" })).toHaveClass(
      "rdp-day_selected"
    );
  });

  it("should call onChange when changing the date", async ({ props }) => {
    const { getByRole } = renderWithProviders(<DatePicker {...props} />);

    expect(getByRole("button", { name: "2nd January (Sunday)" })).toHaveClass(
      "rdp-day_selected"
    );

    fireEvent.click(getByRole("button", { name: "1st January (Saturday)" }));

    expect(props.onChange).toHaveBeenCalled();

    expect(
      getByRole("button", { name: "2nd January (Sunday)" })
    ).not.toHaveClass("rdp-day_selected");

    expect(getByRole("button", { name: "1st January (Saturday)" })).toHaveClass(
      "rdp-day_selected"
    );
  });

  it("should call onDelete", async ({ props }) => {
    const { getByTestId } = renderWithProviders(<DatePicker {...props} />);
    expect(getByTestId("DeleteIcon")).toBeInTheDocument();
    fireEvent.click(getByTestId("DeleteIcon"));
    expect(props.onDelete).toHaveBeenCalled();
  });

  it("should call onCancel", async ({ props }) => {
    const { getByTestId } = renderWithProviders(<DatePicker {...props} />);
    expect(getByTestId("CloseIcon")).toBeInTheDocument();
    fireEvent.click(getByTestId("CloseIcon"));
    expect(props.onCancel).toHaveBeenCalled();
  });

  it("should call onSave", async ({ props }) => {
    const { getByTestId } = renderWithProviders(<DatePicker {...props} />);
    expect(getByTestId("CalendarCheckIcon")).toBeInTheDocument();
    fireEvent.click(getByTestId("CalendarCheckIcon"));
    expect(props.onSave).toHaveBeenCalled();
  });
});
