import React from 'react';
import { Nav, NavItem, NavLink, NavList } from '../main-page/styles/MainPageStyles';
import { useSelector } from 'react-redux';
import { Avatar } from '../practice-page/styles/CommentSectionStyles';

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
            {user ? (<div className={'flex'}>
                  <Avatar
                      src={`https://ui-avatars.com/api/?name=${encodeURI(user.username)}`}
                      alt={user.username}
                  />
                  <NavLink
                      to="/logout"
                      className="py-2 px-4 text-sm"
                  >
                    Выход
                  </NavLink>
                </div>
            ) : (
                <NavLink
                    to="/loginreact"
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
