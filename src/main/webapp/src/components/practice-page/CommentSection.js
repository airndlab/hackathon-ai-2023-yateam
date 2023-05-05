import { useState, useContext, useEffect } from 'react';
import { UserContext } from "../../contexts/UserContext";
import { postComment } from "../../api";

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
      <div className="bg-gray-100 rounded-lg p-4">
        <h2 className="font-bold mb-4">Comments</h2>
        {user ? (
            <form onSubmit={handleSubmit} className="mb-4">
          <textarea
              className="w-full border rounded-lg py-2 px-3"
              placeholder="Add a comment..."
              value={commentText}
              onChange={handleCommentTextChange}
          />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-2">
                Add Comment
              </button>
            </form>
        ) : (
            <p className="text-center">
              <a className="text-blue-500 hover:underline" href="/login">Log in</a> to add comments.
            </p>
        )}
        {comments?.length === 0 ? (
            <p>No comments yet.</p>
        ) : (
            <ul>
              {comments?.map((comment) => (
                  <li key={comment.id} className="mb-4">
                    <div className="flex items-center mb-2">
                      <img
                          className="w-8 h-8 rounded-full mr-2"
                          src={`https://ui-avatars.com/api/?name=${encodeURI(comment.authorName)}`}
                          alt={comment.authorName}
                      />
                      <div>
                        <p className="font-bold">{comment.authorName}</p>
                      </div>
                    </div>
                    <p>{comment.text}</p>
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
}

export default CommentSection;
