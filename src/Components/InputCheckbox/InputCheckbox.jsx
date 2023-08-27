import React from 'react';
import { string, func, bool } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InputCheckbox.module.scss';

export default function InputCheckbox({
  name, id, onChange, checked,
}) {
  const cx = classNames.bind(styles);

  return (
    <label className={cx('root')} htmlFor={id}>
      <input type="checkbox" name={name} checked={checked} className={cx('checkbox_button')} id={id} onChange={onChange} />
      <span className={cx('checkbox__border')} />
    </label>
  );
}

InputCheckbox.propTypes = {
  name: string,
  id: string,
  checked: bool,
  onChange: func,
};
