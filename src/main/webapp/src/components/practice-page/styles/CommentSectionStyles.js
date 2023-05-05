import styled from "styled-components";

export const CommentSectionContainer = styled.div`
  background-color: rgba(66, 68, 72, 1);
  border-radius: 8px;
  padding: 16px;
  color: rgba(236, 236, 241, 1);
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h2`
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const CommentForm = styled.form`
  margin-bottom: 16px;
`;

export const CommentTextArea = styled.textarea`
  width: 100%;
  border: 1px solid rgba(209, 213, 219, 1);
  border-radius: 8px;
  padding: 8px 12px;
  background-color: rgba(76, 78, 82, 1);
  color: rgba(236, 236, 241, 1);
  resize: none;
`;

export const SubmitButton = styled.button`
  background-color: rgba(96, 165, 250, 1);
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  color: rgba(236, 236, 241, 1);
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(59, 130, 246, 1);
  }
`;

export const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const CommentItem = styled.li`
  margin-bottom: 16px;
`;

export const CommentAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const AuthorName = styled.p`
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
`;

export const CommentText = styled.p`
  margin: 0;
`;
