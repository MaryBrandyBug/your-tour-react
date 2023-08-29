import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import {
  string, arrayOf, oneOfType, func, object,
} from 'prop-types';
import styles from './Menu.module.scss';

export default function Menu({
  items, activeItem, changeActiveItem, className,
}) {
  const cx = classNames.bind(styles);

  const menu = items.map((item) => (
    <div className={cx('item')} key={item.id}>
      <Link to={item.link} className={cx(['item__name', activeItem === item.name ? 'active' : ''])} onClick={() => changeActiveItem(item.name)}>{item.name}</Link>
    </div>
  ));

  return (
    <div className={cx('root', className)}>
      {menu}
    </div>
  );
}

Menu.propTypes = {
  items: arrayOf(oneOfType([object])),
  activeItem: string,
  changeActiveItem: func,
  className: string,
};
