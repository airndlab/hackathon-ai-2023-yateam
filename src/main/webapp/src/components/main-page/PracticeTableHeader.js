import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import {TableHeader, TableRow, THead} from "./styles/PracticeHeaderTableStyles";

const headers = [
  { sort: true, title: 'Категория', field: 'category', number: false },
  { sort: true, title: 'Имя', field: 'name', number: false },
  { sort: true, title: 'Автор', field: 'author', number: false },
  { sort: true, title: 'Рейтинг', field: 'rating', number: true },
  { sort: true, title: 'Голоса', field: 'votes', number: true },
  { sort: false, title: 'Детали', field: 'details', number: false },
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
            <TableHeader sortable={column.sort} number={column.number} key={column.field} onClick={() => onSort(column.field)}>
              {column.title} {column.sort && renderSortIcon(column.field)}
            </TableHeader>
        ))}
      </TableRow>
      </THead>
  );
}

export default PracticeTableHeader;