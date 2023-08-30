import React from 'react';
import classNames from 'classnames/bind';
import styles from './ReviewsSection.module.scss';

import ReviewCard from '../ReviewCard';
import Title from '../Title';
import data from './data';

export default function Reviews() {
  const cx = classNames.bind(styles);

  const cards = data.map((item) => <ReviewCard text={item.text} name={item.name} tour={item.tour} img={item.img} key={item.id} />);

  return (
    <div className={cx('root')} id="reviews">
      <Title
        title="Отзывы наших путешественников"
        subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
        headerClassName={cx('sectionHeader')}
        titleClassName={cx('sectionTitle')}
        subtitleClassName={cx('sectionSubtitle')}
      />
      <div className={cx('content')}>
        {cards}
      </div>
    </div>
  );
}
