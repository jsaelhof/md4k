import { CircularProgress } from "@mui/material";
import { EmptyListLayout, Img, Message, Quote } from "./empty-state.styles";
import { type ReactElement, type ReactNode } from "react";

export type EmptyStateProps = {
  imgSrc: string;
  quote?: string;
  message: string | ReactNode;
  content?: ReactNode;
  inProgress?: boolean;
};

const EmptyState = ({
  imgSrc,
  quote,
  message,
  content,
  inProgress = false,
}: EmptyStateProps): ReactElement => (
  <EmptyListLayout>
    <Img src={imgSrc} alt="Empty image" />
    {quote && <Quote>{quote}</Quote>}
    <Message>{message}</Message>
    <div>{inProgress ? <CircularProgress color="secondary" /> : content}</div>
  </EmptyListLayout>
);

export default EmptyState;
