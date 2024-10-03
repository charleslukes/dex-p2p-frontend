import Typography from "components/typography";
import React from "react";
import styled from "styled-components";
import { ReactComponent as InfoIcon } from "images/svg/info-icon.svg";
import Dropdown from "components/inputs/dropdown";

interface IProps {
  selectedItem: string;
  selectItem: (item: string) => void;
}
const PaymentDropdown = ({ selectedItem, selectItem }: IProps) => {
  return (
    <Container>
      <Label>
        <Typography weight="medium" mr="0.4">
          Payment Method
        </Typography>
        <InfoIconContainer>
          <InfoIcon />
        </InfoIconContainer>
      </Label>
      <Dropdown
        placeholder="All Payments"
        chosenItem={selectedItem}
        selectItem={(value) => selectItem(value)}
        items={["Bank Transfer"]}
      />
    </Container>
  );
};

export default PaymentDropdown;

const Container = styled.div`
  width: 18rem;
`;

const Label = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
`;

const InfoIconContainer = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;
  color: #cdd0d5;
`;
