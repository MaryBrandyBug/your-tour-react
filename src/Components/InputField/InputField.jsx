import React from 'react';
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
