import React from 'react';
import s from './TravelStoriesSection.module.scss';

import StoryCard from '../StoryCard';
import Title from '../Title';
import data from './data';

export default function TravelStories() {
  const cards = data.map((item) => <StoryCard key={item.id} networks={item.media} header={item.header} text={item.text} list={item.advantagesList} img={item.img} link={item.link} />);

  return (
    <div className={s.root} id="travelStories">
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
        titleClassName={s.sectionTitle}
        subtitleClassName={s.sectionSubtitle}
      />
      <div className={s.content}>
        {cards}
      </div>
    </div>
  );
}
