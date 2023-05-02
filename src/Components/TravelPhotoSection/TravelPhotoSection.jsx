import React from 'react';
import classNames from 'classnames/bind';
import styles from './TravelPhotoSection.module.scss';

export default function TravelPhoto() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('travel-photo-section', 'section')}>
      <div className={cx('travel-photo-section__header', 'section__header__flex')}>
        <h2 className={cx('travel-photo-section__header__title', 'section__header__title')}>Фотографии путешествий</h2>
        <p className={cx('travel-photo-section__header__subtitle', 'section__header__subtitle')}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
      </div>
      <div className={cx('travel-photo-section__content', 'section__content__flex')}>
        <div className={cx('travel-photo-section__photo-container', 'big')}>
          <img src="/your-tour-react/images/travelphoto-1.png" alt="travel memories" className={cx('travel-photo-section__big-photo')} />
          <img src="/your-tour-react/images/travelphoto-2.png" alt="travel memories" className={cx('travel-photo-section__big-photo', 'max-size')} />
          <img src="/your-tour-react/images/travelphoto-3.png" alt="travel memories" className={cx('travel-photo-section__big-photo', 'max-middle-size')} />
          <img src="/your-tour-react/images/travelphoto-4.png" alt="travel memories" className={cx('travel-photo-section__big-photo')} />
        </div>
        <div className={cx('travel-photo-section__photo-container', 'small')}>
          <img src="/your-tour-react/images/travelphoto-5.png" alt="travel memories" className={cx('travel-photo-section__small-photo')} />
          <img src="/your-tour-react/images/travelphoto-6.png" alt="travel memories" className={cx('travel-photo-section__small-photo', 'max-middle-size')} />
          <img src="/your-tour-react/images/travelphoto-7.png" alt="travel memories" className={cx('travel-photo-section__small-photo', 'max-size')} />
          <img src="/your-tour-react/images/travelphoto-8.png" alt="travel memories" className={cx('travel-photo-section__small-photo')} />
          <img src="/your-tour-react/images/travelphoto-13.png" alt="travel memories" className={cx('travel-photo-section__small-photo')} />
        </div>
        <div className={cx('travel-photo-section__photo-container', 'big')}>
          <img src="/your-tour-react/images/travelphoto-9.png" alt="travel memories" className={cx('travel-photo-section__big-photo')} />
          <img src="/your-tour-react/images/travelphoto-10.png" alt="travel memories" className={cx('travel-photo-section__big-photo')} />
          <img src="/your-tour-react/images/travelphoto-11.png" alt="travel memories" className={cx('travel-photo-section__big-photo', 'max-middle-size')} />
          <img src="/your-tour-react/images/travelphoto-12.png" alt="travel memories" className={cx('travel-photo-section__big-photo', 'max-size')} />
        </div>
      </div>
    </div>
  );
}
