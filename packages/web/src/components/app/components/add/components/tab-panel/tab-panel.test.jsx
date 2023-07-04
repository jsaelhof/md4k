import { render, screen } from "@testing-library/react";
import TabPanel from "./tab-panel";

describe("tab-panel", () => {
  it("should render the panel with children", () => {
    render(
      <TabPanel tabId="123" hidden={false}>
        <div>Test Children</div>
      </TabPanel>
    );
    expect(screen.getByText("Test Children")).toBeInTheDocument();
    expect(screen.getByRole("tabpanel")).toHaveAttribute("id", "tabpanel-123");
  });

  it("should render hidden", () => {
    render(
      <TabPanel tabId="123" hidden={true}>
        <div>Test Children</div>
      </TabPanel>
    );
    expect(screen.getByRole("tabpanel", { hidden: true })).toHaveAttribute(
      "id",
      "tabpanel-123"
    );
  });
});
