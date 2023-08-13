import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MailSection.module.scss';

export default function MailSection() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('root')}>
      <img src="/your-tour-react/images/footerPhoto.png" alt="beautiful view" className={cx('photo')} />
      <div className={cx('content')}>
        <h3 className={cx('content__header')}>Пора в путешествие вместе с нами!</h3>
        <p className={cx('content__text')}>
          Напиши на почту и узнай подробности на
          {' '}
          <Link to="mailto:yourtour@gmail.com" className={cx('content__mail')}>yourtour@gmail.com</Link>
        </p>
      </div>
    </div>
  );
}
