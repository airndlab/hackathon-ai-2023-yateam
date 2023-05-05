import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">Лучшие практики использования нейросетей в разработке ПО</h1>
      <nav>
        <ul className="flex space-x-4 text-gray-600">
          <li><Link to="/">MainPage</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
