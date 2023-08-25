import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import data from './data';

export default function Footer() {
  const cx = classNames.bind(styles);

  const networks = data.map((item) => (
    <div key={item.id} className={cx('content__linkBlock')}>
      <div className={cx('link-icon')}><img src={item.img} alt={item.alt} /></div>
      <Link className={cx('social-network')} to={item.link}>{item.text}</Link>
    </div>
  ));

  return (
    <div className={cx('root')}>
      <div className={cx('content')}>
        <p className={cx('content__text')}>Наши социальные сети</p>
        <div className={cx('content__social-networks-links')}>
          {networks}
        </div>
      </div>
    </div>
  );
}
