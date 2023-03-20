import React from 'react';
import styles from './ChooseTourSection.module.scss';

import { TourCard } from '../TourCard';

export default function ChooseTour() {
  const menuItems = ['Авторские', 'Походы', 'Сплавы', 'Велопрогулки'];
  const menu = menuItems.map((item) => (
    <div className={styles['choose-tour-section_menu__item']}>
      <p className={styles['choose-tour-section_menu__item-name']}>{item}</p>
      <div className={styles['choose-tour-section_menu__item-line']} />
    </div>
  ));
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
        <TourCard img='/your-tour-react/images/cardTourPh-1.png' />
        <TourCard img="/your-tour-react/images/cardTourPh-2.png" />
        <TourCard img="/your-tour-react/images/cardTourPh-3.png" />
        <TourCard img="/your-tour-react/images/cardTourPh-4.png" />
        <TourCard img="/your-tour-react/images/cardTourPh-5.png" />
        <TourCard img="/your-tour-react/images/cardTourPh-6.png" />
      </div>
    </div>
  );
}
