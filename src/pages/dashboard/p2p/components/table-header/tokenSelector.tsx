import Typography from "components/typography";
import { Colors } from "constants/colors";
import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as USDTIcon } from "images/svg/currency/usdt-icon.svg";
import { ReactComponent as USDCIcon } from "images/svg/currency/usdc-icon.svg";

interface IProps {
  onchange: (value: string) => void;
  defaultState: string;
}
const TokenSelector = ({ onchange, defaultState = "usdt" }: IProps) => {
  const [active, setActive] = useState(defaultState);
  return (
    <Container>
      <CurrencyItem
        active={active === "usdt" ? "true" : "false"}
        onClick={() => {
          setActive("usdt");
          onchange("usdt");
        }}
      >
        <Typography size="1.5rem">USDT</Typography>
        <CurrencyIcon>
          <USDTIcon />
        </CurrencyIcon>
      </CurrencyItem>
      <CurrencyItem
        active={active === "usdc" ? "true" : "false"}
        onClick={() => {
          setActive("usdc");
          onchange("usdc");
        }}
      >
        <Typography size="1.5rem">USDC</Typography>
        <CurrencyIcon>
          <USDCIcon />
        </CurrencyIcon>
      </CurrencyItem>
    </Container>
  );
};

export default TokenSelector;

const Container = styled.div`
  width: 40%;
  display: flex;
  align-items: start;
  border-bottom: 1px solid ${Colors.D40};
`;

const CurrencyItem = styled.div<{ active: string }>`
  display: flex;
  color: #6b788e;
  margin-right: 5rem;
  border-bottom: ${(props) => props.active === "true" && "2px solid #3757c9"};
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  height: 3rem;
`;

const CurrencyIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin-left: 0.5rem;
`;
