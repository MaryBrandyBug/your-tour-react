import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ChooseTourSection.module.scss';

import TourCard from '../TourCard';
import { menuItems, cards } from './data';

export default function ChooseTour() {
  const cx = classNames.bind(styles);

  const menu = menuItems.map((item) => (
    <div className={cx('item')} key={item.id}>
      <Link to="/" className={cx('menu__item-name')}>{item.name}</Link>
    </div>
  ));
  const tourCards = cards.map((item) => <TourCard img={item.path} key={item.id} alt="Tour cover" />);
  return (
    <div className={cx('root', 'section')} id="chooseTour">
      <div className={cx('header', 'section__header__flex')}>
        <h2 className={cx('title', 'section__header__title')}>Выбери свой тур</h2>
        <div className={cx('menu')}>
          {menu}
        </div>
      </div>

      <div className={cx('content')}>
        {tourCards}
      </div>
    </div>
  );
}
