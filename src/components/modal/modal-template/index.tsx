import PrimaryButton from "components/buttons/primaryButton";
import React, { ReactElement } from "react";
import styled from "styled-components";

interface IProps {
  OnClose?: () => void;
  twoButtons?: boolean;
  OnConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  children?: ReactElement;
  confirmDisabled?: boolean;
}
const ModalTemplate = ({
  OnClose = () => {},
  twoButtons = true,
  OnConfirm = () => {},
  confirmText = "Confirm",
  cancelText = "Cancel",
  children,
  confirmDisabled = false
}: IProps) => {
  return (
    <Container>
      <Body>{children}</Body>
      <Buttons two={twoButtons ? "true" : "false"}>
        {twoButtons && (
          <PrimaryButton
            variant="outline"
            text={cancelText}
            onClick={OnClose}
          />
        )}

        <PrimaryButton
          text={confirmText}
          onClick={OnConfirm}
          disabled={confirmDisabled}
        />
      </Buttons>
    </Container>
  );
};

export default ModalTemplate;

const Container = styled.div`
  min-width: 56rem;
  background-color: white;
  border-radius: 0.8rem;
  padding: 2.4rem;
`;

const Body = styled.div`
  margin-bottom: 3.2rem;
`;

const Buttons = styled.div<{ two: string }>`
  width: 100%;
  display: grid;

  grid-template-columns: ${(props) =>
    props.two === "true" ? "45% 45%" : "100%"};
  align-items: center;
  justify-content: space-between;
`;
