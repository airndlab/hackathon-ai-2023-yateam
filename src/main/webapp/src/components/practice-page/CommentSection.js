import { useState } from "react";

const CommentSection = ({ comments, onAddComment, onDeleteComment }) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment) return;
    onAddComment(newComment);
    setNewComment("");
  };

  const handleDeleteComment = (id) => {
    onDeleteComment(id);
  };

  return (
      <div>
        <h2 className="text-lg font-bold mb-2">Comments</h2>
        {comments?.length > 0 ? (
            <ul className="space-y-4">
              {comments.map((comment) => (
                  <li key={comment.id} className="border rounded-lg p-4">
                    <p className="text-gray-700">{comment.text}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      <span>Posted by {comment.author}</span>{" "}
                      {comment.deletable && (
                          <button
                              className="text-red-500 hover:text-red-700 ml-2"
                              onClick={() => handleDeleteComment(comment.id)}
                          >
                            Delete
                          </button>
                      )}
                    </p>
                  </li>
              ))}
            </ul>
        ) : (
            <p className="text-gray-500">No comments yet.</p>
        )}
        <form onSubmit={handleAddComment} className="mt-4">
          <label htmlFor="newComment" className="block font-medium mb-1">
            Add a comment
          </label>
          <textarea
              id="newComment"
              name="newComment"
              className="border rounded-lg p-2 w-full mb-2"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Add
          </button>
        </form>
      </div>
  );
};

export default CommentSection;
