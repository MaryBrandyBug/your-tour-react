import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './DetailsBtn.module.scss';

import Arrow from '../Arrow';

export default function DetailsBtn({ additionalClass }) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('info-link__container', additionalClass)}>
      <Link className={cx('info-link__text')} to="/">Подробнее</Link>
      <div className={cx('info-link__arrow')}>
        {/* <img src="/your-tour-react/images/Vector.png" alt="arrow" /> */}
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
