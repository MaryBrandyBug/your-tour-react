import React from 'react';
import classNames from 'classnames/bind';
import styles from './ReviewsSection.module.scss';

import ReviewCard from '../ReviewCard';
import data from './data';

export default function Reviews() {
  const cx = classNames.bind(styles);

  const cards = data.map((item) => <ReviewCard text={item.text} name={item.name} tour={item.tour} img={item.img} key={item.id} />);

  return (
    <div className={cx('root', 'section')} id="reviews">
      <div className={cx('header', 'section__header__flex')}>
        <h2 className={cx('title', 'section__header__title')}>Отзывы наших путешественников</h2>
        <p className={cx('subtitle', 'section__header__subtitle')}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
      </div>
      <div className={cx('content')}>
        {cards}
      </div>
    </div>
  );
}
