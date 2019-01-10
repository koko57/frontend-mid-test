import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ link, text, small }) => {
  return (
    <Link
      to={link}
      className={small ? 'button button--small' : 'button'}
      tabIndex="0"
    >
      {text}
    </Link>
  );
};

export default Button;
