import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import {TableHeader, TableRow, THead} from "./styles/PracticeHeaderTableStyles";

const headers = [
  { width: '10%', sort: false, title: 'Категория', field: 'category', number: false },
  { width: '35%', sort: true, title: 'Название', field: 'name', number: false },
  { width: '15%', sort: true, title: 'Автор', field: 'author', number: false },
  { width: '15%', sort: true, title: 'Рейтинг', field: 'rating', number: true },
  { width: '15%', sort: true, title: 'Голоса', field: 'votes', number: true },
  { width: '10%', sort: false, title: 'Детали', field: 'details', number: false },
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
      <THead>
      <TableRow>
        {headers.map((column) => (
            <TableHeader
                sortable={column.sort} number={column.number}
                className='select-none'
                key={column.field}
                onClick={() => column.sort && onSort(column.field)}
                width={column.width}
            >
              {column.title} {column.sort && renderSortIcon(column.field)}
            </TableHeader>
        ))}
      </TableRow>
      </THead>
  );
}

export default PracticeTableHeader;