import React, { useState } from "react";
import styled from "styled-components";

import PaymentDropdown from "./payment-dropdown";
import AmountSelector from "./amountSelector";
import TokenSelector from "./tokenSelector";
import Filter from "./filter";

interface IProps {
  selectedToken: string;
  setSelectedToken: (value: string) => void;
  selectedPayment: string;
  setSelectedPayment: (value: string) => void;
  amount: string;
  onChangeAmount: (amount: string) => void;
  onChangeCurrency: (currency: number) => void;
  defaultCurrency: number;
}
const TableHeader = ({
  selectedToken,
  setSelectedToken,
  setSelectedPayment,
  selectedPayment,
  amount,
  onChangeAmount,
  onChangeCurrency,
  defaultCurrency
}: IProps) => {
  return (
    <Container>
      <TokenSelector
        defaultState={selectedToken}
        onchange={(value) => setSelectedToken(value)}
      />
      <RightSide>
        <Filter />
        <AmountSelector
          value={amount}
          setValue={(value) => {
            onChangeAmount(value);
          }}
          setCountryIndex={(i) => onChangeCurrency(i)}
          defaultCurrency={defaultCurrency}
        />
        <PaymentDropdown
          selectItem={(value) => setSelectedPayment(value)}
          selectedItem={selectedPayment}
        />
      </RightSide>
    </Container>
  );
};

export default TableHeader;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

const RightSide = styled.div`
  display: flex;
  align-items: end;
`;
