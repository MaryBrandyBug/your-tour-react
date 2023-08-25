import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './DetailsBtn.module.scss';

import Arrow from '../Arrow';

export default function DetailsBtn({ additionalClass, link }) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('root', additionalClass)}>
      <Link className={cx('root__text')} to={link}>Подробнее</Link>
      <div className={cx('root__arrow')}>
        <Arrow />
      </div>
    </div>
  );
}

DetailsBtn.propTypes = {
  additionalClass: PropTypes.string,
  link: PropTypes.string,
};
