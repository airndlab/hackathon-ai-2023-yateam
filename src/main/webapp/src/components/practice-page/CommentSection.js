import { useCallback, useEffect, useState } from 'react';
import { postComment } from '../../api';
import {
  AuthorName,
  Avatar,
  CommentAuthor,
  CommentForm,
  CommentItem,
  CommentList,
  CommentSectionContainer,
  CommentText,
  CommentTextArea,
  SectionTitle,
  SubmitButton,
} from './styles/CommentSectionStyles';
import { RouteLink } from '../common/LinkStyle';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons/faWindowClose';

function CommentSection({ practiceId }) {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const user = useSelector(reducer => reducer?.user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (commentText.trim() === '') {
      return;
    }
    try {
      const newComment = await postComment(practiceId, commentText);
      setComments([...comments, newComment]);
      setCommentText('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentTextChange = (event) => {
    setCommentText(event.target.value);
  };

  const fetchComments = useCallback(async () => {
    try {
      const commentsData = await fetch(`/api/practices/${practiceId}/comments`).then((res) => res.json());
      setComments(commentsData);
    } catch (error) {
      console.error(error);
    }
  }, [practiceId, setComments]);

  useEffect(() => {
    fetchComments();
  }, [practiceId, fetchComments]);

  async function onDeleteComment(commentId) {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      fetchComments();
    }
  }

  return (
      <CommentSectionContainer>
        <SectionTitle>Комментарии</SectionTitle>
        {user ? (
            <CommentForm onSubmit={handleSubmit}>
              <CommentTextArea
                  placeholder="Добавьте комментарий..."
                  value={commentText}
                  onChange={handleCommentTextChange}
              />
              <SubmitButton>
                Добавить комментарий
              </SubmitButton>
            </CommentForm>
        ) : (
            <p className="text-center">
              <RouteLink to="/loginreact">Войдите</RouteLink>, чтобы оставить свой комментарий.
            </p>
        )}
        {comments?.length === 0 ? (
            <p>Комментариев пока нет.</p>
        ) : (
            <CommentList>
              {comments?.map((comment) => (
                  <CommentItem key={comment.id}>
                    <CommentAuthor>
                      <div className={'flex'}>
                        <Avatar
                            src={`https://ui-avatars.com/api/?name=${encodeURI(comment.authorName)}`}
                            alt={comment.authorName}
                        />
                        <AuthorName>{comment.authorName}</AuthorName>
                      </div>
                      <div className={'m-1'}>
                        {comment?.authorName === user?.username &&
                            <FontAwesomeIcon onClick={() => onDeleteComment(comment.id)} className={'cursor-pointer mt-0'} icon={faWindowClose} />}
                      </div>
                    </CommentAuthor>
                    <CommentText>{comment.text}</CommentText>
                  </CommentItem>
              ))}
            </CommentList>
        )}
      </CommentSectionContainer>
  );
}

export default CommentSection;
