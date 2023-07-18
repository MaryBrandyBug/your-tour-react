import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ReviewCard.module.scss';

export default function ReviewCard({
  text, name, tour, img,
}) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('review-section__review-card')}>
      <p className={cx('review-section__review-card-text')}>
        {text[0]}
        {text.length > 1
          ? (
            <>
              <br />
              <br />
              {text[1]}
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

ReviewCard.defaultProps = {
  text: null,
  name: null,
  tour: null,
  img: null,
};

ReviewCard.propTypes = {
  text: PropTypes.arrayOf((PropTypes.oneOfType([PropTypes.string]))),
  name: PropTypes.string,
  tour: PropTypes.string,
  img: PropTypes.string,
};
