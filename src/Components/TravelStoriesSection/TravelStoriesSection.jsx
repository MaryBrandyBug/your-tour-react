import React from 'react';
import classNames from 'classnames/bind';
import styles from './TravelStoriesSection.module.scss';

import StoryCard from '../StoryCard';
import data from './data';

export default function TravelStories() {
  const cx = classNames.bind(styles);

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
        <StoryCard networks={[{ name: data.inst, id: '1' }, { name: data.facebook, id: '2' }, { name: data.youTube, id: '3' }]} header={data.storyHeader} text={data.storyText} img="/your-tour-react/images/story1.png" list={data.advantagesList} />
        <StoryCard networks={[{ name: data.inst, id: '1' }, { name: data.vk, id: '2' }]} header={data.storyHeader} text={data.storyText} img="/your-tour-react/images/story2.png" />
        <StoryCard networks={[{ name: data.inst, id: '1' }, { name: data.facebook, id: '2' }, { name: data.vk, id: '3' }]} header={data.storyHeader} text={data.storyText} img="/your-tour-react/images/story3.png" />
      </div>
    </div>
  );
}
