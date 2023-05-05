import React, { useState } from 'react';
import PracticeRow from './PracticeRow';
import PracticeTableHeader from './PracticeTableHeader';
import {Table, TBody} from "./styles/PracticeTableStyles";
import { useSelector } from 'react-redux';

const PracticeTable = ({ practices }) => {
  const categories = useSelector((redux) => redux?.categories);

  const [sortConfig, setSortConfig] = useState({
    key: 'rating',
    direction: 'desc',
  });

  const sortedPractices = practices.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
      <Table className="practice-table">
        <PracticeTableHeader sortConfig={sortConfig} setSortConfig={setSortConfig} />
        <TBody>
        {sortedPractices.map((practice) => (
            <PracticeRow key={practice.id} practice={practice} categories={categories}/>
        ))}
        </TBody>
      </Table>
  );
};

export default PracticeTable;
