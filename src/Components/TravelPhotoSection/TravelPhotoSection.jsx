import React from 'react';
import classNames from 'classnames/bind';
import styles from './TravelPhotoSection.module.scss';

import Title from '../Title';
import data from './data';

export default function TravelPhoto() {
  const cx = classNames.bind(styles);

  const photos = data.map((el) => <img key={el.id} src={el.path} alt="travel memories" className={cx(el.size === 'big' ? 'big-photo' : 'small-photo', !el.width1630 && !el.width992 ? 'max-size' : '', el.width1630 && !el.width992 ? 'max-middle-size' : '')} />);

  return (
    <div className={cx('root', 'section')}>
      <Title title="Фотографии путешествий" subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров" headerClassName={cx('sectionHeader')} subtitleClassName={cx('sectionSubtitle')} />
      <div className={cx('content')}>
        {photos}
      </div>
    </div>
  );
}
