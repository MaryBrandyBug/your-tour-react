import React from 'react';
import styles from './DetailsBtn.module.scss';

export default function DetailsBtn({ additionalClass }) {
  return (
    <div className={styles['info-link__container'] + ` ${additionalClass}`}>
      <p className={styles['info-link__text']}>Подробнее</p>
      <div className={styles['info-link__arrow']}>
        <img src="/your-tour-react/images/Vector.png" alt="arrow" />
      </div>
    </div>
  );
}
