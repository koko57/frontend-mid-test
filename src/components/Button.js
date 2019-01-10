import React from 'react';
import './Button.scss';

const Button = ({link, text}) => {
  return (
    <div className="button">
      <a href={link}>{text}</a>
    </div>
  )
}

export default Button
