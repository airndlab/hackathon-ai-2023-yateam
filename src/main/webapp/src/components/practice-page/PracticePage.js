import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { getPractice, postVote } from '../../api';
import CommentSection from './CommentSection';

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
      <div className="container mx-auto px-4">
        {isLoading ? (
            <p>Loading...</p>
        ) : error ? (
            <p>{error}</p>
        ) : (
            <>
              <h1 className="text-3xl font-semibold mb-4">{practice.name}</h1>
              <div className="flex mb-4">
                <p className="mr-2 font-semibold">Author:</p>
                <p>{practice.author}</p>
              </div>
              <div className="flex mb-4">
                <p className="mr-2 font-semibold">Category:</p>
                <p>{practice.category}</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Description:</p>
                <p>{practice.description}</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Link:</p>
                <a href={practice.link} target="_blank" rel="noopener noreferrer">
                  {practice.link}
                </a>
              </div>
              <div className="flex items-center mb-4">
                <p className="mr-2 font-semibold">Rating:</p>
                <p className="mr-2">{practice?.rating?.toFixed(2)}</p>
                <p>({practice.votes} votes)</p>
                {user && (
                    <div className="ml-4">
                      <button
                          className={`px-2 py-1 rounded-md ${
                              vote === 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                          }`}
                          onClick={() => handleVote(1)}
                      >
                        Upvote
                      </button>
                      <button
                          className={`px-2 py-1 rounded-md ml-2 ${
                              vote === -1 ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
                          }`}
                          onClick={() => handleVote(-1)}
                      >
                        Downvote
                      </button>
                    </div>
                )}
              </div>
              <CommentSection practiceId={id} />
            </>
        )}
      </div>
  );
};

export default PracticePage;
