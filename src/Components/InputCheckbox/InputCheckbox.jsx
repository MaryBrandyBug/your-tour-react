import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InputCheckbox.module.scss';

export default function InputCheckbox({ name, id, onChange }) {
  const cx = classNames.bind(styles);

  return (
    <label className={cx('root')} htmlFor={id}>
      <input type="checkbox" name={name} className={cx('checkbox_button')} id={id} onChange={onChange} />
      <span className={cx('checkbox__border')} />
    </label>
  );
}

InputCheckbox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
};
