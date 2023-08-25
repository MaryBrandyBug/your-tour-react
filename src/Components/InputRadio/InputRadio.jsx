import React from 'react';
import { string, bool, func } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InputRadio.module.scss';

export default function InputRadio({
  name, onChange, value, id, checked, text,
}) {
  const cx = classNames.bind(styles);

  return (
    <label className={cx('root')} htmlFor={id}>
      <input type="radio" name={name} value={value} className={cx('radio-button')} id={id} onChange={onChange} checked={checked} />
      <span className={cx('radio__border')} />
      <p className={cx('input-name')}>{text}</p>
    </label>
  );
}

InputRadio.propTypes = {
  name: string,
  onChange: func,
  value: string,
  id: string,
  checked: bool,
  text: string,
};
