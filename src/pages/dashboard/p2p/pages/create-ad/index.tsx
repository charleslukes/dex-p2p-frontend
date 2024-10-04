import PrimaryButton from "components/buttons/primaryButton";
import Dropdown from "components/inputs/dropdown";
import TextInput from "components/inputs/text-input";
import DashboardLayout from "components/layouts/dashboardLayout";
import Typography from "components/typography";
import { Colors } from "constants/colors";
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CreateAd = () => {
  const navigate = useNavigate();

  const [usdtAmount, setUsdtAmount] = useState("");
  const [sellRate, setSellRate] = useState("");
  const [payment, setPayment] = useState("All Payments");

  const PaymentMethodList = ["Bank Transfer", "All Payments"];

  const ButtonUndisabled = useMemo(
    () => sellRate.length > 0 && usdtAmount.length > 0,
    [sellRate, usdtAmount]
  );

  const OnCreateAd = () => {
    navigate("/p2p");
  };
  return (
    <DashboardLayout>
      <Typography variant="h1" weight="semibold" size="4xl" mb="2">
        Create AD
      </Typography>
      <Body>
        <OrderBody>
          <Typography size="3xl" weight="semibold" color={Colors.D600} mb="2">
            Order
          </Typography>
          <InputItem>
            <TextInput
              label="How much USDT would you like to buy?"
              placeholder="0.00"
              type="number"
              info="///"
              value={usdtAmount}
              onChange={(e) => setUsdtAmount(e.target.value)}
            />
          </InputItem>
          <InputItem>
            <TextInput
              label="At what rate would you like to sell?"
              placeholder="0.00"
              info="///"
              type="number"
              value={sellRate}
              onChange={(e) => setSellRate(e.target.value)}
            />
          </InputItem>
          <InputItem>
            <TextInput
              label="Naira Equivalent"
              placeholder="All Payments"
              info="///"
              disabled
            />
          </InputItem>
          <InputItem>
            <Dropdown
              placeholder="All Payments"
              label="Select Payment Method"
              info="////"
              padding="2rem 1.6rem"
              items={PaymentMethodList}
              chosenItem={payment}
              selectItem={(value) => setPayment(value)}
            />
          </InputItem>
          <Buttons>
            <PrimaryButton
              text="Create Ad"
              disabled={!ButtonUndisabled}
              onClick={OnCreateAd}
            />
            <PrimaryButton
              text="Go back"
              variant="outline"
              onClick={() => navigate(-1)}
            />
          </Buttons>
        </OrderBody>
      </Body>
    </DashboardLayout>
  );
};

export default CreateAd;

const Body = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OrderBody = styled.div`
  padding: 4rem 3rem;
  width: 58rem;
  border-radius: 1.6rem;
  border: 1px solid ${Colors.D30};
`;

const InputItem = styled.div`
  margin-bottom: 3.2rem;
`;

const Buttons = styled.div`
  margin-top: 2.7rem;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 2.2rem;
`;
