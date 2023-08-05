import { DetailButton, Layout } from "./actions.styles";
import TelevisionPlay from "mdi-material-ui/TelevisionPlay";
import TelevisionOff from "mdi-material-ui/TelevisionOff";

export const Actions = ({ hasTrailer, onPlayTrailer, children }) => (
  <Layout>
    {hasTrailer ? (
      <DetailButton
        color="primary"
        startIcon={<TelevisionPlay />}
        onClick={onPlayTrailer}
      >
        Watch Trailer
      </DetailButton>
    ) : (
      <DetailButton
        color="primary"
        startIcon={<TelevisionOff />}
        onClick={onPlayTrailer}
        disabled={true}
      >
        No Trailer
      </DetailButton>
    )}

    {children}
  </Layout>
);
