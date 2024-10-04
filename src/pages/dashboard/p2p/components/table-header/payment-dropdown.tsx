import React from "react";
import styled from "styled-components";
import Dropdown from "components/inputs/dropdown";

interface IProps {
  selectedItem: string;
  selectItem: (item: string) => void;
}
const PaymentDropdown = ({ selectedItem, selectItem }: IProps) => {
  return (
    <Container>
      <Dropdown
        placeholder="All Payments"
        chosenItem={selectedItem}
        selectItem={(value) => selectItem(value)}
        items={["Bank Transfer"]}
        label="Payment Method"
        info="////"
      />
    </Container>
  );
};

export default PaymentDropdown;

const Container = styled.div`
  width: 18rem;
`;
