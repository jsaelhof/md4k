import { screen } from "@testing-library/react";
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
    renderWithProviders(<DatePicker {...props} />);

    expect(screen.queryByRole("presentation")).not.toBeInTheDocument();
    expect(screen.getByTestId("datePicker")).toBeInTheDocument();
  });

  it("should render the date picker in a drawer when useDrawer is true", async ({
    props,
  }) => {
    renderWithProviders(<DatePicker {...props} useDrawer />);

    expect(screen.queryByRole("presentation")).toBeInTheDocument();
    expect(screen.getByTestId("datePicker")).toBeInTheDocument();
  });

  it("should ignore title when not in a drawer", async ({ props }) => {
    renderWithProviders(<DatePicker {...props} title="Test Title" />);

    expect(screen.queryByText("Test Title")).not.toBeInTheDocument();
  });

  it("should render the title when in a drawer", async ({ props }) => {
    renderWithProviders(<DatePicker {...props} useDrawer title="Test Title" />);

    expect(screen.queryByText("Test Title")).toBeInTheDocument();
  });

  it("should set the default date", async ({ props }) => {
    renderWithProviders(<DatePicker {...props} />);
    expect(screen.getByText("January 2022")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "2nd January (Sunday)" })
    ).toHaveClass("rdp-day_selected");
  });

  it("should call onChange when changing the date", async ({ props, user }) => {
    renderWithProviders(<DatePicker {...props} />);

    expect(
      screen.getByRole("button", { name: "2nd January (Sunday)" })
    ).toHaveClass("rdp-day_selected");

    await user.click(
      screen.getByRole("button", { name: "1st January (Saturday)" })
    );

    expect(props.onChange).toHaveBeenCalled();

    expect(
      screen.getByRole("button", { name: "2nd January (Sunday)" })
    ).not.toHaveClass("rdp-day_selected");

    expect(
      screen.getByRole("button", { name: "1st January (Saturday)" })
    ).toHaveClass("rdp-day_selected");
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
