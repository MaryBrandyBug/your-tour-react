import React from 'react';

export default function Button({ text, btnType, btnClass }) {
  return (
    <button type={btnType ? 'submit' : 'button'} className={btnClass}>{text}</button>
  );
}
