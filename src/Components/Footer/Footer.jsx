import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <p className={styles.footer__content__text + ' main-font-style'}>Наши социальные сети</p>
        <div className={styles['footer__content__social-networks-links']}>
          <div className={styles['footer__link-block']}>
            <div className={styles['footer__link-icon'] + ' ' + styles['inst-icon']}><img src="/your-tour-react/images/inst.png" alt="" /></div>
            <p className={styles['footer__social-network'] + ' main-font-style'}>instagram</p>
          </div>
          <div className={styles['footer__link-block']}>
            <div className={styles['footer__link-icon']}><img src="/your-tour-react/images/fb.png" alt="" /></div>
            <p className={styles['footer__social-network'] + ' main-font-style'}>facebook</p>
          </div>
          <div className={styles['footer__link-block']}>
            <div className={styles['footer__link-icon']}><img src="/your-tour-react/images/vk.png" alt="" /></div>
            <p className={styles['footer__social-network'] + ' main-font-style'}>vkontakte</p>
          </div>
        </div>
      </div>
    </div>
  );
}
