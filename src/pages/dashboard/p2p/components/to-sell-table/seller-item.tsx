import PrimaryButton from "components/buttons/primaryButton";
import Typography from "components/typography";
import React from "react";
import styled from "styled-components";
import { ReactComponent as TransferIcon } from "images/svg/transferIcon.svg";
import { Colors } from "constants/colors";
import { useNavigate } from "react-router-dom";

const SellerItem = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <td>
        <div>
          <Typography weight="semibold" size="lg" color="#20232D">
            DXP121
          </Typography>
          <Typography mt="1.5" color="#868C98">
            201 Orders | 82% Completion
          </Typography>
        </div>
      </td>
      <td>
        <div>
          <Typography weight="semibold" size="lg" color="#20232D" mr="5">
            ₦1,848,000
          </Typography>
          <Typography mt="1.5" color="#868C98" mr="5">
            ₦1,500/USDT
          </Typography>
        </div>
      </td>
      <td>
        <div>
          <LimitAvailable>
            <Typography color="#868C98">Available</Typography>
            <Typography color="#0A0D14" weight="medium">
              1232 USDT
            </Typography>
          </LimitAvailable>
          <Spacer />
          <LimitAvailable>
            <Typography color="#868C98">Limit</Typography>
            <Typography color="#0A0D14" weight="medium">
              ₦200,000 - ₦800,000
            </Typography>
          </LimitAvailable>
        </div>
      </td>
      <td>
        <PaymentDiv>
          <PaymentIcon>
            <TransferIcon />
          </PaymentIcon>
          <Typography color="#0A0D14" weight="medium" ml="1">
            Bank Transfer
          </Typography>
        </PaymentDiv>
      </td>
      <td>
        <ButtonContainer>
          <PrimaryButton
            text="Sell"
            variant="danger"
            onClick={() => {
              navigate("/p2p/sell/details");
            }}
          />
        </ButtonContainer>
      </td>
    </Container>
  );
};

export default SellerItem;

const Container = styled.tr`
  align-items: center;

  border-bottom: 1px solid ${Colors.D40};
`;

const ButtonContainer = styled.div`
  width: fit-content;
`;

const LimitAvailable = styled.div`
  display: grid;
  grid-template-columns: 8rem auto;
`;

const Spacer = styled.div`
  height: 1.5rem;
`;

const PaymentDiv = styled.div`
  display: flex;
  align-items: center;
`;
const PaymentIcon = styled.div`
  width: 2rem;
  height: 2rem;
  color: ${Colors.D300};
`;
