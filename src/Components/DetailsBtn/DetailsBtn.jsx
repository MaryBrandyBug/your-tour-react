import React from 'react';
import { useNavigate } from 'react-router-dom';
import { string } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DetailsBtn.module.scss';

import Arrow from '../Arrow';

export default function DetailsBtn({ additionalClass, link }) {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();

  const redirectTo = () => {
    navigate(link);
  };

  return (
    <button type="button" className={cx('root', additionalClass)} onClick={redirectTo}>
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
