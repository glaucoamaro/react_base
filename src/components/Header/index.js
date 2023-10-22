import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';
import { userRequest } from '../../redux/modules/user/actions';

export default function Header() {
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);

  const dispatch = useDispatch();

  const handleClickLogin = () => {
    dispatch(userRequest({ name: 'Glauco', age: 17 }));
  };
  const handleClickLogout = () => {
    dispatch(userRequest());
  };

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/exit">
        <FaSignInAlt size={24} />
      </Link>
      <button type="submit" onClick={handleClickLogin}>
        Login
      </button>
      <button type="submit" onClick={handleClickLogout}>
        Logout
      </button>
      {currentUser ? 'clicked' : 'not clicked'}
    </Nav>
  );
}
