import React from 'react';
import { Link } from 'react-router-dom';

const PracticeRow = ({ practice, categories }) => {
  const { id, categoryId, name, author, rating, votes } = practice;

  return (
      <tr>
        <td>{categories.filter(c => c.id == categoryId)[0]?.name}</td>
        <td>{name}</td>
        <td>{author}</td>
        <td>{rating}</td>
        <td>{votes}</td>
        <td>
          <Link to={`/practices/${id}`}>Детали</Link>
        </td>
      </tr>
  );
};

export default PracticeRow;
