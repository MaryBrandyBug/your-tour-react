import React from 'react';
import { string } from 'prop-types';

export default function Button({ text, type, className }) {
  return (
    <button type={type} className={className}>{text}</button>
  );
}

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  text: string,
  type: string,
  className: string,
};
