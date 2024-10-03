import React, { useState } from "react";
import styled from "styled-components";
import TableHeader from "../table-header";
import { Colors } from "constants/colors";
import Typography from "components/typography";
import SellerItem from "./buyers-item";
import BuyersItem from "./buyers-item";

const ToBuyTable = () => {
  const [selectedToken, setSelectedToken] = useState("usdt");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(0);

  return (
    <Container>
      <TableHeader
        selectedToken={selectedToken}
        setSelectedToken={(value) => setSelectedToken(value)}
        selectedPayment={selectedPayment}
        setSelectedPayment={(value) => setSelectedPayment(value)}
        amount={amount}
        onChangeAmount={(value) => setAmount(value)}
        defaultCurrency={currency}
        onChangeCurrency={(value) => setCurrency(value)}
      />
      <TableContainer>
        <thead>
          <tr>
            <th scope="col">
              <Typography size="1.5rem">Advertiser Id</Typography>
            </th>
            <th scope="col">
              <Typography size="1.5rem">Price</Typography>
            </th>
            <th scope="col">
              <Typography size="1.5rem">Limit/Available</Typography>
            </th>
            <th scope="col">
              <Typography size="1.5rem">Payment Method</Typography>
            </th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          <BuyersItem></BuyersItem>
          <BuyersItem></BuyersItem> <BuyersItem></BuyersItem>{" "}
          <BuyersItem></BuyersItem> <BuyersItem></BuyersItem>{" "}
          <BuyersItem></BuyersItem> <BuyersItem></BuyersItem>{" "}
          <BuyersItem></BuyersItem> <BuyersItem></BuyersItem>{" "}
          <BuyersItem></BuyersItem>
        </tbody>
      </TableContainer>
    </Container>
  );
};

export default ToBuyTable;

const Container = styled.div`
  height: 75rem;
  overflow: scroll;
`;

const TableContainer = styled.table`
  margin-top: 4rem;
  margin-bottom: 6.4rem;
  width: 100%;
  color: white;
  border-collapse: collapse;
  @media only screen and (max-width: 769px) {
    width: 100rem;
    overflow: scroll;
  }

  tr {
    background-color: transparent;

    &:nth-child(odd) {
    }
  }
  th {
    text-align: left;
    color: #5d6b82;
    padding: 1.65rem 0;
    cursor: auto;
    margin-bottom: 2rem;
  }

  td {
    color: #e4e4e4;
    padding: 1.2rem 0;
    padding-bottom: 4rem;
  }
`;
