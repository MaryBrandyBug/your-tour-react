import React from 'react';
import style from './TourCard.module.scss';
import DetailsBtn from '../DetailsBtn/DetailsBtn';

export default function TourCard({ img }) {
  return (
    <div className={style['choose-tour__card']}>
      <div className={style['choose-tour__card-content']}>
        <div className={style['choose-tour__text-container']}>
          <h3 className="info-cards__header">Путешествие в горы</h3>
          <p className={style['choose-tour__card__subtitle'] + ' main-font-style'}>от 80 000 руб</p>
        </div>
        <DetailsBtn additionalClass={style['choose-tour__link']} />
      </div>
      <img src={img} className={style['choose-tour__card__background']} alt="tour cover" />
    </div>
  );
}
