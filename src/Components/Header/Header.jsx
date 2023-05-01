import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './Header.module.scss';

export default function Header() {
  const menuItems = [{ item: 'Туры', id: 'chooseTour' }, { item: 'Создать тур', id: 'createTour' }, { item: 'Отзывы', id: 'reviews' }, { item: 'Истории', id: 'travelStories' }];
  const menu = menuItems.map((i, index) => <HashLink to={`#${i.id}`} key={index} className={styles.menu__item + ' main-font-style'} style={{ textDecoration: 'none' }}>{i.item}</HashLink>);
  return (
    <header className={styles.header}>
      <div className={styles.header__navbar}>
        <div className={styles.navbar}>
          <div className={styles.navbar__logo}>
            <img src="/your-tour-react/images/YourTour.png" alt="logo" className={styles.YourTourLogo} />

          </div>
          <div className={styles.navbar__menu}>
            {menu}
          </div>
          <Link to="tel:+79999999999" className={styles.telephone + ' main-font-style'}>+7 999 999 99 99</Link>
        </div>
      </div>
      <div className={styles.header__content}>
        <h1 className={styles.header__content__title}>Идеальные путешествия существуют</h1>
        <p className={styles.header__content__subtitle + ' main-font-style'}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
        <div className={styles.header__content__button}>
          <button className={styles['find-tour-btn']}>Найти тур</button>
        </div>
      </div>
    </header>
  );
}
