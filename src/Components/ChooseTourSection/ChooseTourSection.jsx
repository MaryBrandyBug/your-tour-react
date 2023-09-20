import React, { useState } from 'react';
import s from './ChooseTourSection.module.scss';

import TourCard from '../TourCard';
import Title from '../Title';
import Menu from '../Menu';
import { menuItems, cards } from './data';

export default function ChooseTour() {
  const [activeItem, setActiveItem] = useState('Популярные');
  const changeActiveItem = (item) => {
    setActiveItem(item);
  };

  const tourCards = cards.map((item) => <TourCard img={item.path} key={item.id} title={item.title} price={item.price} link={item.link} alt="Tour cover" />);

  return (
    <div className={s.root} id="chooseTour">
      <Title title="Выбери свой тур" headerClassName={s.sectionHeader} titleClassName={s.sectionTitle} />
      <Menu items={menuItems} className={s.menu} activeItem={activeItem} changeActiveItem={changeActiveItem} />
      <div className={s.content}>
        {tourCards}
      </div>
    </div>
  );
}
