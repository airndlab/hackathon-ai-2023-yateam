import React, { useState } from 'react';
import PracticeRow from './PracticeRow';
import PracticeTableHeader from './PracticeTableHeader';

const PracticeTable = ({ practices, categories }) => {
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
      <table className="practice-table">
        <PracticeTableHeader sortConfig={sortConfig} setSortConfig={setSortConfig} />
        <tbody>
        {sortedPractices.map((practice) => (
            <PracticeRow key={practice.id} practice={practice} categories={categories}/>
        ))}
        </tbody>
      </table>
  );
};

export default PracticeTable;
