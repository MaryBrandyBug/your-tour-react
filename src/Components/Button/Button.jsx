import React from 'react';
import { string, func } from 'prop-types';

export default function Button({
  text, type, className, onClick,
}) {
  return (
    <button type={type} className={className} onClick={onClick}>{text}</button>
  );
}

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  text: string,
  type: string,
  className: string,
  onClick: func,
};
