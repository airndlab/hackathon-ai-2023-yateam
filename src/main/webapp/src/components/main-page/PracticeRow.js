import React from 'react';
import {DetailsLink, TableCell, TableNuberCell, TableRow} from "./styles/PracticeRowStyles";

const PracticeRow = ({ practice, categories }) => {
  const { id, categoryId, name, author, rating, votes } = practice;

  return (
      <TableRow>
        <TableCell>{categories.filter(c => c.id == categoryId)[0]?.name}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{author}</TableCell>
        <TableNuberCell>{rating}</TableNuberCell>
        <TableNuberCell>{votes}</TableNuberCell>
        <TableCell>
          <DetailsLink to={`/practices/${id}`}>Детали</DetailsLink>
        </TableCell>
      </TableRow>
  );
};

export default PracticeRow;
