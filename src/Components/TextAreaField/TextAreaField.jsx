import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TextAreaField.module.scss';

export default function TextAreaField({ fieldName, name, onChange }) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('root')}>
      <p className={cx('input-name')}>{fieldName}</p>
      <textarea name={name} className={cx('input-field-comment', 'input-comment')} onChange={onChange} />
    </div>
  );
}

TextAreaField.propTypes = {
  fieldName: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};
