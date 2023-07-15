import React from 'react';
import classNames from 'classnames/bind';
import styles from './TextAreaField.module.scss';

export default function TextAreaField({ fieldName, name, onChange }) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('form-section__input-comment-container')}>
      <p className={cx('form-section__input-name')}>{fieldName}</p>
      <textarea name={name} className={cx('form-section__input-field-comment', 'input-comment')} onChange={onChange} />
    </div>
  );
}
