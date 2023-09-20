import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames/bind';
import s from './Header.module.scss';

import Button from '../Button';

export default function Header() {
  const cx = classNames.bind(s);

  const [fixedMenu, setFixedMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > (90)) {
      setFixedMenu(true);
    } else {
      setFixedMenu(false);
    }
  };

  const menuItems = [{ item: 'Туры', id: 'chooseTour' }, { item: 'Создать тур', id: 'createTour' }, { item: 'Отзывы', id: 'reviews' }, { item: 'Истории', id: 'travelStories' }];
  const menu = menuItems.map((i) => <HashLink to={`#${i.id}`} key={i.id} className={s.item}>{i.item}</HashLink>);

  useEffect(() => {
    const scrollEvent = () => {
      handleScroll();
    };

    window.addEventListener('scroll', scrollEvent);
    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [window.scrollY]);

  return (
    <div className={s.root}>
      <div className={cx('navbar__container', { fixed: fixedMenu })}>
        <div className={s.navbar}>
          <div className={cx('navbar__logo')}>
            <img src={fixedMenu ? '/your-tour-react/images/YourTourBlack.svg' : '/your-tour-react/images/YourTour.png'} alt="logo" className={s.YourTourLogo} />
            {/* извините за тернарку :( */}
          </div>
          <div className={cx('navbar__menu')}>
            {menu}
          </div>
          <Link to="tel:+79999999999" className={s.telephone}>+7 999 999 99 99</Link>
        </div>
      </div>
      <header className={s.header}>
        <div className={s.content}>
          <h1 className={cx('content__title')}>Идеальные путешествия существуют</h1>
          <p className={cx('content__subtitle')}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
          <div className={cx('content__button')}>
            <Button text="Найти тур" className={cx('find-tour-btn')} />
          </div>
        </div>
      </header>
    </div>
  );
}
