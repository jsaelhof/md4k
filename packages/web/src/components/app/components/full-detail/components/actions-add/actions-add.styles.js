import { styled } from "@mui/material";

export const Actions = styled("div")`
  grid-area: actions;
  display: grid;
  grid-auto-flow: column;
  column-gap: ${({ theme }) => theme.spacing(4)};
  justify-content: space-between;

  @media (max-width: 660px) {
    justify-content: center;
  }

  @media (max-width: 450px) {
    button {
      display: grid;
    }

    span {
      justify-items: center;
      margin-left: 0;
      margin-right: 0;
    }
  }
`;
