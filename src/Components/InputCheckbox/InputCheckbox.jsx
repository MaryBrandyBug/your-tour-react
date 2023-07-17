import React from 'react';
import classNames from 'classnames/bind';
import styles from './InputCheckbox.module.scss';

export default function InputCheckbox({ name, id, onChange }) {
  const cx = classNames.bind(styles);

  return (
    <label className={cx('checkbox_label')} htmlFor={id}>
      <input type="checkbox" name={name} className={cx('checkbox_button')} id={id} onChange={onChange} />
      <span className={cx('checkbox__border')} />
    </label>
  );
}
