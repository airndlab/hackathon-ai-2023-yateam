// api.js

export const getPractice = async (id) => {
  const response = await fetch(`/api/practices/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const practice = await response.json();
  return practice;
};

export const postVote = async (id, vote) => {
  const response = await fetch(`/api/practices/${id}/ratings?rating=${vote}`, {
    method: 'POST',
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const updatedPractice = await response.json();
  return updatedPractice;
};

export const removeVote = async () => {

}

export const postComment = async (practiceId, commentData) => {
  const response = await fetch(`/api/practices/${practiceId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({text: commentData})
  });

  if (!response.ok) {
    throw new Error('Failed to post comment');
  }

  return response.json();
}
