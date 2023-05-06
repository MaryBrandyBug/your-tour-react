import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Button from '../Button';

export default function Header() {
  const cx = classNames.bind(styles);

  const menuItems = [{ item: 'Туры', id: 'chooseTour' }, { item: 'Создать тур', id: 'createTour' }, { item: 'Отзывы', id: 'reviews' }, { item: 'Истории', id: 'travelStories' }];
  const menu = menuItems.map((i, index) => <HashLink to={`#${i.id}`} key={index} className={cx('menu__item')} style={{ textDecoration: 'none' }}>{i.item}</HashLink>);
  return (
    <header className={cx('header')}>
      <div className={cx('header__navbar')}>
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
      <div className={cx('header__content')}>
        <h1 className={cx('header__content__title')}>Идеальные путешествия существуют</h1>
        <p className={cx('header__content__subtitle')}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
        <div className={cx('header__content__button')}>
          <Button text="Найти тур" btnClass={cx('find-tour-btn')} />
        </div>
      </div>
    </header>
  );
}
