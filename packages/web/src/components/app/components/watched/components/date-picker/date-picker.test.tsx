import { screen } from "@testing-library/react";
import DatePicker, { type DatePickerProps } from "./date-picker";
import { vi } from "vitest";
import { renderWithProviders } from "../../../../../../test-utils/render-with-providers";
import { type SpringValues } from "react-spring";

interface LocalTestContext {
  props: DatePickerProps;
}

describe("date-picker", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      defaultDate: new Date("2022-01-02T12:00:00"),
      onCancel: vi.fn(),
      onSave: vi.fn(),
      onDelete: vi.fn(),
      title: "Test Title",
      spring: {} as SpringValues<{ mounted: number }>,
    };
  });

  it<LocalTestContext>("should render the date picker without a drawer by default", ({
    props,
  }) => {
    renderWithProviders(<DatePicker {...props} />);

    expect(screen.queryByTestId("datePickerDrawer")).not.toBeInTheDocument();
    expect(screen.getByTestId("datePicker")).toBeInTheDocument();
  });

  it<LocalTestContext>("should render the date picker in a drawer when useDrawer is true", ({
    props,
  }) => {
    renderWithProviders(<DatePicker {...props} useDrawer />);

    expect(screen.getByTestId("datePickerDrawer")).toBeInTheDocument();
    expect(screen.getByTestId("datePicker")).toBeInTheDocument();
  });

  it<LocalTestContext>("should ignore title when not in a drawer", ({
    props,
  }) => {
    renderWithProviders(<DatePicker {...props} title="Test Title" />);

    expect(screen.queryByText("Test Title")).not.toBeInTheDocument();
  });

  it<LocalTestContext>("should render the title when in a drawer", ({
    props,
  }) => {
    renderWithProviders(<DatePicker {...props} useDrawer title="Test Title" />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it<LocalTestContext>("should set the default date", ({ props }) => {
    renderWithProviders(<DatePicker {...props} />);
    expect(screen.getByText("January 2022")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /January 2nd, 2022, selected/ })
    ).toBeInTheDocument();
  });

  it<LocalTestContext>("should change the date", async ({ props, user }) => {
    renderWithProviders(<DatePicker {...props} />);

    expect(
      screen.getByRole("button", { name: /January 2nd, 2022, selected/ })
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /January 1st, 2022/ }));

    expect(
      screen.getByRole("button", { name: /January 2nd, 2022/ })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /January 2nd, 2022, selected/ })
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /January 1st, 2022, selected/ })
    ).toBeInTheDocument();
  });

  it<LocalTestContext>("should call onDelete", async ({ props, user }) => {
    renderWithProviders(<DatePicker {...props} />);
    expect(screen.getByTestId("DeleteIcon")).toBeInTheDocument();
    await user.click(screen.getByTestId("DeleteIcon"));
    expect(props.onDelete).toHaveBeenCalled();
  });

  it<LocalTestContext>("should call onCancel", async ({ props, user }) => {
    renderWithProviders(<DatePicker {...props} />);
    expect(screen.getByTestId("CloseIcon")).toBeInTheDocument();
    await user.click(screen.getByTestId("CloseIcon"));
    expect(props.onCancel).toHaveBeenCalled();
  });

  it<LocalTestContext>("should call onSave", async ({ props, user }) => {
    renderWithProviders(<DatePicker {...props} />);
    expect(screen.getByTestId("CalendarCheckIcon")).toBeInTheDocument();
    await user.click(screen.getByTestId("CalendarCheckIcon"));
    expect(props.onSave).toHaveBeenCalled();
  });
});
