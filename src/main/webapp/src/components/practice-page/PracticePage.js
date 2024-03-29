import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { deleteVote, getPractice, postVote } from '../../api';
import CommentSection from './CommentSection';
import { Background, Container, FlexRow, FlexRowLabel, RatingContainer, Title } from './styles/PracticePageStyles';
import StarRating from './StarRating';
import Markdown from './Markdown';
import { isNil } from 'lodash';
import {RouteLink} from '../common/LinkStyle';
import { useSelector } from 'react-redux';

const getVotesWord = (votes = 0) => {
  const target = votes.toString()
  if (target.endsWith('1')) return 'голос'
  if (target.endsWith('2') || target.endsWith('3') || target.endsWith('4')) return 'голоса'
  return 'голосов'
}

const PracticePage = () => {
  const { id } = useParams();
  const user = useSelector(reducer => reducer?.user);
  const [practice, setPractice] = useState(null);
  const [error, setError] = useState(null);
  const [vote, setVote] = useState(null);
  const categories = useSelector((redux) => redux?.categories);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  useEffect(() => {
    const fetchPractice = async () => {
      try {
        const data = await getPractice(id);
        setPractice(data);
      } catch (error) {
        setError(error.message);
      } finally {
      }
    };
    fetchPractice();
  }, [id, vote]);

  useEffect(() => {
    setVote(practice?.myRating);
  }, [practice]);

  const handleVote = async (practiceId, value) => {
    try {
      const updatedVote = await postVote(practiceId, value);
      setVote(updatedVote);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCancelVote = async () => {
    await deleteVote(id);
    setVote(null);
  };

  const category = categories?.filter(c => c.id === practice?.categoryId)?.[0]?.name;

  const userHasVoted = !isNil(vote);

  return (
      <Background>
        <Container>
          {error ? (
              <p>{error}</p>
          ) : (
              <>
                <Title>{practice?.name}</Title>
                <FlexRow>
                  <FlexRowLabel>Автор:</FlexRowLabel>
                  <p>{practice?.author}</p>
                </FlexRow>
                <FlexRow>
                  <FlexRowLabel>Категория:</FlexRowLabel>
                  <p>{category}</p>
                </FlexRow>
                <FlexRow>
                  <FlexRowLabel>Рейтинг:</FlexRowLabel>
                  <RatingContainer>
                    <p className="mr-2">{practice?.rating?.toFixed?.(1)}</p>
                    <p>({practice?.votes} {getVotesWord(practice?.votes)})</p>
                  </RatingContainer>
                </FlexRow>
                <FlexRow>
                  <FlexRowLabel>Моя оценка:</FlexRowLabel>
                  {user ? (
                    <StarRating
                      onRate={handleVote} onRemoveVote={handleCancelVote}
                      userCanVote={!isNil(user) && isNil(vote)}
                      userHasVoted={userHasVoted} rating={vote ?? 0} practiceId={id}
                    />
                  ) : (
                    <span>
                      <RouteLink to="/loginreact">Войдите</RouteLink>, чтобы оставить свой голос
                    </span>
                  )}
                </FlexRow>
                <Markdown>{practice?.markdown}</Markdown>
                <CommentSection practiceId={id} />
              </>
          )}
        </Container>
      </Background>
  );
};

export default PracticePage;
