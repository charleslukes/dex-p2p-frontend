import Typography from "components/typography";
import { Colors } from "constants/colors";
import React, { useState } from "react";
import styled from "styled-components";

interface IProps {
  onChange: (value: boolean) => void;
  defaultState?: boolean;
}
const Tab = ({ onChange, defaultState = false }: IProps) => {
  const [buyActive, setBuyActive] = useState(defaultState);
  return (
    <Container>
      <TabItem
        active={buyActive ? "true" : "false"}
        onClick={() => {
          setBuyActive(true);
          onChange(true);
        }}
      >
        <Typography weight={buyActive ? "semibold" : "regular"}>
          I want to buy
        </Typography>
      </TabItem>
      <TabItem
        active={!buyActive ? "true" : "false"}
        onClick={() => {
          setBuyActive(false);
          onChange(false);
        }}
      >
        <Typography weight={!buyActive ? "semibold" : "regular"}>
          I want to sell
        </Typography>
      </TabItem>
    </Container>
  );
};

export default Tab;

const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  border-radius: 0.8rem;
  background-color: #f9fafb;
  padding: 0.5rem;
  border: 1px solid #f2f4f7;
`;

const TabItem = styled.div<{ active: string }>`
  padding: 1.6rem 4rem;
  color: ${(props) => (props.active === "true" ? Colors.D700 : Colors.D200)};
  background-color: ${(props) =>
    props.active === "true" ? Colors.D0 : "transparent"};
  cursor: pointer;
  border-radius: 0.6rem;
  transition: all 0.2s ease-in-out;
  box-shadow: ${(props) =>
    props.active === "true"
      ? `0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)`
      : ""};
`;
