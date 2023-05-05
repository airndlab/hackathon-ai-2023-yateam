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
  position: sticky;
  top: 0;
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

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin-bottom: 20px;
  @media (max-width: 1100px) {
    width: calc(100% - 40px);
  }
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
    
    @media (max-width: 1100px) {
        width: calc(100% - 40px);
    }
`;

export const TypingTextLargeDesktop = styled.h1`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0;
  font-family: "Roboto Mono", monospace;
  border-right: 2px solid;
  text-align: left;
  border-color: transparent;
  animation: ${typing} 3.5s steps(50, end) 0.2s 1 normal both, ${blink} 1s 6;
  @media (max-width: 1100px) {
     display: none;   
  }
`;

export const TypingTextMediumDevice = styled.h1`
  display: none;
  font-size: 2rem;
  font-weight: bold;
  font-family: "Roboto Mono", monospace;
  @media (max-width: 1100px) {
     display: block;   
  }
  @media (max-width:600px) {
     display: none;   
  }
`;

export const TypingTextSmallDevice = styled.h1`
  display: none;
  font-size: 2rem;
  font-weight: bold;
  font-family: "Roboto Mono", monospace;
  @media (max-width:600px) {
     display: block;   
  }
`;

export const TextLine = styled.p`
    width: 0;
    border-right: 2px solid;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: calc(100vw - 20px);
    border-right: 0.15em solid rgba(236, 236, 241, 1);
    margin: 0;
    
    &:first-child {
        animation: typing 1.75s steps(40, end) forwards,
        blink-caret 1s step-end 2 forwards;
        border-color: transparent;
    }
    
    &:last-child {
        width: 0;
        border-color: transparent;
        animation: typing 1.75s 1.75s steps(40, end) forwards,
        blink-caret 1s step-end 1.5s 4;
    }
    @keyframes typing {
        0% {
            width: 0;
            text-overflow: clip;
        }
        99% {
            width: 100%;
            text-overflow: clip;
        }
        100% {
            width: fit-content;
            text-overflow: ellipsis;
        }
    }

    @keyframes blink-caret {
        from, to {
            border-color: transparent;
        }
        50% {
            border-color: rgba(236, 236, 241, 1);
        }
    }
    
    @media (max-width: 600px) {
        text-align: center;
        margin: auto;
        
        &:first-child {
            animation: typing 1s steps(20, end) forwards,
            blink-caret 1s step-end 1 forwards;
            border-color: transparent;
        }
    
        &:nth-child(2) {
            width: 0;
            border-color: transparent;
            animation: typing 1s 1s steps(20, end) forwards,
            blink-caret 1s step-end 1s 1 forwards;
        }
        
        &:nth-child(3) {
            width: 0;
            border-color: transparent;
            animation: typing 1s 2s steps(20, end) forwards,
            blink-caret 1s step-end 2s 1 forwards;
        }
    
        &:last-child {
            width: 0;
            border-color: transparent;
            animation: typing 1s 3s steps(20, end) forwards,
            blink-caret 1s step-end 3s 3;
        }
    }
`;
