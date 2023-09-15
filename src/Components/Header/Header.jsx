import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Button from '../Button';

export default function Header() {
  const cx = classNames.bind(styles);
  const [fixedMenu, setFixedMenu] = useState({ fixed: false, offset: 0 });
  const headerRef = useRef(null);

  const handleScroll = (currentOffset) => {
    if (window.scrollY > (450)) {
      setFixedMenu({ fixed: true, offset: currentOffset });
    } else {
      setFixedMenu({ fixed: false, offset: 0 });
    }
  };

  const menuItems = [{ item: 'Туры', id: 'chooseTour' }, { item: 'Создать тур', id: 'createTour' }, { item: 'Отзывы', id: 'reviews' }, { item: 'Истории', id: 'travelStories' }];
  const menu = menuItems.map((i) => <HashLink to={`#${i.id}`} key={i.id} className={cx('item')}>{i.item}</HashLink>);

  useEffect(() => {
    const header = headerRef.current.getBoundingClientRect();
    const scrollEvent = () => {
      handleScroll(header.top);
    };

    window.addEventListener('scroll', scrollEvent);
    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return (
    <header className={cx('root')}>
      <div ref={headerRef} className={cx('navbar__container', { fixed: fixedMenu.fixed })}>
        <div className={cx('navbar')}>
          <div className={cx('navbar__logo')}>
            <img src={fixedMenu.fixed ? '/your-tour-react/images/YourTourBlack.svg' : '/your-tour-react/images/YourTour.png'} alt="logo" className={cx('YourTourLogo')} />
            {/* извините за тернарку :( */}
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
