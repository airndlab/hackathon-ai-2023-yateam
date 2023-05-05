import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
      <header className="bg-gray-800 py-4">
        <div className="container w-full flex items-center justify-between">
          <div>
            <Link to="/" className="text-xl text-white">
              Лучшие практики использования нейросетей в разработке ПО
            </Link>
          </div>
          <div className="flex items-center">
            {user ? (<>
                  <p className="text-white mr-4">{user.name}</p>
                  <Link
                      to="/logout"
                      className="bg-white text-gray-800 py-2 px-4 rounded-full text-sm"
                  >
                    Logout
                  </Link>
                </>
            ) : (
                <Link
                    to="/login"
                    className="bg-white text-gray-800 py-2 px-4 rounded-full text-sm"
                >
                  Login
                </Link>
            )}
          </div>
        </div>
      </header>
  );
};

export default Header;
