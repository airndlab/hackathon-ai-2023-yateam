import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(32, 33, 35, 1);
  min-height: 100vh;
  color: rgba(236, 236, 241, 1);
`;

export const Nav = styled.nav`
  width: 100%;
  background-color: rgba(45, 46, 49, 1);
  padding: 10px 0;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin-left: 10px;
  padding: 0 20px;
`;

export const NavLink = styled(Link)`
  color: rgba(236, 236, 241, 1);
  text-decoration: none;
  font-family: "Roboto Mono", monospace;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Heading = styled.h1`
  font-family: "Roboto Mono", monospace;
  font-size: 32px;
  margin-bottom: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin-bottom: 20px;
`;

const typing = keyframes`
  0% {
    width: 0;
  }
  99% {
    width: 100%;
  }
  100% {
    width: fit-content;
  }
`;

const blink = keyframes`
  0% {
    border-color: inherit;
  }
  50% {
    border-color: transparent;
  }
  100% {
    border-color: inherit;
  }
`;

export const TypingContainer = styled.div`
    width: 1100px;
`;

export const TypingText = styled.h1`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-family: "Roboto Mono", monospace;
  border-right: 2px solid;
  text-align: left;
  border-color: transparent;
  animation: ${typing} 3.5s steps(50, end) 0.2s 1 normal both, ${blink} 1s 6;
`;
