import React from 'react';
import classNames from 'classnames/bind';
import styles from './TravelStoriesSection.module.scss';

import StoryCard from '../StoryCard';
import data from './data';

export default function TravelStories() {
  const cx = classNames.bind(styles);

  const cards = data.map((item) => <StoryCard key={item.id} networks={item.media} header={item.header} text={item.text} list={item.advantagesList} img={item.img} link={item.link} />);
  return (
    <div className={cx('root', 'section')} id="travelStories">
      <div className={cx('header', 'section__header__flex')}>
        <h2 className={cx('title', 'section__header__title')}>Истории путешествий</h2>
        <p className={cx('subtitle', 'section__header__subtitle')}>
          Идейные соображения высшего порядка, а
          {' '}
          <br />
          также рамки и место обучения кадров
        </p>
      </div>
      <div className={cx('content', 'section__content__flex')}>
        {cards}
      </div>
    </div>
  );
}
