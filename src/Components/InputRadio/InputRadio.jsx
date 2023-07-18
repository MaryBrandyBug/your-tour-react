import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InputRadio.module.scss';

export default function InputRadio({
  name, onChange, value, id, checked, text,
}) {
  const cx = classNames.bind(styles);

  return (
    <label className={cx('age-check__radio-button-container')} htmlFor={id}>
      <input type="radio" name={name} value={value} className={cx('age-check__radio-button')} id={id} onChange={onChange} checked={checked} />
      <span className={cx('radio__border')} />
      <p className={cx('form-section__input-name')}>{text}</p>
    </label>
  );
}

InputRadio.defaultProps = {
  name: null,
  onChange: null,
  value: null,
  id: null,
  checked: null,
  text: null,
};

InputRadio.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  text: PropTypes.string,
};
