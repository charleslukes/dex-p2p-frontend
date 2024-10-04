import Typography from "components/typography";
import React from "react";
import styled from "styled-components";

interface IProps {
  status: "active" | "inactive";
}
const Status = ({ status = "inactive" }: IProps) => {
  return (
    <Container status={status}>
      <Dot status={status} />
      <Typography
        size="s"
        color={status === "active" ? "#38C793" : ""}
        lh="1.8rem"
      >
        Active
      </Typography>
    </Container>
  );
};

export default Status;

const Container = styled.div<{ status: string }>`
  padding: 0.6rem 0.8rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.status === "active" ? "rgba(56, 199, 147, 0.10)" : ""};
`;

const Dot = styled.div<{ status: string }>`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${(props) => (props.status === "active" ? "#38C793" : "")};
  margin-right: 0.6rem;
`;
