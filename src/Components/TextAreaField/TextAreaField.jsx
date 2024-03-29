import React from 'react';
import { string, func } from 'prop-types';
import classNames from 'classnames/bind';
import s from './TextAreaField.module.scss';

export default function TextAreaField({
  fieldName, name, onChange, maxLength, value,
}) {
  const cx = classNames.bind(s);

  return (
    <div className={s.root}>
      <p className={cx('input-name')}>{fieldName}</p>
      <textarea name={name} value={value} className={cx('input-field-comment', 'input-comment')} onChange={onChange} maxLength={maxLength} />
    </div>
  );
}

TextAreaField.propTypes = {
  fieldName: string,
  name: string,
  onChange: func,
  maxLength: string,
  value: string,
};
