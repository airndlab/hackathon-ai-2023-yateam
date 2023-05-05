import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import {Nav, NavItem, NavLink, NavList} from "../main-page/styles/MainPageStyles";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
      <Nav className="bg-gray-800 py-4">
        <NavList className="container w-full flex items-center justify-between">
          <NavItem>
            <NavLink to="/" className="text-xl text-white">
              Лучшие практики использования нейросетей в разработке ПО
            </NavLink>
          </NavItem>
          <NavItem>
            {user ? (<>
                  <div className="text-white mr-4">{user.name}</div>
                  <NavLink
                      to="/logout"
                      className="bg-white text-gray-800 py-2 px-4 rounded-full text-sm"
                  >
                    Выход
                  </NavLink>
                </>
            ) : (
                <NavLink
                    to="/login"
                    className="bg-white text-gray-800 py-2 px-4 rounded-full text-sm"
                >
                  Вход
                </NavLink>
            )}
          </NavItem>
        </NavList>
      </Nav>
  );
};

export default Header;
