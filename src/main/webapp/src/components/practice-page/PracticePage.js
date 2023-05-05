import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPractice, postVote } from '../../api';
import CommentSection from './CommentSection';
import { Background, Container, FlexRow, FlexRowLabel, RatingContainer, Title } from './styles/PracticePageStyles';
import StarRating from './StarRating';
import { isNil } from 'lodash';
import { Link } from '../common/LinkStyle';
import { useSelector } from 'react-redux';
import Header from '../common/Header';

const PracticePage = () => {
  const { id } = useParams();
  const user = useSelector(reducer => reducer?.user);
  const [practice, setPractice] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [vote, setVote] = useState(null);
  const categories = useSelector((redux) => redux?.categories);

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
      console.log(value);
      const updatedVote = await postVote(practiceId, value);
      setVote(updatedVote);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCancelVote = () => {

  };

  const category = categories?.filter(c => c.id === practice?.categoryId)?.[0]?.name;

  return (
      <Background>
        <Header />
        <Container>
          {isLoading ? (
              <p>Loading...</p>
          ) : error ? (
              <p>{error}</p>
          ) : (
              <>
                <Title>{practice.name}</Title>
                <FlexRow>
                  <FlexRowLabel>Автор:</FlexRowLabel>
                  <p>{practice.author}</p>
                </FlexRow>
                <FlexRow>
                  <FlexRowLabel>Категория:</FlexRowLabel>
                  <p>{category}</p>
                </FlexRow>
                <FlexRow>
                  <FlexRowLabel>Описание:</FlexRowLabel>
                  <p>{practice.description}</p>
                </FlexRow>
                <FlexRow>
                  <FlexRowLabel>Ссылка:</FlexRowLabel>
                  <Link href={practice.link} target="_blank" rel="noopener noreferrer">
                    {practice.link}
                  </Link>
                </FlexRow>
                <FlexRow>
                  <FlexRowLabel>Рейтинг:</FlexRowLabel>
                  <RatingContainer>
                    <p className="mr-2">{practice?.rating?.toFixed(2)}</p>
                    <p>({practice.votes} votes)</p>
                    <StarRating
                        onRate={handleVote} onRemoveVote={handleCancelVote}
                        userCanVote={!isNil(user) && isNil(vote)}
                        userHasVoted={!isNil(vote)} rating={practice.rating} practiceId={id} />
                  </RatingContainer>
                </FlexRow>
                <CommentSection practiceId={id} />
              </>
          )}
        </Container>
      </Background>
  );
};

export default PracticePage;
