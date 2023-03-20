import React from 'react';
import styles from './TravelPhotoSection.module.scss';

export default function TravelPhoto() {
  return (
    <div className={styles['travel-photo-section'] + ' section'}>
      <div className={styles['travel-photo-section__header'] + ' section__header__flex'}>
        <h2 className={styles['travel-photo-section__header__title'] + ' section__header__title'}>Фотографии путешествий</h2>
        <p className={styles['travel-photo-section__header__subtitle'] + ' section__header__subtitle'}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
      </div>
      <div className={styles['travel-photo-section__content'] + ' section__content__flex'}>
        <div className={styles['travel-photo-section__photo-container'] + ' ' + styles.big}>
          <img src="/images/travelphoto-1.png" alt="travel memories" className={styles['travel-photo-section__big-photo']} />
          <img src="/images/travelphoto-2.png" alt="travel memories" className={styles['travel-photo-section__big-photo'] + ' ' + styles['max-size']} />
          <img src="/images/travelphoto-3.png" alt="travel memories" className={styles['travel-photo-section__big-photo'] + ' ' + styles['max-middle-size']} />
          <img src="/images/travelphoto-4.png" alt="travel memories" className={styles['travel-photo-section__big-photo']} />
        </div>
        <div className={styles['travel-photo-section__photo-container'] + ' ' + styles.small}>
          <img src="/images/travelphoto-5.png" alt="travel memories" className={styles['travel-photo-section__small-photo']} />
          <img src="/images/travelphoto-6.png" alt="travel memories" className={styles['travel-photo-section__small-photo'] + ' ' + styles['max-middle-size']} />
          <img src="/images/travelphoto-7.png" alt="travel memories" className={styles['travel-photo-section__small-photo'] + ' ' + styles['max-size']} />
          <img src="/images/travelphoto-8.png" alt="travel memories" className={styles['travel-photo-section__small-photo']} />
          <img src="/images/travelphoto-13.png" alt="travel memories" className={styles['travel-photo-section__small-photo']} />
        </div>
        <div className={styles['travel-photo-section__photo-container'] + ' ' + styles.big}>
          <img src="/images/travelphoto-9.png" alt="travel memories" className={styles['travel-photo-section__big-photo']} />
          <img src="/images/travelphoto-10.png" alt="travel memories" className={styles['travel-photo-section__big-photo']} />
          <img src="/images/travelphoto-11.png" alt="travel memories" className={styles['travel-photo-section__big-photo'] + ' ' + styles['max-middle-size']} />
          <img src="/images/travelphoto-12.png" alt="travel memories" className={styles['travel-photo-section__big-photo'] + ' ' + styles['max-size']} />
        </div>
      </div>
    </div>
  );
}
