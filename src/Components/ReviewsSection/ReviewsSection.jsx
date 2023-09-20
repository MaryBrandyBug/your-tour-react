import React from 'react';
import s from './ReviewsSection.module.scss';

import ReviewCard from '../ReviewCard';
import Title from '../Title';
import data from './data';

export default function Reviews() {
  const cards = data.map((item) => <ReviewCard text={item.text} name={item.name} tour={item.tour} img={item.img} key={item.id} />);

  return (
    <div className={s.root} id="reviews">
      <Title
        title="Отзывы наших путешественников"
        subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
        titleClassName={s.sectionTitle}
        subtitleClassName={s.sectionSubtitle}
      />
      <div className={s.content}>
        {cards}
      </div>
    </div>
  );
}
