import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { getPractice, postVote } from '../../api';
import CommentSection from './CommentSection';
import {
  Background,
  Container,
  FlexRow,
  FlexRowLabel,
  StyledLink,
  Title
} from "./styles/PracticePageStyles";
import StarRating from "./StarRating";
import {isNil} from "lodash";

const PracticePage = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [practice, setPractice] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [vote, setVote] = useState(null);

  useEffect(() => {
    const fetchPractice = async () => {
      setIsLoading(true);
      try {
        const data = await getPractice(id);
        setPractice(data);
        setVote(data.vote);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPractice();
  }, [id]);

  const handleVote = async (practiceId, value) => {
    try {
      const updatedVote = await postVote(practiceId, value);
      setVote(updatedVote);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCancelVote = () => {};

  return (
      <Background>
        <Container>
          {isLoading ? (
              <p>Loading...</p>
          ) : error ? (
              <p>{error}</p>
          ) : (
              <>
                <Title>{practice.name}</Title>
                <FlexRow>
                  <FlexRowLabel>Author:</FlexRowLabel>
                  <p>{practice.author}</p>
                </FlexRow>
                <FlexRow>
                  <FlexRowLabel>Category:</FlexRowLabel>
                  <p>{practice.category}</p>
                </FlexRow>
                <FlexRow>
                  <FlexRowLabel>Description:</FlexRowLabel>
                  <p>{practice.description}</p>
                </FlexRow>
                <FlexRow>
                  <FlexRowLabel>Link:</FlexRowLabel>
                  <StyledLink href={practice.link} target="_blank" rel="noopener noreferrer">
                    {practice.link}
                  </StyledLink>
                </FlexRow>
                <FlexRow>
                  <FlexRowLabel>Rating:</FlexRowLabel>
                  <p className="mr-2">{practice.rating.toFixed(2)}</p>
                  <p className="mr-4">({practice.votes} votes)</p>
                  <StarRating
                      onRate={handleVote} onRemoveVote={handleCancelVote}
                      userCanVote={!isNil(user) && isNil(vote)}
                      userHasVoted={!isNil(vote)} rating={practice.rating} practiceId={id}/>
                </FlexRow>
                <CommentSection practiceId={id} />
              </>
          )}
        </Container>
      </Background>
  );
};

export default PracticePage;
