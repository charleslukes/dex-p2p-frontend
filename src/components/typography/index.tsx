import React from "react";
import styled from "styled-components";

interface IProps {
  size?: string;
  m_size?: string;
  children?: any;
  color?: string;
  weight?: string;
  decoration?: string;
  variant?: "h1" | "h2" | "h3" | "p";
  //margin
  m?: string;
  mt?: string;
  ml?: string;
  mb?: string;
  mr?: string;
  mx?: string;
  my?: string;
  //mobile
  m_m?: string;
  m_mt?: string;
  m_ml?: string;
  m_mb?: string;
  m_mr?: string;
  m_mx?: string;
  m_my?: string;
  //
  lh?: string;
  m_lh?: string;
  align?: string;
  display?: string;
  m_display?: string;
}
const Typography = ({
  size,
  m_size = size,
  children,
  color,
  weight,
  decoration,
  //
  m,
  mt = "0",
  ml = "0",
  mb = "0",
  mr = "0",
  mx,
  my,
  //mobile
  m_m = m,
  m_mt = mt,
  m_ml = ml,
  m_mb = mb,
  m_mr = mr,
  m_mx = mx,
  m_my = my,
  //
  lh,
  m_lh,
  align,
  display,
  m_display,
  variant = "p"
}: IProps) => {
  return (
    <Text
      as={variant}
      m_size={m_size}
      size={size}
      color={color}
      weight={weight}
      decoration={decoration}
      mt={m ? m : my ? my : mt}
      ml={m ? m : mx ? mx : ml}
      mb={m ? m : my ? my : mb}
      mr={m ? m : mx ? mx : mr}
      m_mt={m_m ? m_m : m_my ? m_my : m_mt}
      m_ml={m_m ? m_m : m_mx ? m_mx : m_ml}
      m_mb={m_m ? m_m : m_my ? m_my : m_mb}
      m_mr={m_m ? m_m : m_mx ? m_mx : m_mr}
      lh={lh}
      m_lh={m_lh}
      align={align}
      display={display}
      m_display={m_display}
    >
      {children}
    </Text>
  );
};

export default Typography;

const Text = styled.p<IProps>`
  font-family: "Inter", sans-serif;

  font-size: ${(props) =>
    props.size === "xs"
      ? `1rem`
      : props.size === "s"
      ? `1.2rem`
      : props.size === "lg"
      ? "1.6rem"
      : props.size === "xl"
      ? "1.8rem"
      : props.size === "2xl"
      ? "2rem"
      : props.size === "3xl"
      ? "2.2rem"
      : props.size === "4xl"
      ? "2.4rem"
      : props.size
      ? props.size
      : "1.4rem"};
  color: ${(props) => (props.color ? props.color : "inherit")};
  font-weight: ${(props) =>
    props.weight === "regular"
      ? "400"
      : props.weight === "medium"
      ? "500"
      : props.weight === "semibold"
      ? "600"
      : props.weight === "bold"
      ? "700"
      : "400"};
  margin: ${(props) =>
    `${props.mt}rem ${props.mr}rem ${props.mb}rem ${props.ml}rem `};
  line-height: ${(props) => props.lh && `${props.lh}rem`};
  text-align: ${(props) => (props.align ? props.align : "inherit")};
  display: ${(props) => props.display && props.display};
  text-decoration: ${(props) => (props.decoration ? props.decoration : "none")};
  @media screen and (max-width: 480px) {
    font-size: ${(props) =>
      props.m_size === "xs"
        ? `1rem`
        : props.m_size === "s"
        ? `1.2rem`
        : props.m_size === "lg"
        ? "1.6rem"
        : props.m_size === "m"
        ? "1.4rem"
        : props.m_size === "xl"
        ? "1.8rem"
        : props.m_size === "2xl"
        ? "2rem"
        : props.m_size === "3xl"
        ? "2.2rem"
        : props.m_size === "4xl"
        ? "2.4rem"
        : props.size
        ? props.size
        : "1.4rem"};
    line-height: ${(props) => props.m_lh && `${props.m_lh}rem`};
    margin: ${(props) =>
      `${props.m_mt}rem ${props.m_mr}rem ${props.m_mb}rem ${props.m_ml}rem `};
    display: ${(props) => props.m_display && props.m_display};
  }
`;
