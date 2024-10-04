import React from "react";
import ModalTemplate from "../modal-template";
import Typography from "components/typography";
import styled from "styled-components";

interface IProps {
  OnClose: () => void;
  OnConfirm: () => void;
  amount: number;
}
const OrderRequest = ({ OnClose, OnConfirm, amount = 1200 }: IProps) => {
  return (
    <ModalTemplate
      OnClose={OnClose}
      OnConfirm={OnConfirm}
      cancelText="Cancel"
      confirmText="Accept"
    >
      <>
        <Typography align="center" size="4xl" weight="medium" mb="0.8">
          Order Request
        </Typography>
        <ContentText>
          <Typography color="#959595" align="center">
            You need to confirm request before you can proceed
          </Typography>
        </ContentText>
        <Typography align="center" color="#3757C9" size="4xl" weight="semibold">
          {amount} USDT
        </Typography>
      </>
    </ModalTemplate>
  );
};

export default OrderRequest;

const ContentText = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3.2rem;
`;
