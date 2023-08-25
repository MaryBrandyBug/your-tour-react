import React from 'react';
import { string, func } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InputField.module.scss';

export default function InputField({
  type, name, onChange, placeholder, inputFieldName, maxLength,
}) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('root')}>
      <div className={cx('content')}>
        <p className={cx('input-name')}>{inputFieldName}</p>
        <input type={type} name={name} className={cx('input-field')} placeholder={placeholder} maxLength={maxLength} onChange={onChange} />
      </div>
    </div>
  );
}

InputField.propTypes = {
  type: string,
  name: string,
  onChange: func,
  placeholder: string,
  inputFieldName: string,
  maxLength: string,
};
