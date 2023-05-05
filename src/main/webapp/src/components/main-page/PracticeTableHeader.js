import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

const headers = [
  { sort: true, title: 'Категория', field: 'category' },
  { sort: true, title: 'Имя', field: 'name' },
  { sort: true, title: 'Автор', field: 'author' },
  { sort: true, title: 'Рейтинг', field: 'rating' },
  { sort: true, title: 'Голоса', field: 'votes' },
  { sort: false, title: 'Детали', field: 'details' },
];

function PracticeTableHeader({ sortConfig, setSortConfig }) {
  const onSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const renderSortIcon = (field) => {
    if (sortConfig.key !== field) {
      return <FontAwesomeIcon icon={faSort} />;
    }
    if (sortConfig.direction === 'asc') {
      return <FontAwesomeIcon icon={faSortUp} />;
    }
    return <FontAwesomeIcon icon={faSortDown} />;
  };

  return (
      <thead>
      <tr>
        {headers.map((column) => (
            <th style={{cursor: column.sort ? 'pointer' : 'default'}} key={column.field} onClick={() => onSort(column.field)}>
              {column.title} {column.sort && renderSortIcon(column.field)}
            </th>
        ))}
      </tr>
      </thead>
  );
};

export default PracticeTableHeader;