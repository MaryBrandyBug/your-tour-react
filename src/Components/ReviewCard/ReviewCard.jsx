import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ReviewCard.module.scss';

export default function ReviewCard({
  text, name, tour, img,
}) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('root')}>
      <p className={cx('content')}>
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
      <div className={cx('root__footer')}>
        <div className={cx('footer-content')}>
          <h3 className={cx('reviewer-name')}>{name}</h3>
          <p className={cx('reviewer-tour')}>
            Тур:
            {' '}
            {tour}
          </p>
        </div>
        <img src={img} alt="reviewer" className={cx('root__reviewer')} />
      </div>
    </div>
  );
}

ReviewCard.propTypes = {
  text: PropTypes.arrayOf((PropTypes.oneOfType([PropTypes.string]))),
  name: PropTypes.string,
  tour: PropTypes.string,
  img: PropTypes.string,
};
