import React from 'react';
import { Nav, NavItem, NavLink, NavList } from '../main-page/styles/MainPageStyles';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(reducer => reducer?.user);

  return (
      <Nav className="bg-gray-800 py-4">
        <NavList>
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
                      className="py-2 px-4 text-sm"
                  >
                    Выход
                  </NavLink>
                </>
            ) : (
                <NavLink
                    to="/login"
                    className="py-2 px-4 text-sm"
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
