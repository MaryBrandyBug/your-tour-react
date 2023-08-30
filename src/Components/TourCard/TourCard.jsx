import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TourCard.module.scss';

import DetailsBtn from '../DetailsBtn';

export default function TourCard({
  img, title, price, link,
}) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('root')}>
      <div className={cx('content')}>
        <div className={cx('text-container')}>
          <h3 className={cx('info-cards__header')}>{title}</h3>
          <p className={cx('subtitle')}>{price}</p>
        </div>
        <DetailsBtn additionalClass={cx('choose-tour__link')} link={link} />
      </div>
      <img src={img} className={cx('root__background')} alt="tour cover" />
    </div>
  );
}

TourCard.propTypes = {
  img: string,
  title: string,
  price: string,
  link: string,
};
