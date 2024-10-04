import React, { InputHTMLAttributes, useState } from "react";
import styled from "styled-components";
import Typography from "../typography";
import { Colors } from "constants/colors";
import Info from "components/info";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  status?: string; //error
  disabled?: boolean;
  padding?: string;
  info?: string;
}
const TextInput = ({
  label,
  required,
  status = "default",
  disabled,
  padding,
  info = "",

  ...rest
}: IProps) => {
  const [focused, setFocused] = useState(false);
  return (
    <Container>
      {label && (
        <LabelContainer>
          <Typography color={"#5D6B82"} weight="medium" align="left">
            {label}
          </Typography>
          {info?.length > 0 && <Info text={info} />}
        </LabelContainer>
      )}
      <InputContainer
        status={status}
        focused={focused ? "true" : "false"}
        padding={padding}
        disabled={disabled ? "true" : "false"}
      >
        <Input
          status={status}
          {...rest}
          onFocus={() => {
            setFocused(true);
          }}
          disabled={disabled}
          onBlur={() => setFocused(false)}
        />
      </InputContainer>
    </Container>
  );
};

export default TextInput;

const Container = styled.div`
  position: relative;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
`;

const InputContainer = styled.div<{
  status?: string;
  focused?: string;
  padding?: string;
  disabled?: string;
}>`
  width: 100%;
  padding: ${(props) => (props.padding ? props.padding : "2rem 1.6rem")};
  background-color: ${(props) =>
    props.disabled === "true" ? "#F6F8FA" : "transparent"};
  border: 1px solid #e2e4e9;
  border-radius: 0.8rem;
  transition: ease all 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input<{ status?: string }>`
  font-family: "Switzer", sans-serif;
  width: 100%;
  outline: none;
  background: none;
  border: none;
  color: ${Colors.D700};
  font-family: "Inter", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6rem;
  &::placeholder {
    color: ${Colors.D80};
  }
`;
