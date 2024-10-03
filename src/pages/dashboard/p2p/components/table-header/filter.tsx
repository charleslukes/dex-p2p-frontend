import Typography from "components/typography";
import React from "react";
import styled from "styled-components";

const Filter = () => {
  return (
    <Container>
      <Typography size="1.5rem" color="#6B788E">
        Filter
      </Typography>
      <FilterIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M2.5 5.83301H17.5"
            stroke="#354764"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M5 10H15"
            stroke="#354764"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M8.33301 14.167H11.6663"
            stroke="#354764"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </FilterIcon>
    </Container>
  );
};

export default Filter;

const Container = styled.div`
  cursor: pointer;
  margin-right: 2.1rem;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.6rem;
`;

const FilterIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin-left: 1.2rem;
`;
