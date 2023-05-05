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
  const response = await fetch(`/api/practices/${id}/vote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ vote }),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const updatedPractice = await response.json();
  return updatedPractice;
};
