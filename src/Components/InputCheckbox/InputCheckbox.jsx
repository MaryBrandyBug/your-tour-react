import React from 'react';
import { string, func, bool } from 'prop-types';
import s from './InputCheckbox.module.scss';

export default function InputCheckbox({
  name, id, onChange, checked,
}) {
  return (
    <label className={s.root} htmlFor={id}>
      <input type="checkbox" name={name} checked={checked} className={s.button} id={id} onChange={onChange} />
      <span className={s.border} />
    </label>
  );
}

InputCheckbox.propTypes = {
  name: string,
  id: string,
  checked: bool,
  onChange: func,
};
