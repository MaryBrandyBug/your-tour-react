import React from 'react';
import styles from './StoryCard.module.scss';
import DetailsBtn from '../DetailsBtn';

export default function StoryCard({
  header, text, networks, img, list, additionalClassCards,
}) {
  const networksList = networks?.map((network) => <p className={styles['travel-stories-section__social-network'] + ' main-font-style'}>{network}</p>);
  const advantagesList = list?.map((item, i) => (i !== list.length - 1 ? <li className={styles['travel-stories-section__content-block__list-item']} key={new Date().getTime()}>{item}</li> : (
    <li className={styles['travel-stories-section__content-block__list-item']} key={new Date().getTime()}>
      {item}
      .
    </li>
  )));
  return (
    <div className={styles['travel-stories-section__content-block'] + ' ' + styles[`${additionalClassCards}`]}>
      <div className={styles['travel-stories-section__content-block__footer']}>
        <DetailsBtn additionalClass={styles['travel-stories-section__footer-details-link']} />
        <div className={styles['travel-stories-section__footer-social-networks']}>
          {networksList}
        </div>
      </div>
      <div className={styles['travel-stories-section__content-block__content']}>
        <h3 className={styles['travel-stories-section__content-block__title'] + ' info-cards__header'}>{header}</h3>
        <p className={styles['travel-stories-section__content-block__text'] + ' main-font-style'}>{list ? `${text}:` : `${text}.`}</p>
        <ul className={styles['travel-stories-section__content-block__list'] + ' main-font-style'}>
          {advantagesList}
        </ul>
      </div>
      <img src={img} alt="" className={styles['travel-stories-section__card__background']} />
    </div>
  );
}
