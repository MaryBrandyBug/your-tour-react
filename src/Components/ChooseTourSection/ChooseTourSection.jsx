import React from 'react';
import styles from './ChooseTourSection.module.scss';

import TourCard from '../TourCard';
import data from './data';

export default function ChooseTour() {
  const menuItems = ['Авторские', 'Походы', 'Сплавы', 'Велопрогулки'];
  const menu = menuItems.map((item) => (
    <div className={styles['choose-tour-section_menu__item']}>
      <p className={styles['choose-tour-section_menu__item-name']}>{item}</p>
      <div className={styles['choose-tour-section_menu__item-line']} />
    </div>
  ));
  const tourCards = data.map((item) => <TourCard img={item} />)
  return (
    <div className={styles['choose-tour-section'] + ' section'} id="chooseTour">
      <div className={styles['choose-tour-section__header'] + ' section__header__flex'}>
        <h2 className={styles['choose-tour-section__header__title'] + ' section__header__title'}>Выбери свой тур</h2>
        <div className={styles['choose-tour-section__header__menu']}>
          <div className={styles['choose-tour-section_menu__item']}>
            <p className={styles['choose-tour-section_menu__active-item']}>Популярные</p>
            <div className={styles['choose-tour-section_menu__item-line']} />
          </div>
          {menu}
        </div>
      </div>

      <div className={styles['choose-tour-section__content']}>
        {tourCards}
      </div>
    </div>
  );
}
