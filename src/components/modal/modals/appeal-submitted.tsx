import React from "react";
import ModalTemplate from "../modal-template";
import Typography from "components/typography";
import styled from "styled-components";

import Tick from "images/png/tick.png";
import { useNavigate } from "react-router-dom";

interface IProps {
  appeal: string;
  appealId: string;
}
const AppealSubmitted = ({ appeal, appealId }: IProps) => {
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
          Appeal Submitted
        </Typography>
        <ContentText>
          <Typography align="center" color="#959595">
            Your appeal number {appealId} has been successfully submitted. Will
            be addressed within 3 days.
          </Typography>
        </ContentText>
        <AppealItem>
          <Typography size="lg" weight="medium" color="#354764">
            {appeal}
          </Typography>
        </AppealItem>
      </Body>
    </ModalTemplate>
  );
};

export default AppealSubmitted;

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
const ContentText = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3.2rem;
`;

const AppealItem = styled.div`
  padding: 2.4rem 2rem;
  border-radius: 1rem;
  border: 1px solid #3757c9;
  box-shadow: 0px 1px 2px 0px rgba(228, 229, 231, 0.24);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: #ebeefa;
`;
