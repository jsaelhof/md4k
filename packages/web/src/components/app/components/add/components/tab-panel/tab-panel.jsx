const TabPanel = ({ tabId, hidden, children }) => (
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
