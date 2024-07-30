import { StyledButton } from "./Button.styles";
import { FC } from "react";
import { IButton } from "./Button.types";

const Button: FC<IButton> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
