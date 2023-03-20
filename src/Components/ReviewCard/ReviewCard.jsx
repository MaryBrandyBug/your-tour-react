import React from 'react';
import styles from './ReviewCard.module.scss';

export default function ReviewCard({
  text, name, tour, textSecondPart, img,
}) {
  return (
    <div className={styles['review-section__review-card']}>
      <p className={styles['review-section__review-card-text']}>
        {text}
        {textSecondPart
          ? (
            <>
              <br />
              <br />
              {textSecondPart}
            </>
          )
          : ''}
      </p>
      <div className={styles['review-section__review-card__footer']}>
        <div className={styles['review-section__footer-content']}>
          <h3 className={styles['review-section__reviewer-name']}>{name}</h3>
          <p className={styles['review-section__reviewer-tour']}>
            Тур:
            {' '}
            {tour}
          </p>
        </div>
        <img src={img} alt="reviewer" className={styles['footer-content__reviewer']} />
      </div>
    </div>
  );
}
