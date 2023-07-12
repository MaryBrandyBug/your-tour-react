import React from 'react';
import classNames from 'classnames/bind';
import styles from './TravelPhotoSection.module.scss';

import { data1, data2, data3 } from './data';

export default function TravelPhoto() {
  const cx = classNames.bind(styles);

  const firstLine = data1.map((el) => <img src={el.path} alt="travel memories" className={cx(el.firstClass, el.secondClass || '')} />);
  const secondLine = data2.map((el) => <img src={el.path} alt="travel memories" className={cx(el.firstClass, el.secondClass || '')} />);
  const thirdLine = data3.map((el) => <img src={el.path} alt="travel memories" className={cx(el.firstClass, el.secondClass || '')} />);

  return (
    <div className={cx('travel-photo-section', 'section')}>
      <div className={cx('travel-photo-section__header', 'section__header__flex')}>
        <h2 className={cx('travel-photo-section__header__title', 'section__header__title')}>Фотографии путешествий</h2>
        <p className={cx('travel-photo-section__header__subtitle', 'section__header__subtitle')}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
      </div>
      <div className={cx('travel-photo-section__content', 'section__content__flex')}>
        <div className={cx('travel-photo-section__photo-container', 'big')}>
          {firstLine}
        </div>
        <div className={cx('travel-photo-section__photo-container', 'small')}>
          {secondLine}
        </div>
        <div className={cx('travel-photo-section__photo-container', 'big')}>
          {thirdLine}
        </div>
      </div>
    </div>
  );
}
