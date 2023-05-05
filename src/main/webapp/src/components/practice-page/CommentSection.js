import { useState, useContext, useEffect } from 'react';
import { UserContext } from "../../contexts/UserContext";
import { postComment } from "../../api";
import {
  AuthorName,
  Avatar,
  CommentAuthor,
  CommentForm, CommentItem,
  CommentList,
  CommentSectionContainer, CommentText,
  CommentTextArea, LoginLink,
  SectionTitle, SubmitButton
} from "./styles/CommentSectionStyles";

function CommentSection({ practiceId }) {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const { user } = useContext(UserContext);

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
        <SectionTitle>Comments</SectionTitle>
        {user ? (
            <CommentForm onSubmit={handleSubmit}>
              <CommentTextArea
                  placeholder="Add a comment..."
                  value={commentText}
                  onChange={handleCommentTextChange}
              />
              <SubmitButton>
                Add Comment
              </SubmitButton>
            </CommentForm>
        ) : (
            <p className="text-center">
              <LoginLink href="/login">Log in</LoginLink> to add comments.
            </p>
        )}
        {comments?.length === 0 ? (
            <p>No comments yet.</p>
        ) : (
            <CommentList>
              {comments?.map((comment) => (
                  <CommentItem key={comment.id}>
                    <CommentAuthor>
                      <Avatar
                          src={`https://ui-avatars.com/api/?name=${encodeURI(comment.username)}`}
                          alt={comment.username}
                      />
                      <AuthorName>{comment.username}</AuthorName>
                    </CommentAuthor>
                    <CommentText>{comment.comment}</CommentText>
                  </CommentItem>
              ))}
            </CommentList>
        )}
      </CommentSectionContainer>
  );
}

export default CommentSection;
