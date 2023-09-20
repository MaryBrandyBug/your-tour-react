import React from 'react';
import { useNavigate } from 'react-router-dom';
import { string } from 'prop-types';
import cx from 'classnames';
import s from './DetailsBtn.module.scss';

import Arrow from '../Arrow';

export default function DetailsBtn({ additionalClass, link }) {
  const navigate = useNavigate();

  const redirectTo = () => {
    navigate(link);
  };

  return (
    <button type="button" className={cx(s.root, additionalClass)} onClick={redirectTo}>
      <p className={s.text}>Подробнее</p>
      <div className={s.arrow}>
        <Arrow />
      </div>
    </button>
  );
}

DetailsBtn.propTypes = {
  additionalClass: string,
  link: string,
};
