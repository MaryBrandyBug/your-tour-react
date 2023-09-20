import React from 'react';
import cx from 'classnames';
import s from './TravelPhotoSection.module.scss';

import Title from '../Title';
import data from './data';

export default function TravelPhoto() {
  const photos = data.map((el) => <img key={el.id} src={el.path} alt="travel memories" className={cx(s.smallPhoto, { [s.bigPhoto]: el.bigSize, [s.disappearFirst]: el.isDisappearFirst, [s.disappearSecond]: el.isDisappearSecond })} />);

  return (
    <div className={s.root}>
      <Title title="Фотографии путешествий" subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров" subtitleClassName={s.sectionSubtitle} />
      <div className={s.content}>
        {photos}
      </div>
    </div>
  );
}
