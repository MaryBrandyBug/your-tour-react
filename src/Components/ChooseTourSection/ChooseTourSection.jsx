import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ChooseTourSection.module.scss';

import TourCard from '../TourCard';
import Title from '../Title';
import Menu from '../Menu';
import { menuItems, cards } from './data';

export default function ChooseTour() {
  const cx = classNames.bind(styles);

  const [activeItem, setActiveItem] = useState('Популярные');
  const changeActiveItem = (item) => {
    setActiveItem(item);
  };

  const tourCards = cards.map((item) => <TourCard img={item.path} key={item.id} title={item.title} price={item.price} link={item.link} alt="Tour cover" />);

  return (
    <div className={cx('root', 'section')} id="chooseTour">
      <Title menu={<Menu items={menuItems} activeItem={activeItem} changeActiveItem={changeActiveItem} />} title="Выбери свой тур" headerClassName={cx('sectionHeader')} titleClassName={cx('sectionTitle')} />
      <div className={cx('content')}>
        {tourCards}
      </div>
    </div>
  );
}
