import React from 'react';
import classNames from 'classnames/bind';
import styles from './ReviewsSection.module.scss';

import ReviewCard from '../ReviewCard';
import data from './data';

export default function Reviews() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('review-section', 'section')} id="reviews">
      <div className={cx('review-section__header', 'section__header__flex')}>
        <h2 className={cx('review-section__header__title', 'section__header__title')}>Отзывы наших путешественников</h2>
        <p className={cx('review-section__header__subtitle', 'section__header__subtitle')}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
      </div>
      <div className={cx('review-section__content')}>
        {data.map((item, i) => <ReviewCard text={item.text[0]} textSecondPart={item.text[1]} name={item.name} tour={item.tour} img={item.img} key={i} />)}
      </div>
    </div>
  );
}
