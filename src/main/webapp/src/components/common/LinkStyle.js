import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled.a`
  color: rgba(72, 187, 120, 1);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: rgba(52, 211, 153, 1);
    text-decoration: underline;
  }
`;

export const RouteLink = styled(RouterLink)`
  color: rgba(72, 187, 120, 1);  
  text-decoration: none;  

  &:hover {
    color: rgba(52, 211, 153, 1);
    text-decoration: underline;
  }
`;