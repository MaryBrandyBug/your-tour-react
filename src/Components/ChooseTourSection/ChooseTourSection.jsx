import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ChooseTourSection.module.scss';

import TourCard from '../TourCard';
import data from './data';

export default function ChooseTour() {
  const cx = classNames.bind(styles);

  const menuItems = [{ name: 'Авторские', id: '1' }, { name: 'Походы', id: '2' }, { name: 'Сплавы', id: '3' }, { name: 'Велопрогулки', id: '4' }];
  const menu = menuItems.map((item) => (
    <div className={cx('menu__item')} key={item.id}>
      <Link to="/" className={cx('menu__item-name')}>{item.name}</Link>
      <div className={cx('menu__item-line')} />
    </div>
  ));
  const tourCards = data.map((item) => <TourCard img={item.path} key={item.id} alt="Tour cover" />);
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
