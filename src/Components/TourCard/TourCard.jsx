import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TourCard.module.scss';

import DetailsBtn from '../DetailsBtn';

export default function TourCard({ img }) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('root')}>
      <div className={cx('content')}>
        <div className={cx('text-container')}>
          <h3 className={cx('info-cards__header')}>Путешествие в горы</h3>
          <p className={cx('subtitle')}>от 80 000 руб</p>
        </div>
        <DetailsBtn additionalClass={cx('choose-tour__link')} />
      </div>
      <img src={img} className={cx('root__background')} alt="tour cover" />
    </div>
  );
}

TourCard.defaultProps = {
  img: null,
};

TourCard.propTypes = {
  img: PropTypes.string,
};
