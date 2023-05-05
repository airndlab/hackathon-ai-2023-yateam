import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  background-color: rgba(32, 33, 35, 1);
  min-height: calc(100vh - 48px);
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
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0px;
`;

export const FlexRow = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  margin-bottom: 20px;
  column-gap: 5px;
`;

export const FlexRowLabel = styled.p`
  font-family: "Roboto Mono", monospace;
  font-weight: 600;
`;

export const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
`;






