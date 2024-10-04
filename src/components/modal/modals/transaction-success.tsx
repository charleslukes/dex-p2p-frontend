import React from "react";
import ModalTemplate from "../modal-template";
import Typography from "components/typography";
import styled from "styled-components";

import Tick from "images/png/tick.png";
import { useNavigate } from "react-router-dom";

interface IProps {
  amount: number;
  buy?: boolean;
}
const TransactionSuccess = ({ amount, buy = true }: IProps) => {
  const navigate = useNavigate();
  return (
    <ModalTemplate
      OnConfirm={() => {
        navigate("/p2p");
      }}
      confirmText="Back to P2P"
      twoButtons={false}
    >
      <Body>
        <HeaderImg src={Tick} alt="tick" />
        <Typography
          align="center"
          mb="0.8"
          size="4xl"
          color="#140D04"
          weight="medium"
        >
          {amount.toLocaleString()} USDT {buy ? "Received" : "Released"}!
        </Typography>
        <Typography align="center" color="#959595">
          Your transaction has been completed.
        </Typography>
      </Body>
    </ModalTemplate>
  );
};

export default TransactionSuccess;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 56rem;
`;
const HeaderImg = styled.img`
  width: 9.6rem;
  height: 9.6rem;
  margin-bottom: 2.8rem;
  margin-left: auto;
  margin-right: auto;
`;
