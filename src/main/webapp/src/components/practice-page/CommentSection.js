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
  CommentTextArea,
  SectionTitle, SubmitButton
} from "./styles/CommentSectionStyles";
import {RouteLink} from "../common/LinkStyle";

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
              <RouteLink to="/login">Log in</RouteLink> to add comments.
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
