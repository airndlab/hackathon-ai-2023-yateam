import styled from "styled-components";

export const SearchBarContainer = styled.div`
  margin: 20px 0 0;
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const SearchInput = styled.input`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  width: 100%;
  padding: 10px;
  border: 2px solid rgba(236, 236, 241, 1);
  border-radius: 5px;
  background-color: rgba(32, 33, 35, 1);
  color: rgba(236, 236, 241, 1);
  outline: none;

  &::placeholder {
    color: rgba(236, 236, 241, 0.5);
  }

  &:focus {
    border-color: rgba(86, 182, 255, 1);
  }
`;
