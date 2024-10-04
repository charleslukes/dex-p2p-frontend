import React from "react";
import ModalTemplate from "../modal-template";
import Typography from "components/typography";
import styled from "styled-components";
import Copy from "components/copy";
import Tick from "images/png/tick.png";

interface IProps {
  OnClose: () => void;
  OnConfirm: () => void;
  amount: number;
  acctName: string;
  acctNo: string;
  bankName: string;
}
const TicketGenerated = ({
  OnClose,
  OnConfirm,
  amount = 1200,
  acctName,
  acctNo,
  bankName
}: IProps) => {
  return (
    <ModalTemplate
      OnClose={OnClose}
      OnConfirm={OnConfirm}
      cancelText="Cancel"
      confirmText="I have paid"
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
          Order Ticket Generated!
        </Typography>
        <Typography align="center" mb="4.8" color="#959595">
          Make payment into the account details below
        </Typography>
        <Typography
          mb="3.2"
          align="center"
          color="#3757C9"
          size="4xl"
          weight="semibold"
        >
          ₦{amount.toLocaleString()}
        </Typography>
        <BulueContainer>
          <TicketKey>
            <Typography size="lg" color="#959595">
              Account Name
            </Typography>
          </TicketKey>
          <TicketValue>
            <Typography color="#20232D" size="lg" weight="semibold">
              {acctName}
            </Typography>
          </TicketValue>
          <TicketKey>
            <Typography size="lg" color="#959595">
              Account Number
            </Typography>
          </TicketKey>
          <TicketValue>
            <Copy text={acctNo} />
            <Typography color="#20232D" size="lg" weight="semibold" ml="1.2">
              {acctNo}
            </Typography>
          </TicketValue>
          <TicketKey>
            <Typography size="lg" color="#959595">
              Bank Name
            </Typography>
          </TicketKey>
          <TicketValue>
            <Typography color="#20232D" size="lg" weight="semibold">
              {bankName}
            </Typography>
          </TicketValue>
        </BulueContainer>
      </Body>
    </ModalTemplate>
  );
};

export default TicketGenerated;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderImg = styled.img`
  width: 9.6rem;
  height: 9.6rem;
  margin-bottom: 2.8rem;
  margin-left: auto;
  margin-right: auto;
`;
const BulueContainer = styled.div`
  width: 100%;
  padding: 1.6rem;
  border-radius: 0.8rem;
  background-color: #ebeefa;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  grid-row-gap: 2.4rem;
`;

const TicketKey = styled.div`
  width: 100%;
`;

const TicketValue = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;
