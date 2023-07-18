import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './StoryCard.module.scss';

import DetailsBtn from '../DetailsBtn';

export default function StoryCard({
  header, text, networks, img, list, additionalClassCards,
}) {
  const cx = classNames.bind(styles);

  const networksList = networks?.map((network, i) => <Link to="/" key={i} className={styles['travel-stories-section__social-network'] + ' main-font-style'}>{network}</Link>);
  const advantagesList = list?.map((item, i) => (i !== list.length - 1 ? <li className={styles['travel-stories-section__content-block__list-item']} key={i}>{item}</li> : (
    <li className={styles['travel-stories-section__content-block__list-item']} key={i}>
      {item}
      .
    </li>
  )));
  return (
    <div className={cx('travel-stories-section__content-block', additionalClassCards)}>
      <div className={cx('travel-stories-section__content-block__footer')}>
        <DetailsBtn additionalClass={cx('travel-stories-section__footer-details-link')} />
        <div className={cx('travel-stories-section__footer-social-networks')}>
          {networksList}
        </div>
      </div>
      <div className={cx('travel-stories-section__content-block__content')}>
        <h3 className={cx('travel-stories-section__content-block__title', 'info-cards__header')}>{header}</h3>
        <p className={cx('travel-stories-section__content-block__text')}>{list ? `${text}:` : `${text}.`}</p>
        <ul className={cx('travel-stories-section__content-block__list')}>
          {advantagesList}
        </ul>
      </div>
      <img src={img} alt="travel" className={cx('travel-stories-section__card__background')} />
    </div>
  );
}

StoryCard.defaultProps = {
  header: null,
  text: null,
  networks: null,
  img: null,
  list: null,
  additionalClassCards: null,
};

StoryCard.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  networks: PropTypes.arrayOf((PropTypes.oneOfType([PropTypes.string]))),
  img: PropTypes.string,
  list: PropTypes.arrayOf((PropTypes.oneOfType([PropTypes.string]))),
  additionalClassCards: PropTypes.string,
};
