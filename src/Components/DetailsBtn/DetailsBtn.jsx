import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './DetailsBtn.module.scss';

import Arrow from '../Arrow';

export default function DetailsBtn({ additionalClass }) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('root', additionalClass)}>
      <Link className={cx('root__text')} to="/">Подробнее</Link>
      <div className={cx('root__arrow')}>
        <Arrow />
      </div>
    </div>
  );
}

DetailsBtn.defaultProps = {
  additionalClass: null,
};

DetailsBtn.propTypes = {
  additionalClass: PropTypes.string,
};
