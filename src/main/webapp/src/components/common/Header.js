import React from 'react';
import { Nav, NavItem, NavLink, NavList } from '../main-page/styles/MainPageStyles';
import { useSelector } from 'react-redux';
import { Avatar } from '../practice-page/styles/CommentSectionStyles';
import { Form } from '../login-page/styles/LoginPageStyles';

const Header = () => {
  const user = useSelector(reducer => reducer?.user);
  const onLogout = () => {
    document.getElementById('logout-form').submit();
  };

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
                      title={user.username}
                  />
                  <NavLink
                      onClick={onLogout}
                      className="py-2 px-4 text-sm"
                  >
                    Выход
                  </NavLink>
                  <Form id="logout-form" className="hidden" action="/logout" method="GET" />
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
