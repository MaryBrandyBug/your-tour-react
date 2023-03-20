import React from 'react';
import styles from './TravelStoriesSection.module.scss';

import { StoryCard } from '../StoryCard';
import data from './data';

export default function TravelStories() {
  return (
    <div className={styles['travel-stories-section'] + ' section'} id="travelStories">
      <div className={styles['travel-stories-section__header'] + ' section__header__flex'}>
        <h2 className={styles['travel-stories-section__header__title'] + ' section__header__title'}>Истории путешествий</h2>
        <p className={styles['travel-stories-section__header__subtitle'] + ' section__header__subtitle'}>
          Идейные соображения высшего порядка, а
          {' '}
          <br />
          также рамки и место обучения кадров
        </p>
      </div>
      <div className={styles['travel-stories-section__content'] + ' section__content__flex'}>
        <StoryCard networks={[data.inst, data.facebook, data.youTube]} header={data.storyHeader} text={data.storyText} img="/your-tour-react/images/story1.png" list={data.advantagesList} />
        <StoryCard networks={[data.inst, data.vk]} header={data.storyHeader} text={data.storyText} img="/your-tour-react/images/story2.png" />
        <StoryCard networks={[data.inst, data.facebook, data.vk]} header={data.storyHeader} text={data.storyText} img="/your-tour-react/images/story3.png" />
      </div>
    </div>
  );
}
