import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import styled, { css, keyframes } from 'styled-components';

const Star = styled(FontAwesomeIcon)`
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

const CancelVoteButton = styled.button`
  margin-left: 10px;
  color: rgba(72, 187, 120, 1);
`;

const HiddenRadioButton = styled.input`
  display: none;
`;

const StarRating = ({ rating, onRate, onRemoveVote, userHasVoted = false, userCanVote = false, practiceId }) => {
    const [hover, setHover] = useState(null);
    const [animate, setAnimate] = useState(false);

    const handleRate = (practiceId, ratingValue) => () => {
        if (!userHasVoted) {
            onRate(ratingValue);
            setAnimate(true);
            setTimeout(() => setAnimate(false), 300);
        }
    };

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                const starIcon = ratingValue <= (hover || rating) ? solidStar : regularStar;

                return (
                    <label key={i}>
                        <HiddenRadioButton
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={userCanVote ? handleRate(practiceId, ratingValue) : null}
                        />
                        <Star
                            animate={animate}
                            ratingValue={ratingValue}
                            rating={rating}
                            icon={starIcon}
                            onMouseEnter={() => userCanVote && setHover(ratingValue)}
                            onMouseLeave={() => userCanVote && setHover(null)}
                            userCanVote={userCanVote}
                            isHovered={userCanVote && hover >= ratingValue}
                        />
                    </label>
                );
            })}
            {userHasVoted && (
                <CancelVoteButton onClick={onRemoveVote}>Отменить голос</CancelVoteButton>
            )}
        </div>
    );
};

export default StarRating;
