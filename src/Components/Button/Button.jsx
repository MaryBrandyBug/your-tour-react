import React from 'react';
import { string, func } from 'prop-types';

export default function Button({
  text, type, className, onClick, cbData,
}) {
  const handleClick = () => {
    if (cbData) {
      onClick(cbData);
    }
  };

  return (
    <button type={type} className={className} onClick={handleClick || onClick}>{text}</button>
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
  cbData: string,
};
