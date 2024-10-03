import React from "react";
import { ReactComponent as LogoSvg } from "images/svg/dex-logo.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Iprops {
  width?: string;
  m_width?: string;
}
const Logo = ({ width = "10.2rem", m_width }: Iprops) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/")}>
      <LogoSvg width={width} />
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  cursor: pointer;
`;
