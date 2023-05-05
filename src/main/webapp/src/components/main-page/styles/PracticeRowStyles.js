import styled from "styled-components";
import { Link } from "react-router-dom";

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: rgba(40, 40, 42, 1);
  }

  &:hover {
    background-color: rgba(50, 50, 52, 1);
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
`;

export const TableNuberCell = styled.td`
  text-align: right;
`;

export const DetailsLink = styled(Link)`
  text-decoration: none;
  color: rgba(236, 236, 241, 1);

  &:hover {
    text-decoration: underline;
  }
`;
