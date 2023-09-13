import React from 'react';
import classNames from 'classnames/bind';
import styles from './TravelStoriesSection.module.scss';

import StoryCard from '../StoryCard';
import Title from '../Title';
import data from './data';

export default function TravelStories() {
  const cx = classNames.bind(styles);

  const cards = data.map((item) => <StoryCard key={item.id} networks={item.media} header={item.header} text={item.text} list={item.advantagesList} img={item.img} link={item.link} />);

  return (
    <div className={cx('root')} id="travelStories">
      <Title
        title="Истории путешествий"
        subtitle={(
          <>
            Идейные соображения высшего порядка, а
            {' '}
            <br />
            также рамки и место обучения кадров
          </>
)}
        titleClassName={cx('sectionTitle')}
        subtitleClassName={cx('sectionSubtitle')}
      />
      <div className={cx('content')}>
        {cards}
      </div>
    </div>
  );
}
