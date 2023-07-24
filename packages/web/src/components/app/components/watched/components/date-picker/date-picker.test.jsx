import { screen } from "@testing-library/react";
import DatePicker from "./date-picker";
import { vi } from "vitest";
import { renderWithProviders } from "../../../../../../test-utils/render-with-providers";

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

  it("should render the date picker without a drawer by default", ({
    props,
  }) => {
    renderWithProviders(<DatePicker {...props} />);

    expect(screen.queryByTestId("datePickerDrawer")).not.toBeInTheDocument();
    expect(screen.getByTestId("datePicker")).toBeInTheDocument();
  });

  it("should render the date picker in a drawer when useDrawer is true", ({
    props,
  }) => {
    renderWithProviders(<DatePicker {...props} useDrawer />);

    expect(screen.getByTestId("datePickerDrawer")).toBeInTheDocument();
    expect(screen.getByTestId("datePicker")).toBeInTheDocument();
  });

  it("should ignore title when not in a drawer", ({ props }) => {
    renderWithProviders(<DatePicker {...props} title="Test Title" />);

    expect(screen.queryByText("Test Title")).not.toBeInTheDocument();
  });

  it("should render the title when in a drawer", ({ props }) => {
    renderWithProviders(<DatePicker {...props} useDrawer title="Test Title" />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("should set the default date", ({ props }) => {
    renderWithProviders(<DatePicker {...props} />);
    expect(screen.getByText("January 2022")).toBeInTheDocument();
    expect(screen.getByRole("gridcell", { name: "2" })).toHaveClass(
      "rdp-day_selected"
    );
  });

  it("should call onChange when changing the date", async ({ props, user }) => {
    renderWithProviders(<DatePicker {...props} />);

    expect(screen.getByRole("gridcell", { name: "2" })).toHaveClass(
      "rdp-day_selected"
    );

    await user.click(screen.getByRole("gridcell", { name: "1" }));

    expect(props.onChange).toHaveBeenCalled();

    expect(screen.getByRole("gridcell", { name: "2" })).not.toHaveClass(
      "rdp-day_selected"
    );

    expect(screen.getByRole("gridcell", { name: "1" })).toHaveClass(
      "rdp-day_selected"
    );
  });

  it("should call onDelete", async ({ props, user }) => {
    renderWithProviders(<DatePicker {...props} />);
    expect(screen.getByTestId("DeleteIcon")).toBeInTheDocument();
    await user.click(screen.getByTestId("DeleteIcon"));
    expect(props.onDelete).toHaveBeenCalled();
  });

  it("should call onCancel", async ({ props, user }) => {
    renderWithProviders(<DatePicker {...props} />);
    expect(screen.getByTestId("CloseIcon")).toBeInTheDocument();
    await user.click(screen.getByTestId("CloseIcon"));
    expect(props.onCancel).toHaveBeenCalled();
  });

  it("should call onSave", async ({ props, user }) => {
    renderWithProviders(<DatePicker {...props} />);
    expect(screen.getByTestId("CalendarCheckIcon")).toBeInTheDocument();
    await user.click(screen.getByTestId("CalendarCheckIcon"));
    expect(props.onSave).toHaveBeenCalled();
  });
});
