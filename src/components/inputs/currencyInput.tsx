import Typography from "components/typography";
import { Countries } from "constants/countries";
import { useClickOutside } from "hooks/UseClickOutside";
import React, { InputHTMLAttributes, useRef, useState } from "react";
import styled from "styled-components";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultCountry?: number;
  onChangeCountry: (value: number) => void;
}
const CurrencyInput = ({
  defaultCountry = 0,
  onChangeCountry,
  ...rest
}: IProps) => {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);

  const ref = useRef(null);

  useClickOutside(ref, () => {
    setOpen(false);
  });
  return (
    <Container>
      <InputArea>
        <Typography lh="2" mr="0.5" color="#868C98">
          {Countries[selectedCountry].currency.symbol}
        </Typography>
        <Input placeholder="0.00" {...rest} />
      </InputArea>
      <CurrecncyDropdown
        onClick={() => {
          setOpen(!open);
        }}
      >
        <CurrencyIcon
          src={`data:image/png;base64,${Countries[selectedCountry].flag}`}
        />
        <Typography>{Countries[selectedCountry].currency.code}</Typography>
        <Caret isactive={open ? "true" : "false"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M14.248 6.75L8.99805 11.25L3.74805 6.75"
              stroke="#525866"
              stroke-width="1.125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Caret>
      </CurrecncyDropdown>
      {open && (
        <Drop ref={ref}>
          {Countries?.map((country, i) => {
            return (
              <DropItem
                key={i}
                active={selectedCountry === i ? "true" : "false"}
                onClick={() => {
                  setSelectedCountry(i);
                  onChangeCountry(i);
                  setOpen(false);
                }}
              >
                <CurrencyIcon src={`data:image/png;base64,${country.flag}`} />
                <Typography lh="2" mr="0.5" color="#868C98">
                  {country.currency.symbol}
                </Typography>
                <Typography size="s">{country.currency.code}</Typography>
              </DropItem>
            );
          })}
        </Drop>
      )}
    </Container>
  );
};

export default CurrencyInput;

const Container = styled.div`
  width: 100%;
  border: 1px solid #e2e4e9;
  border-radius: 1rem;
  display: flex;
  position: relative;
`;

const InputArea = styled.div`
  width: 65%;
  padding: 1rem;
  display: flex;
  border-right: 1px solid #e2e4e9;
`;

const Input = styled.input`
  all: unset;
  font-size: 1.4rem;
  line-height: 2rem;
  &::placeholder {
    color: #868c98;
  }
`;

const CurrecncyDropdown = styled.div`
  width: 35%;
  cursor: pointer;
  padding: 1rem;
  position: relative;
  display: flex;
  align-items: center;
`;

const CurrencyIcon = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.8rem;
  background-color: gray;
`;

const Caret = styled.div<{ isactive: string }>`
  transform: ${(props) => (props.isactive === "true" ? "rotate(180deg)" : "")};
  transition: ease-in-out 0.2s all;
  width: 1.8rem;
`;

const Drop = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 0.8rem;
  box-shadow: 0px 4px 8px 7px rgba(34, 34, 34, 0.1);
  height: fit-content;
  padding: 0.6rem;
  margin-top: 0.8rem;
  max-height: 20rem;
  overflow: scroll;
  z-index: 99;
  background-color: white;
  top: 100%;
`;

const DropItem = styled.div<{ active: string }>`
  cursor: pointer;
  border-radius: 0.8rem;
  padding: 0.8rem 0.7rem;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.active === "true" ? "" : "")};
`;
