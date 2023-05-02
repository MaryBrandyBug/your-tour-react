import React from 'react';
import classNames from 'classnames/bind';
import styles from './ReviewCard.module.scss';

export default function ReviewCard({
  text, name, tour, textSecondPart, img,
}) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('review-section__review-card')}>
      <p className={cx('review-section__review-card-text')}>
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
      <div className={cx('review-section__review-card__footer')}>
        <div className={cx('review-section__footer-content')}>
          <h3 className={cx('review-section__reviewer-name')}>{name}</h3>
          <p className={cx('review-section__reviewer-tour')}>
            Тур:
            {' '}
            {tour}
          </p>
        </div>
        <img src={img} alt="reviewer" className={cx('footer-content__reviewer')} />
      </div>
    </div>
  );
}
