import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DetailsBtn.module.scss';

export default function DetailsBtn({ additionalClass }) {
  return (
    <div className={styles['info-link__container'] + ` ${additionalClass}`}>
      <Link className={styles['info-link__text']}>Подробнее</Link>
      <div className={styles['info-link__arrow']}>
        <img src="/your-tour-react/images/Vector.png" alt="arrow" />
      </div>
    </div>
  );
}
