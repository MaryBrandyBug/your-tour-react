import React from 'react';
import classNames from 'classnames/bind';
import styles from './TravelPhotoSection.module.scss';

import Title from '../Title';
import data from './data';

export default function TravelPhoto() {
  const cx = classNames.bind(styles);

  const photos = data.map((el) => <img key={el.id} src={el.path} alt="travel memories" className={cx('smallPhoto', { bigPhoto: el.bigSize, disappearFirst: el.isDisappearFirst, disappearSecond: el.isDisappearSecond })} />);

  return (
    <div className={cx('root')}>
      <Title title="Фотографии путешествий" subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров" subtitleClassName={cx('sectionSubtitle')} />
      <div className={cx('content')}>
        {photos}
      </div>
    </div>
  );
}
