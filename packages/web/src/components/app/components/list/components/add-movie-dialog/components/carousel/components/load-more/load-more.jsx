import { CloudDownload, Sync } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Layout } from "./load-more.styles";

// This is loaded as a slide in the carousel and requires the extra div around it
// in order for the Layout around the button to position the button itself.
const LoadMore = ({ searching, disabled, onLoadMore }) => (
  <div>
    <Layout>
      <Button
        color="primary"
        variant="contained"
        startIcon={searching ? <Sync /> : <CloudDownload />}
        disabled={disabled}
        onClick={onLoadMore}
      >
        Load More
      </Button>
    </Layout>
  </div>
);

export default LoadMore;
