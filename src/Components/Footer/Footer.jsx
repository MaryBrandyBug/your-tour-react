import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

export default function Footer() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('root')}>
      <div className={cx('content')}>
        <p className={cx('content__text')}>Наши социальные сети</p>
        <div className={cx('content__social-networks-links')}>
          <div className={cx('content__linkBlock')}>
            <div className={cx('link-icon', 'inst-icon')}><img src="/your-tour-react/images/inst.png" alt="instagram icon" /></div>
            <Link className={cx('social-network')} to="/">instagram</Link>
          </div>
          <div className={cx('content__linkBlock')}>
            <div className={cx('link-icon')}><img src="/your-tour-react/images/fb.png" alt="facebook icon" /></div>
            <Link className={cx('social-network')} to="/">facebook</Link>
          </div>
          <div className={cx('content__linkBlock')}>
            <div className={cx('link-icon')}><img src="/your-tour-react/images/vk.png" alt="vkontakte icon" /></div>
            <Link className={cx('social-network')} to="/">vkontakte</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
