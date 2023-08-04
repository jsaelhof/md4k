import { ReactElement } from "react";
import { ButtonComp, buttonStyles } from "./Button.styles";

export type ButtonProps = {
  label: string;
};

export const Button = ({ label }: ButtonProps): ReactElement => {
  return <ButtonComp className={buttonStyles()}>{label}</ButtonComp>;
};
