import React from 'react';
import {useHistory} from 'react-router-dom'
import {TableCell, TableNuberCell, TableRow} from "./styles/PracticeRowStyles";

const PracticeRow = ({ practice, categories }) => {
  const { id, categoryId, name, rating } = practice;
  const history = useHistory();
  const handleRowClick = () => {
      history.push(`/practices/${id}`);
  }
  return (
      <TableRow onClick={handleRowClick}>
        <TableCell center>{categories.filter(c => c.id === categoryId)[0]?.name}</TableCell>
        <TableCell>{name}</TableCell>
        <TableNuberCell>{rating?.toFixed?.(1) ?? ''}</TableNuberCell>
      </TableRow>
  );
};

export default PracticeRow;
