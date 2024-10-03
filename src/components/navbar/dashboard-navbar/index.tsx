import Logo from "components/logo";
import Typography from "components/typography";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "images/svg/nav-icons/home-icon.svg";
import { ReactComponent as WalletIcon } from "images/svg/nav-icons/wallet-icon.svg";
import { ReactComponent as P2PIcon } from "images/svg/nav-icons/p2p.svg";
import { Colors } from "constants/colors";
import PrimaryButton from "components/buttons/primaryButton";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const NavItemData = [
    {
      name: "Home",
      icon: <HomeIcon />,
      link: "/",
      active: location === "/"
    },
    {
      name: "Wallet",
      icon: <WalletIcon />,
      link: "/wallet",
      active: location === "/wallet"
    },
    {
      name: "P2P",
      icon: <P2PIcon />,
      link: "/p2p",
      active: location.includes("/p2p")
    }
  ];
  return (
    <Container>
      <Logo />
      <NavItemsContainer>
        {NavItemData.map(({ name, icon, link, active }, i) => {
          return (
            <NavItem
              key={i}
              active={active ? "true" : "false"}
              onClick={() => {
                navigate(link);
              }}
            >
              <NavIcon>{icon}</NavIcon>
              <Typography variant="p" ml="0.5">
                {name}
              </Typography>
            </NavItem>
          );
        })}
      </NavItemsContainer>
      <ConnectButton>
        <PrimaryButton text="Connect Wallet" />
      </ConnectButton>
    </Container>
  );
};

export default DashboardNavbar;

const Container = styled.div`
  width: 100%;
  background-color: #010202;
  padding: 1.9rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItemsContainer = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: space-between;
`;

const NavItem = styled.div<{ active: string }>`
  cursor: pointer;
  margin-left: 2rem;
  color: ${(props) => (props.active === "true" ? Colors.D50 : Colors.D200)};
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    color: ${Colors.D50};
  }
`;

const NavIcon = styled.div`
  color: inherit;
  width: 1.6rem;
  height: 1.6rem;
`;

const ConnectButton = styled.div`
  width: fit-content;
`;
