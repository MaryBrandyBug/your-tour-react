import React from 'react';
import styles from './TravelStoriesSection.module.scss';

import { StoryCard } from '../StoryCard';

export default function TravelStories() {
  const inst = 'instagram';
  const facebook = 'facebook';
  const youTube = 'YouTube';
  const vk = 'ВКонтакте';
  const storyHeader = 'Автостопом в Стамбул';
  const storyText = 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений';
  const advantagesList = ['вкусная еда', 'дешевый транспорт', 'красивый город'];
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
        <StoryCard networks={[inst, facebook, youTube]} header={storyHeader} text={storyText} img="/images/story1.png" list={advantagesList} additionalClassCards="first-story-card" />
        <StoryCard networks={[inst, vk]} header={storyHeader} text={storyText} img="/images/story2.png" additionalClassCards="second-story-card" />
        <StoryCard networks={[inst, facebook, vk]} header={storyHeader} text={storyText} img="/images/story3.png" additionalClassCards="third-story-card" />
      </div>
    </div>
  );
}
