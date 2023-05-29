import { Skeleton } from "@mui/material";
import CloseThick from "mdi-material-ui/CloseThick";

import {
  Actions,
  BackdropWrapper,
  CloseButton,
  FullDetailLayout,
  MovieData,
  MovieInfo,
  MovieTitle,
  PlotLayout,
  Poster,
} from "./full-detail.styles";

export const FullDetailSkeleton = ({ showCloseButton, small, onClose }) => (
  <FullDetailLayout>
    {showCloseButton && (
      <CloseButton onClick={onClose}>
        <CloseThick />
      </CloseButton>
    )}

    <BackdropWrapper>
      <Skeleton
        data-testid="skeleton"
        variant="rectangular"
        width="100%"
        height="100%"
        animation="wave"
      />
    </BackdropWrapper>

    <MovieInfo>
      <Poster>
        <Skeleton
          data-testid="skeleton"
          variant="rectangular"
          width={(small ? 300 : 400) * 0.64}
          height={small ? 300 : 400}
          animation="wave"
        />
      </Poster>

      <MovieTitle>
        <Skeleton
          data-testid="skeleton"
          variant="text"
          width={300}
          height={60}
          animation="wave"
        />
      </MovieTitle>

      <MovieData>
        <Skeleton
          data-testid="skeleton"
          variant="text"
          width={50}
          height={40}
          animation="wave"
        />
        <Skeleton
          data-testid="skeleton"
          variant="text"
          width={50}
          height={40}
          animation="wave"
        />
        <Skeleton
          data-testid="skeleton"
          variant="text"
          width={50}
          height={40}
          animation="wave"
        />
      </MovieData>

      <PlotLayout>
        <Skeleton
          data-testid="skeleton"
          variant="text"
          width="100%"
          height={30}
          animation="wave"
        />
        <Skeleton
          data-testid="skeleton"
          variant="text"
          width="100%"
          height={30}
          animation="wave"
        />
        <Skeleton
          data-testid="skeleton"
          variant="text"
          width="100%"
          height={30}
          animation="wave"
        />
      </PlotLayout>

      <Actions>
        <Skeleton
          data-testid="skeleton"
          variant="text"
          width={100}
          height={40}
          animation="wave"
        />
        <Skeleton
          data-testid="skeleton"
          variant="text"
          width={100}
          height={40}
          animation="wave"
        />
      </Actions>
    </MovieInfo>
  </FullDetailLayout>
);
