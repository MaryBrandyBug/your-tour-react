import React from 'react';
import {
  string, element, oneOfType,
} from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Title.module.scss';

export default function Title({
  menu, title, subtitle, headerClassName, titleClassName, subtitleClassName,
}) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('root', headerClassName)}>
      <h2 className={cx('title', titleClassName)}>{title}</h2>
      {subtitle
        ? <p className={cx('subtitle', subtitleClassName)}>{subtitle}</p>
        : null}
      {menu}
    </div>
  );
}

Title.propTypes = {
  title: string,
  subtitle: oneOfType([string, element]),
  menu: element,
  headerClassName: string,
  titleClassName: string,
  subtitleClassName: string,
};
