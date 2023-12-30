import { PropsWithChildren, ReactElement } from "react";

export type TabPanelProps = PropsWithChildren<{
  tabId: string;
  hidden: boolean;
}>;

const TabPanel = ({ tabId, hidden, children }: TabPanelProps): ReactElement => (
  <div
    role="tabpanel"
    hidden={hidden}
    id={`tabpanel-${tabId}`}
    aria-labelledby={`tab-${tabId}`}
  >
    {children}
  </div>
);

export default TabPanel;
