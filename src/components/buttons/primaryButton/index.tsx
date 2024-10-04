import React, { ReactElement } from "react";
import styled from "styled-components";

import Typography from "../../typography";
import { Colors } from "constants/colors";
// import Spinner from "components/spinner";

interface IProps extends React.HTMLProps<HTMLButtonElement> {
  text?: string;
  onClick?: () => void;
  variant?: "danger" | "outline";
  loading?: boolean;
  icon?: ReactElement;
  iconPosition?: string;
  inset?: boolean;
}
const PrimaryButton = ({
  text = "Button",
  variant, //danger outline
  onClick = () => {},
  loading,
  disabled,
  iconPosition = "left",
  icon,

  ...rest
}: IProps) => {
  return (
    <Container
      onClick={() => onClick()}
      {...rest}
      disabled={loading || disabled}
      variant={variant}
    >
      {loading ? (
        " <Spinner />"
      ) : (
        <>
          {iconPosition === "left" && icon && (
            <IconContainer position={iconPosition}>{icon}</IconContainer>
          )}
          <Typography weight="medium" size="lg" color="inherit" variant="p">
            {text}
          </Typography>
          {iconPosition === "right" && icon && (
            <IconContainer position={iconPosition}>{icon}</IconContainer>
          )}
        </>
      )}
    </Container>
  );
};

export default PrimaryButton;

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant?: string;
  danger?: string;
}
const Container = styled.button<IButtonProps>`
  all: unset;
  width: 100%;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.variant === "danger"
      ? "#DF1C41"
      : props.variant === "outline"
      ? "transparent"
      : Colors.D300};
  padding: 1.5rem 1.6rem;
  color: ${(props) => (props.variant === "outline" ? Colors.D300 : Colors.D0)};
  border: ${(props) =>
    props.variant === "outline" && `1px solid ${Colors.D300} `};
  border-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
    transform: none;
  }

  transition: all 0.2s ease-in-out;
`;

const IconContainer = styled.div<{ position: string }>`
  margin-left: ${(props) => (props.position === "right" ? "1rem" : "0")};
  margin-right: ${(props) => (props.position === "left" ? "1rem" : "0")};
  width: 2rem;
  height: 2rem;
  color: inherit;
`;
