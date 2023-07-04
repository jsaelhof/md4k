import { Button } from "@mui/material";
import EmptyState from "../../../../../empty-state/empty-state";
import { useNavigate } from "react-router-dom";

const EmptyList = () => {
  const navigate = useNavigate();

  return (
    <EmptyState
      imgSrc="/images/stormtroopers.png"
      quote="&quot;These aren't the droids we're looking for.&quot;"
      message={
        <>
          There are no movies on this list yet.
          <br />
          Let&apos;s add one now!
        </>
      }
      content={
        <Button
          onClick={() => navigate("/add")}
          variant="outlined"
          color="primary"
        >
          Add a Movie
        </Button>
      }
    />
  );
};

export default EmptyList;
