import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TourCard.module.scss';

import DetailsBtn from '../DetailsBtn';

export default function TourCard({ img }) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('choose-tour__card')}>
      <div className={cx('choose-tour__card-content')}>
        <div className={cx('choose-tour__text-container')}>
          <h3 className={cx('info-cards__header')}>Путешествие в горы</h3>
          <p className={cx('choose-tour__card__subtitle')}>от 80 000 руб</p>
        </div>
        <DetailsBtn additionalClass={cx('choose-tour__link')} />
      </div>
      <img src={img} className={cx('choose-tour__card__background')} alt="tour cover" />
    </div>
  );
}

TourCard.defaultProps = {
  img: null,
};

TourCard.propTypes = {
  img: PropTypes.string,
};
