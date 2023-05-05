import React, { useState } from 'react';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import {CancelVoteButton, HiddenRadioButton, Star} from "./styles/StarRatingStyles";

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
                            aria-label={`Рейтинг ${ratingValue} из 5`}
                            role="button"
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
