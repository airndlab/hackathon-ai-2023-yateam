import { useState, useEffect } from 'react';
import { postComment } from "../../api";
import {
  AuthorName,
  Avatar,
  CommentAuthor,
  CommentForm, CommentItem,
  CommentList,
  CommentSectionContainer, CommentText,
  CommentTextArea,
  SectionTitle, SubmitButton
} from "./styles/CommentSectionStyles";
import {RouteLink} from "../common/LinkStyle";
import { useSelector } from 'react-redux';

function CommentSection({ practiceId }) {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const user = useSelector(reducer => reducer?.user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (commentText.trim() === "") {
      return;
    }
    try {
      const newComment = await postComment(practiceId, commentText);
      setComments([...comments, newComment]);
      setCommentText("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentTextChange = (event) => {
    setCommentText(event.target.value);
  };

  useEffect(() => {
    async function fetchComments() {
      try {
        const commentsData = await fetch(`/api/practices/${practiceId}/comments`).then((res) => res.json());
        setComments(commentsData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchComments();
  }, [practiceId]);

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
              <RouteLink to="/login">Войдите</RouteLink>, чтобы оставить свой комментарий.
            </p>
        )}
        {comments?.length === 0 ? (
            <p>Комментариев пока нет.</p>
        ) : (
            <CommentList>
              {comments?.map((comment) => (
                  <CommentItem key={comment.id}>
                    <CommentAuthor>
                      <Avatar
                          src={`https://ui-avatars.com/api/?name=${encodeURI(comment.authorName)}`}
                          alt={comment.authorName}
                      />
                      <AuthorName>{comment.authorName}</AuthorName>
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
