import React from 'react';
import classNames from 'classnames/bind';
import s from './Footer.module.scss';
import data from './data';

export default function Footer() {
  const cx = classNames.bind(s);

  const networks = data.map((item) => (
    <div key={item.id} className={s.linkBlock}>
      <a className={cx('social-network')} href={item.link}>
        <div className={cx('link-icon')}><img src={item.img} alt={item.alt} /></div>
        {item.text}
      </a>
    </div>
  ));

  return (
    <div className={s.root}>
      <p className={s.text}>Наши социальные сети</p>
      <div className={s.networks}>
        {networks}
      </div>
    </div>
  );
}
