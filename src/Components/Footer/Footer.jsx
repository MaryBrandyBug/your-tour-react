import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <p className={styles.footer__content__text + ' main-font-style'}>Наши социальные сети</p>
        <div className={styles['footer__content__social-networks-links']}>
          <div className={styles['footer__link-block']}>
            <div className={styles['footer__link-icon'] + ' ' + styles['inst-icon']}><img src="/your-tour-react/images/inst.png" alt="instagram icon" /></div>
            <Link className={styles['footer__social-network'] + ' main-font-style'}>instagram</Link>
          </div>
          <div className={styles['footer__link-block']}>
            <div className={styles['footer__link-icon']}><img src="/your-tour-react/images/fb.png" alt="facebook icon" /></div>
            <Link className={styles['footer__social-network'] + ' main-font-style'}>facebook</Link>
          </div>
          <div className={styles['footer__link-block']}>
            <div className={styles['footer__link-icon']}><img src="/your-tour-react/images/vk.png" alt="vkontakte icon" /></div>
            <Link className={styles['footer__social-network'] + ' main-font-style'}>vkontakte</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
