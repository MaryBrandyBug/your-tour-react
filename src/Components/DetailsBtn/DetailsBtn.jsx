import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DetailsBtn.module.scss';

import Arrow from '../Arrow';

export default function DetailsBtn({ additionalClass, link }) {
  const cx = classNames.bind(styles);

  function redirect() {
    window.location.href = link;
  }

  return (
    <button type="button" className={cx('root', additionalClass)} onClick={redirect}>
      <p className={cx('text')}>Подробнее</p>
      <div className={cx('arrow')}>
        <Arrow />
      </div>
    </button>
  );
}

DetailsBtn.propTypes = {
  additionalClass: string,
  link: string,
};
