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
    <div className={cx('root', 'section')}>
      <div className={cx('header', 'section__header__flex')}>
        <h2 className={cx('header__title', 'section__header__title')}>Фотографии путешествий</h2>
        <p className={cx('header__subtitle', 'section__header__subtitle')}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
      </div>
      <div className={cx('content', 'section__content__flex')}>
        <div className={cx('content__photo-container', 'big')}>
          {firstLine}
        </div>
        <div className={cx('content__photo-container', 'small')}>
          {secondLine}
        </div>
        <div className={cx('content__photo-container', 'big')}>
          {thirdLine}
        </div>
      </div>
    </div>
  );
}
