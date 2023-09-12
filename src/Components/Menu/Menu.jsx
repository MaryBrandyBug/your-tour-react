import React from 'react';
import classNames from 'classnames/bind';
import {
  string, arrayOf, func, shape,
} from 'prop-types';
import styles from './Menu.module.scss';

import Button from '../Button';

export default function Menu({
  items, activeItem, changeActiveItem, className,
}) {
  const cx = classNames.bind(styles);

  const handleChangeTag = (tag) => {
    changeActiveItem(tag);
  };

  const menu = items.map((item) => (
    <div className={cx('item')} key={item.id}>
      <Button cbData={item.name} className={cx('item__name', { active: activeItem === item.name })} onClick={handleChangeTag} text={item.name} />
    </div>
  ));

  return (
    <div className={cx('root', className)}>
      {menu}
    </div>
  );
}

Menu.propTypes = {
  items: arrayOf(shape({ name: string, id: string, link: string })),
  activeItem: string,
  changeActiveItem: func,
  className: string,
};
