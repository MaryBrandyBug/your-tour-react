import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Button from '../Button';

export default function Header() {
  const cx = classNames.bind(styles);

  const menuItems = [{ item: 'Туры', id: 'chooseTour' }, { item: 'Создать тур', id: 'createTour' }, { item: 'Отзывы', id: 'reviews' }, { item: 'Истории', id: 'travelStories' }];
  const menu = menuItems.map((i) => <HashLink to={`#${i.id}`} key={i.id} className={cx('item')} style={{ textDecoration: 'none' }}>{i.item}</HashLink>);

  return (
    <header className={cx('root')}>
      <div className={cx('navbar__container')}>
        <div className={cx('navbar')}>
          <div className={cx('navbar__logo')}>
            <img src="/your-tour-react/images/YourTour.png" alt="logo" className={cx('YourTourLogo')} />

          </div>
          <div className={cx('navbar__menu')}>
            {menu}
          </div>
          <Link to="tel:+79999999999" className={cx('telephone')}>+7 999 999 99 99</Link>
        </div>
      </div>
      <div className={cx('content')}>
        <h1 className={cx('content__title')}>Идеальные путешествия существуют</h1>
        <p className={cx('content__subtitle')}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
        <div className={cx('content__button')}>
          <Button text="Найти тур" className={cx('find-tour-btn')} />
        </div>
      </div>
    </header>
  );
}
