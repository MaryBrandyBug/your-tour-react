import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MailSection.module.scss';

export default function MailSection() {
  return (
    <div className={styles['mail-section']}>
      <img src="/your-tour-react/images/footerPhoto.png" alt="" className={styles['mail-section__photo']} />
      <div className={styles['mail-section__content']}>
        <h3 className={styles['mail-section__content__header']}>Пора в путешествие вместе с нами!</h3>
        <p className={styles['mail-section__content__text'] + ' main-font-style'}>
          Напиши на почту и узнай подробности на
          {' '}
          <Link to="mailto:yourtour@gmail.com" className={styles['mail-section__content__mail']}>yourtour@gmail.com</Link>
        </p>
      </div>
    </div>
  );
}
