import React from 'react';
import classNames from 'classnames/bind';
import styles from './TravelPhotoSection.module.scss';

import Title from '../Title';
import { data1, data2, data3 } from './data';

export default function TravelPhoto() {
  const cx = classNames.bind(styles);

  const firstLine = data1.map((el) => <img key={el.id} src={el.path} alt="travel memories" className={cx(el.firstClass, el.secondClass || '')} />);
  const secondLine = data2.map((el) => <img key={el.id} src={el.path} alt="travel memories" className={cx(el.firstClass, el.secondClass || '')} />);
  const thirdLine = data3.map((el) => <img key={el.id} src={el.path} alt="travel memories" className={cx(el.firstClass, el.secondClass || '')} />);

  return (
    <div className={cx('root', 'section')}>
      <Title title="Фотографии путешествий" subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров" headerClassName={cx('sectionHeader')} subtitleClassName={cx('sectionSubtitle')} />
      <div className={cx('content', 'section__content__flex')}>
        <div className={cx('content__photo-container', 'big')}>
          {firstLine}
        </div>
        <div className={cx('content__photo-container', 'small')}>
          {secondLine}
        </div>
        <div className={cx('content__photo-container', 'big')}>
          {thirdLine}
        </div>
      </div>
    </div>
  );
}
