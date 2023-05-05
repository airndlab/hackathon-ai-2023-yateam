import styled, {css, keyframes} from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Star = styled(FontAwesomeIcon)`
  cursor: ${({ userCanVote }) => (userCanVote ? 'pointer' : 'default')};
  color: ${({ isHovered }) => (isHovered ? 'yellow' : 'inherit')};
  
  ${({ animate, ratingValue, rating }) =>
    animate &&
    ratingValue === rating &&
    css`
      animation: ${keyframes`
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      `} 0.3s linear;
    `}
`;

export const CancelVoteButton = styled.button`
  margin-left: 10px;
  color: rgba(72, 187, 120, 1);
`;

export const HiddenRadioButton = styled.input`
  display: none;
`;