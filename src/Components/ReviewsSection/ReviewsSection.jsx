import React from 'react';
import styles from './ReviewsSection.module.scss';

import ReviewCard from '../ReviewCard/ReviewCard';

import { data } from './data';

export default function Reviews() {
  return (
    <div className={styles['review-section'] + ' section'} id="reviews">
      <div className={styles['review-section__header'] + ' section__header__flex'}>
        <h2 className={styles['review-section__header__title'] + ' section__header__title'}>Отзывы наших путешественников</h2>
        <p className={styles['review-section__header__subtitle'] + ' section__header__subtitle'}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
      </div>
      <div className={styles['review-section__content']}>
        {data.map((item) => <ReviewCard text={item.text[0]} textSecondPart={item.text[1]} name={item.name} tour={item.tour} img={item.img} />)}
      </div>
    </div>
  );
}
