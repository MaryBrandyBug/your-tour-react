import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ChooseTourSection.module.scss';

import TourCard from '../TourCard';
import data from './data';

export default function ChooseTour() {
  const cx = classNames.bind(styles);

  const menuItems = ['Авторские', 'Походы', 'Сплавы', 'Велопрогулки'];
  const menu = menuItems.map((item, i) => (
    <div className={cx('menu__item')} key={i}>
      <Link to="/" className={cx('menu__item-name')}>{item}</Link>
      <div className={cx('menu__item-line')} />
    </div>
  ));
  const tourCards = data.map((item, i) => <TourCard img={item} key={i} alt="Tour cover" />);
  return (
    <div className={cx('root', 'section')} id="chooseTour">
      <div className={cx('header', 'section__header__flex')}>
        <h2 className={cx('header__title', 'section__header__title')}>Выбери свой тур</h2>
        <div className={cx('header__menu')}>
          <div className={cx('menu__item')}>
            <p className={cx('menu__item-active')}>Популярные</p>
            <div className={cx('menu__item-line')} />
          </div>
          {menu}
        </div>
      </div>

      <div className={cx('content')}>
        {tourCards}
      </div>
    </div>
  );
}
