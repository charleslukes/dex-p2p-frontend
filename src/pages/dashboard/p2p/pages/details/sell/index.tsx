import PrimaryButton from "components/buttons/primaryButton";
import Dropdown from "components/inputs/dropdown";
import TextInput from "components/inputs/text-input";
import DashboardLayout from "components/layouts/dashboardLayout";
import ModalLayout from "components/modal/modal-layout";
import AppealSubmitted from "components/modal/modals/appeal-submitted";
import AwaitingConfirmation from "components/modal/modals/awaiting-confirmation";
import MakeAppeal from "components/modal/modals/make-appeal";
import OrderRequest from "components/modal/modals/order-request";
import TransactionSuccess from "components/modal/modals/transaction-success";
import ValidateOrder from "components/modal/modals/validate-order";
import Status from "components/status";
import Typography from "components/typography";
import { Colors } from "constants/colors";
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SellDetails = () => {
  const navigate = useNavigate();

  const [usdtAmount, setUsdtAmount] = useState("");

  const [payment, setPayment] = useState("All Payments");

  const PaymentMethodList = ["Bank Transfer", "All Payments"];

  const ButtonUndisabled = useMemo(() => usdtAmount.length > 0, [usdtAmount]);

  const [modalOpen, setModalOpen] = useState(false);

  const [orderRequested, setOrderRequested] = useState(false);

  const [awaitingConfirmation, setawaitingConfirmation] = useState(false);

  const [makeAppeal, setMakeAppeal] = useState(false);

  const [selectedAppeal, setSelectedAppeal] = useState("");

  const [appealConfirmed, setAppealConfirmed] = useState(false);

  const [fundsTransferred, setFundsTransferred] = useState(false);

  const appealList = [
    "I have not received any payment ",
    "I have been blocked by the buyer"
  ];

  const OnBuy = () => {
    setModalOpen(true);
  };

  //stake now
  const OnValidateOrder = () => {
    setOrderRequested(true);
  };

  // accept Request
  const OnRequestAccepted = () => {
    setawaitingConfirmation(true);
  };

  //appeal
  const OnMakeAppeal = () => {
    setMakeAppeal(true);
  };

  //confirm appeal
  const OnConfirmAppeal = () => {
    setAppealConfirmed(true);
  };
  return (
    <DashboardLayout>
      <Typography variant="h1" weight="semibold" size="4xl" mb="2">
        Details
      </Typography>
      <Body>
        <BorderedCard>
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
              text="Sell"
              disabled={!ButtonUndisabled}
              onClick={OnBuy}
            />
            <PrimaryButton
              text="Go back"
              variant="outline"
              onClick={() => navigate(-1)}
            />
          </Buttons>
        </BorderedCard>
        <BorderedCard>
          <AdvertiserHeader>
            <Typography
              size="3xl"
              weight="semibold"
              color={Colors.D600}
              mr="1.8"
            >
              Advertiser Details
            </Typography>
            <Status status="active" />
          </AdvertiserHeader>
          <DetailsGrid>
            <DetailKey>
              <Typography size="lg" color="#959595">
                Advertiser ID
              </Typography>
            </DetailKey>
            <DetailValue>
              <Typography size="lg" color="#20232D" weight="semibold">
                DXP121
              </Typography>
            </DetailValue>{" "}
            <DetailKey>
              <Typography size="lg" color="#959595">
                Wallet Address
              </Typography>
            </DetailKey>
            <DetailValue>
              <Typography size="lg" color="#20232D" weight="semibold">
                3xdERgwjhshm9oID
              </Typography>
            </DetailValue>{" "}
            <DetailKey>
              <Typography size="lg" color="#959595">
                Price
              </Typography>
            </DetailKey>
            <DetailValue>
              <Typography size="lg" color="#20232D" weight="semibold">
                3,000,000 NGN
              </Typography>
            </DetailValue>{" "}
            <DetailKey>
              <Typography size="lg" color="#959595">
                Available
              </Typography>
            </DetailKey>
            <DetailValue>
              <Typography size="lg" color="#20232D" weight="semibold">
                1200 USDT
              </Typography>
            </DetailValue>{" "}
            <DetailKey>
              <Typography size="lg" color="#959595">
                Limit
              </Typography>
            </DetailKey>
            <DetailValue>
              <Typography size="lg" color="#20232D" weight="semibold">
                ₦200,000 - ₦800,000
              </Typography>
            </DetailValue>{" "}
            <DetailKey>
              <Typography size="lg" color="#959595">
                Payment Method
              </Typography>
            </DetailKey>
            <DetailValue>
              <Typography size="lg" color="#20232D" weight="semibold">
                Bank Transfer
              </Typography>
            </DetailValue>{" "}
            <DetailKey>
              <Typography size="lg" color="#959595">
                Time Window
              </Typography>
            </DetailKey>
            <DetailValue>
              <Typography size="lg" color="#20232D" weight="semibold">
                10 Minutes
              </Typography>
            </DetailValue>
          </DetailsGrid>
          <NoteContainer>
            <Typography color="#3757C9" weight="semibold" size="lg" mb="1.1">
              PLEASE NOTE!
            </Typography>
            <Typography weight="medium" color="#505F79" fontStyle="italic">
              You are required to stake the exact amount of coin that you want
              to buy before your order can be valid.
            </Typography>
          </NoteContainer>
        </BorderedCard>
      </Body>
      <ModalLayout closeModal={() => setModalOpen(false)} isActive={modalOpen}>
        {fundsTransferred ? (
          <TransactionSuccess amount={1200} buy={false} />
        ) : appealConfirmed && selectedAppeal !== "" ? (
          <AppealSubmitted appeal={selectedAppeal} appealId="#3456" />
        ) : makeAppeal ? (
          <MakeAppeal
            OnClose={() => setMakeAppeal(false)}
            OnConfirm={OnConfirmAppeal}
            selectedAppeal={selectedAppeal}
            OnSelectAppeal={(appeal) => setSelectedAppeal(appeal)}
            appeals={appealList}
          />
        ) : awaitingConfirmation ? (
          <AwaitingConfirmation
            OnClose={OnMakeAppeal}
            OnConfirm={() => setFundsTransferred(true)}
            setConfirmation={(value) => {}}
            title="Awaiting Payment"
            description="Please take a moment while the buyer processes your payment."
            cancelText="Appeal"
            confirmText="Confirm payment"
          />
        ) : orderRequested ? (
          <OrderRequest
            OnClose={() => setModalOpen(false)}
            OnConfirm={OnRequestAccepted}
            amount={Number(usdtAmount)}
          />
        ) : (
          <ValidateOrder
            OnClose={() => setModalOpen(false)}
            OnConfirm={OnValidateOrder}
            amount={Number(usdtAmount)}
          />
        )}
      </ModalLayout>
    </DashboardLayout>
  );
};

export default SellDetails;

const Body = styled.div`
  width: 100%;
  height: 90%;
  max-height: 900px;
  display: grid;
  grid-template-columns: 45% 45%;
  align-items: center;
  justify-content: space-between;
`;

const BorderedCard = styled.div`
  padding: 4rem 3rem;
  width: 100%;
  height: 100%;
  border-radius: 1.6rem;
  border: 1px solid ${Colors.D30};
  display: flex;
  flex-direction: column;
`;

const InputItem = styled.div`
  margin-bottom: 3.2rem;
`;

const Buttons = styled.div`
  margin-top: auto;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 2.2rem;
`;

const AdvertiserHeader = styled.div`
  display: flex;
  margin-bottom: 3.2rem;
  align-items: center;
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-content: space-between;
  grid-row-gap: 4rem;
`;

const DetailKey = styled.div`
  width: 100%;
`;
const DetailValue = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const NoteContainer = styled.div`
  margin-top: auto;
  padding: 2.2rem 2.4rem;
  border-radius: 0.8rem;
  background: ${Colors.D50};
`;
