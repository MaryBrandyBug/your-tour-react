import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InputField.module.scss';

export default function InputField({
  type, name, onChange, placeholder, inputFieldName, maxLength,
}) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('form-section__input-fields-container')}>
      <div className={cx('form-section__input-field-container')}>
        <p className={cx('form-section__input-name')}>{inputFieldName}</p>
        <input type={type} name={name} className={cx('form-section__input-field')} placeholder={placeholder} maxLength={maxLength} onChange={onChange} />
      </div>
    </div>
  );
}

InputField.defaultProps = {
  type: null,
  name: null,
  onChange: null,
  placeholder: null,
  inputFieldName: null,
  maxLength: null,
};

InputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  inputFieldName: PropTypes.string,
  maxLength: PropTypes.string,
};
