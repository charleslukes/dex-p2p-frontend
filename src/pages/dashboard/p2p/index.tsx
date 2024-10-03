import DashboardLayout from "components/layouts/dashboardLayout";
import Typography from "components/typography";
import React, { useState } from "react";
import styled from "styled-components";
import Tab from "./components/tab";
import PrimaryButton from "components/buttons/primaryButton";
import { ReactComponent as PlusIcon } from "images/svg/plus.svg";

import ToBuyTable from "./components/to-buy-table";
import ToSellTable from "./components/to-sell-table";
import { useNavigate } from "react-router-dom";

const P2pPage = () => {
  const [buy, setBuy] = useState(true);
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <PageHeader>
        <Typography variant="h1" weight="semibold" size="4xl">
          P2P
        </Typography>
        {!buy && (
          <AdButton>
            <PrimaryButton
              icon={<PlusIcon />}
              iconPosition="left"
              text="Create an ad"
              variant="outline"
              onClick={() => navigate("/p2p/create-ad")}
            />
          </AdButton>
        )}
      </PageHeader>
      <Tab
        onChange={(value) => {
          setBuy(value);
        }}
        defaultState={buy}
      />
      <Table>{buy ? <ToBuyTable /> : <ToSellTable />}</Table>
    </DashboardLayout>
  );
};

export default P2pPage;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
  height: 6rem;
`;

const AdButton = styled.div`
  width: fit-content;
`;

const Table = styled.div`
  width: 100%;
  margin-top: 3rem;
`;
