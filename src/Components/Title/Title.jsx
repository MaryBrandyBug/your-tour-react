import React from 'react';
import {
  string, element, oneOfType,
} from 'prop-types';
import cx from 'classnames';
import s from './Title.module.scss';

export default function Title({
  title, subtitle, headerClassName, titleClassName, subtitleClassName,
}) {
  return (
    <div className={cx(s.root, headerClassName)}>
      <h2 className={cx(s.title, titleClassName)}>{title}</h2>
      {subtitle && <p className={cx(s.subtitle, subtitleClassName)}>{subtitle}</p>}
    </div>
  );
}

Title.propTypes = {
  title: string,
  subtitle: oneOfType([string, element]),
  headerClassName: string,
  titleClassName: string,
  subtitleClassName: string,
};
