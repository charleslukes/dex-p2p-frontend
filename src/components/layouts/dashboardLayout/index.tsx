import DashboardNavbar from "components/navbar/dashboard-navbar";
import React from "react";
import styled from "styled-components";

interface IProps {
  children?: React.ReactNode;
}
const DashboardLayout = ({ children }: IProps) => {
  return (
    <Main>
      <DashboardNavbar />
      <Body>{children}</Body>
    </Main>
  );
};

export default DashboardLayout;

const Main = styled.main`
  width: 100%;
`;

const Body = styled.div`
  width: 100%;
  height: 91vh;
  padding: 0 8.4rem;
  padding-top: 2rem;
  overflow-x: hidden;
  overflow-y: scroll;
`;
