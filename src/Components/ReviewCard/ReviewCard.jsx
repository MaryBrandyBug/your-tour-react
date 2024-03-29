import React from 'react';
import { string, arrayOf, oneOfType } from 'prop-types';
import classNames from 'classnames/bind';
import s from './ReviewCard.module.scss';

export default function ReviewCard({
  text, name, tour, img,
}) {
  const cx = classNames.bind(s);

  const cardText = text.map((item, i) => (i === 0
    ? <span key={new Date().getTime() * Math.random()}>{item}</span>
    : (
      <span key={new Date().getTime() * Math.random()}>
        <br />
        <br />
        {' '}
        {item}
      </span>
    )
  ));

  return (
    <div className={s.root}>
      <p className={s.content}>
        {cardText}
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
  text: arrayOf((oneOfType([string]))),
  name: string,
  tour: string,
  img: string,
};
