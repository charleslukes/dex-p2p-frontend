import Typography from "components/typography";
import React from "react";
import styled from "styled-components";
import { ReactComponent as InfoIcon } from "images/svg/info-icon.svg";
import CurrencyInput from "components/inputs/currencyInput";

interface IProps {
  value: string;
  setValue: (value: string) => void;
  setCountryIndex: (value: number) => void;
  defaultCurrency: number;
}
const AmountSelector = ({
  value,
  setValue,
  setCountryIndex,
  defaultCurrency
}: IProps) => {
  return (
    <Container>
      <Label>
        <Typography weight="medium" mr="0.4">
          Amount
        </Typography>
        <InfoIconContainer>
          <InfoIcon />
        </InfoIconContainer>
      </Label>
      <CurrencyInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onChangeCountry={(index) => {
          setCountryIndex(index);
        }}
        defaultCountry={defaultCurrency}
      />
    </Container>
  );
};

export default AmountSelector;

const Container = styled.div`
  width: 30rem;
  margin-right: 3rem;
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
