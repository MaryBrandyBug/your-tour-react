import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ text, btnType, btnClass }) {
  return (
    <button type={btnType ? 'submit' : 'button'} className={btnClass}>{text}</button>
  );
}

Button.defaultProps = {
  text: null,
  btnType: null,
  btnClass: null,
};

Button.propTypes = {
  text: PropTypes.string,
  btnType: PropTypes.string,
  btnClass: PropTypes.string,
};
