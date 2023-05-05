import React from 'react';
import {TableCell, TableNuberCell, TableRow} from "./styles/PracticeRowStyles";
import {RouteLink} from "../common/LinkStyle";

const PracticeRow = ({ practice, categories }) => {
  const { id, categoryId, name, author, rating, votes } = practice;

  return (
      <TableRow>
        <TableCell>{categories.filter(c => c.id === categoryId)[0]?.name}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{author}</TableCell>
        <TableNuberCell>{rating?.toFixed?.(1) ?? ''}</TableNuberCell>
        <TableNuberCell>{votes}</TableNuberCell>
        <TableCell>
            <RouteLink to={`/practices/${id}`}>Детали</RouteLink>
        </TableCell>
      </TableRow>
  );
};

export default PracticeRow;
