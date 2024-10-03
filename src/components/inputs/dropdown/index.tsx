import Typography from "components/typography";
import { Colors } from "constants/colors";
import { useClickOutside } from "hooks/UseClickOutside";
import React, { ReactElement, useRef, useState } from "react";
import styled from "styled-components";

interface IProps {
  items?: string[];
  selectItem?: (value: string) => void;
  chosenItem?: string;
  placeholder?: string;
}
const Dropdown = ({
  chosenItem = "",
  items = [],
  selectItem = () => {},
  placeholder = "None"
}: IProps) => {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  useClickOutside(ref, () => {
    setOpen(false);
  });

  return (
    <Container ref={ref}>
      <Body
        open={open ? "true" : "false"}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Typography color={"#868C98"}>
          {chosenItem === "" ? placeholder : chosenItem}
        </Typography>
        <Caret isactive={open ? "true" : "false"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M14.248 6.75L8.99805 11.25L3.74805 6.75"
              stroke="#525866"
              stroke-width="1.125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Caret>
      </Body>
      {open && (
        <Drop>
          {items?.map((item, i) => {
            return (
              <DropItem
                key={i}
                active={chosenItem === item ? "true" : "false"}
                onClick={() => {
                  selectItem(item);
                  setOpen(false);
                }}
              >
                <Typography size="s">{item}</Typography>
              </DropItem>
            );
          })}
        </Drop>
      )}
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Body = styled.div<{ open: string }>`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
  border-radius: 0.8rem;
  border: 1px solid
    ${(props) => (props.open === "true" ? "#E2E4E9" : "#E2E4E9")};
`;

const Caret = styled.div<{ isactive: string }>`
  transform: ${(props) => (props.isactive === "true" ? "rotate(180deg)" : "")};
  transition: ease-in-out 0.2s all;
  width: 1.8rem;
`;

const Drop = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${""};
  border-radius: 0.8rem;
  box-shadow: 0px 4px 8px 7px rgba(34, 34, 34, 0.1);
  height: fit-content;
  padding: 0.6rem;
  margin-top: 0.8rem;
  max-height: 18rem;
  overflow: scroll;
  z-index: 99;
`;

const DropItem = styled.div<{ active: string }>`
  cursor: pointer;
  border-radius: 0.8rem;
  padding: 0.8rem 0.7rem;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.active === "true" ? "" : "")};
`;
