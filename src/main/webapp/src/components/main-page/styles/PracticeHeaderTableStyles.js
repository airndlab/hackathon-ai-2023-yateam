import styled from "styled-components";

export const THead = styled.thead`
  background-color: rgba(57, 57, 58, 1);
`;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  padding: 10px;
  font-family: "Roboto Mono", monospace;
  color: rgba(236, 236, 241, 1);
  text-align: ${(props) => (props.number ? "right" : "center")};
  cursor: ${(props) => (props.sortable ? "pointer" : "default")};
  width: ${(props) => props.width};
  &:hover {
    background-color: ${(props) => (props.sortable ? "rgba(67, 67, 68, 1)" : "transparent")};
  }
`;
