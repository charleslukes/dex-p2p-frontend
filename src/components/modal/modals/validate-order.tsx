import React from "react";
import ModalTemplate from "../modal-template";
import Typography from "components/typography";
import styled from "styled-components";

interface IProps {
  OnClose: () => void;
  OnConfirm: () => void;
  amount: number;
}
const ValidateOrder = ({ OnClose, OnConfirm, amount = 1200 }: IProps) => {
  return (
    <ModalTemplate
      OnClose={OnClose}
      OnConfirm={OnConfirm}
      cancelText="Cancel Order"
      confirmText="Stake Now"
    >
      <>
        <Typography align="center" size="4xl" weight="medium" mb="0.8">
          Validate Order
        </Typography>
        <ContentText>
          <Typography color="#959595" align="center">
            This amount is staked on the platform and released once the vendor
            confirms payment.
          </Typography>
        </ContentText>
        <StakingContainer>
          <Typography align="center" size="lg" color="#959595" mb="0.8">
            Staking Amount
          </Typography>
          <Typography
            size="lg"
            weight="semibold"
            color="#140D04"
            align="center"
          >
            {amount.toLocaleString()} USDT
          </Typography>
        </StakingContainer>
      </>
    </ModalTemplate>
  );
};

export default ValidateOrder;

const ContentText = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3.2rem;
`;

const StakingContainer = styled.div`
  width: 100%;
  padding: 1.6rem;
  border-radius: 0.8rem;
  background-color: #ebeefa;
`;
