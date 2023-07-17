import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

export default function Footer() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('footer')}>
      <div className={cx('footer__content')}>
        <p className={cx('footer__content__text')}>Наши социальные сети</p>
        <div className={cx('footer__content__social-networks-links')}>
          <div className={cx('footerLinkBlock')}>
            <div className={cx('footer__link-icon', 'inst-icon')}><img src="/your-tour-react/images/inst.png" alt="instagram icon" /></div>
            <Link className={cx('footer__social-network')} to="/">instagram</Link>
          </div>
          <div className={cx('footerLinkBlock')}>
            <div className={cx('footer__link-icon')}><img src="/your-tour-react/images/fb.png" alt="facebook icon" /></div>
            <Link className={cx('footer__social-network')} to="/">facebook</Link>
          </div>
          <div className={cx('footerLinkBlock')}>
            <div className={cx('footer__link-icon')}><img src="/your-tour-react/images/vk.png" alt="vkontakte icon" /></div>
            <Link className={cx('footer__social-network')} to="/">vkontakte</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
