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

  const networksList = networks?.map((network) => <Link to="/" key={network.id} className={styles['content-item__social-network'] + ' main-font-style'}>{network.name}</Link>);
  const advantagesList = list?.map((item, i) => (i !== list.length - 1 ? <li className={styles['content__list-item']} key={item.id}>{item.name}</li> : (
    <li className={styles['content__list-item']} key={item.id}>
      {item.name}
      .
    </li>
  )));
  return (
    <div className={cx('root', additionalClassCards)}>
      <div className={cx('root__footer')}>
        <DetailsBtn additionalClass={cx('footer-details-link')} />
        <div className={cx('footer-social-networks')}>
          {networksList}
        </div>
      </div>
      <div className={cx('content')}>
        <h3 className={cx('content__title', 'info-cards__header')}>{header}</h3>
        <p className={cx('content__text')}>{list ? `${text}:` : `${text}.`}</p>
        <ul className={cx('content__list')}>
          {advantagesList}
        </ul>
      </div>
      <img src={img} alt="travel" className={cx('root__background')} />
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
  networks: PropTypes.arrayOf((PropTypes.oneOfType([PropTypes.object]))),
  img: PropTypes.string,
  list: PropTypes.arrayOf((PropTypes.oneOfType([PropTypes.object]))),
  additionalClassCards: PropTypes.string,
};
