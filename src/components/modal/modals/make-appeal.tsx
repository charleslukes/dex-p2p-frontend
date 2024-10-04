import React, { useState } from "react";
import ModalTemplate from "../modal-template";
import Typography from "components/typography";
import styled from "styled-components";

interface IProps {
  OnClose: () => void;
  OnConfirm: () => void;
  appeals: string[];
  selectedAppeal: string;
  OnSelectAppeal: (value: string) => void;
}
const MakeAppeal = ({
  OnClose,
  OnConfirm,
  appeals,
  selectedAppeal,
  OnSelectAppeal
}: IProps) => {
  return (
    <ModalTemplate
      OnClose={OnClose}
      OnConfirm={OnConfirm}
      cancelText="Cancel"
      confirmText="Confirm Appeal"
      confirmDisabled={selectedAppeal === ""}
    >
      <>
        <Typography align="center" size="4xl" weight="medium" mb="0.8">
          Make an appeal
        </Typography>
        <ContentText>
          <Typography color="#959595" align="center">
            Kindly select the appropriate issue related to you
          </Typography>
        </ContentText>
        <AppealList>
          {appeals.map((appeal, i) => {
            return (
              <AppealItem
                selected={selectedAppeal === appeal ? "true" : "false"}
                key={i}
                onClick={() => {
                  OnSelectAppeal(appeal);
                }}
              >
                <Typography size="lg" weight="medium" color="#354764">
                  {appeal}
                </Typography>
              </AppealItem>
            );
          })}
        </AppealList>
      </>
    </ModalTemplate>
  );
};

export default MakeAppeal;

const ContentText = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3.2rem;
`;

const AppealList = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 1.6rem;
`;

const AppealItem = styled.div<{ selected: string }>`
  padding: 2.4rem 2rem;
  border-radius: 1rem;
  border: 1px solid
    ${(props) => (props.selected === "true" ? "#3757C9" : "#dfe2e6")};
  box-shadow: 0px 1px 2px 0px rgba(228, 229, 231, 0.24);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.selected === "true" ? "#EBEEFA" : "white"};
`;
