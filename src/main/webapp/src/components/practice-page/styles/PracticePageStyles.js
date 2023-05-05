import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  background-color: rgba(32, 33, 35, 1);
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px;
  color: rgba(236, 236, 241, 1);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: "Roboto Mono", monospace;
  font-size: 32px;
  margin-bottom: 20px;
`;

export const FlexRow = styled.div`
  display: flex;
  margin-bottom: 12px;
  column-gap: 5px;
`;

export const FlexRowLabel = styled.p`
  font-family: "Roboto Mono", monospace;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const Label = styled(FlexRowLabel)`
  margin-right: 8px;
`;

export const StyledButton = styled.button`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &.upvote {
    background-color: rgba(52, 211, 153, 1);
    color: rgba(236, 236, 241, 1);
  }

  &.downvote {
    background-color: rgba(248, 113, 113, 1);
    color: rgba(236, 236, 241, 1);
  }

  &.neutral {
    background-color: rgba(209, 213, 219, 1);
    color: rgba(55, 65, 81, 1);
  }

  &:hover:not(.upvote):not(.downvote) {
    background-color: rgba(156, 163, 175, 1);
    color: rgba(236, 236, 241, 1);
  }
`;

export const StyledLink = styled.a`
  color: rgba(72, 187, 120, 1);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: rgba(52, 211, 153, 1);
    text-decoration: underline;
  }
`;






