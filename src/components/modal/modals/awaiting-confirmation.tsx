import React, { useState } from "react";
import ModalTemplate from "../modal-template";
import Typography from "components/typography";
import styled from "styled-components";
import { formatSeconds } from "utils/formatSecconds";

interface IProps {
  OnClose: () => void;
  OnConfirm: () => void;
  setConfirmation: (value: boolean) => void;
  title: string;
  description: string;
  cancelText: string;
  confirmText: string;
}
const AwaitingConfirmation = ({
  OnClose,
  OnConfirm,
  setConfirmation,
  title,
  description,
  cancelText,
  confirmText
}: IProps) => {
  const [seconds, setSeconds] = useState(5); //300
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const countdown = (seconds: number, onComplete: () => void) => {
    let remainingSeconds = seconds;

    if (remainingSeconds <= 0) {
      return;
    }

    const intervalId = setInterval(() => {
      remainingSeconds -= 1;
      setSeconds(remainingSeconds);

      if (remainingSeconds <= 0) {
        clearInterval(intervalId);
        onComplete();
      }
    }, 1000);
    return () => clearInterval(intervalId);
  };

  countdown(seconds, () => setButtonDisabled(false));

  const TransactionSucess = () => {
    setConfirmation(true);
  };

  return (
    <ModalTemplate
      OnClose={OnClose}
      OnConfirm={OnConfirm}
      cancelText={cancelText}
      confirmText={confirmText}
      confirmDisabled={buttonDisabled}
    >
      <Body>
        <Typography
          align="center"
          mb="0.8"
          size="4xl"
          color="#140D04"
          weight="medium"
        >
          {title}
        </Typography>
        <ContentText>
          <Typography align="center" color="#959595">
            {description}
          </Typography>
        </ContentText>
        <Typography align="center" size="4xl" color="#263F67" weight="semibold">
          {formatSeconds(seconds)}
        </Typography>
      </Body>
    </ModalTemplate>
  );
};

export default AwaitingConfirmation;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentText = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3.2rem;
`;
