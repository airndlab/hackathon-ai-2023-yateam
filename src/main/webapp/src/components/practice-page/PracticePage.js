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
  StyledButton,
  StyledLink,
  Title
} from "./styles/PracticePageStyles";

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

  const handleVote = async (value) => {
    try {
      const updatedVote = await postVote(practice.id, value);
      setVote(updatedVote);
    } catch (error) {
      setError(error.message);
    }
  };

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
                  <p>({practice.votes} votes)</p>
                  {user && (
                      <div className="ml-4">
                        <StyledButton
                            className={`px-2 py-1 rounded-md ${
                                vote === 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                            }`}
                            onClick={() => handleVote(1)}
                        >
                          Upvote
                        </StyledButton>
                        <StyledButton
                            className={`px-2 py-1 rounded-md ml-2 ${
                                vote === -1 ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
                            }`}
                            onClick={() => handleVote(-1)}
                        >
                          Downvote
                        </StyledButton>
                      </div>
                  )}
                </FlexRow>
                <CommentSection practiceId={id} />
              </>
          )}
        </Container>
      </Background>
  );
};

export default PracticePage;
