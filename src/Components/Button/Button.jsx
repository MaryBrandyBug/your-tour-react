import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ text, type, className }) {
  return (
    <button type={type} className={className}>{text}</button>
  );
}

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
