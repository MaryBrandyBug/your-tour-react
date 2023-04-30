import React, { useEffect, useState } from 'react';
import styles from './Form.module.scss';

export default function Form() {
  const [checked, setChecked] = useState(false);
  const [radio, setRadio] = useState('');
  const [yourTourForm, setYourTourForm] = useState({
    name: '', direction: '', email: '', phoneNumber: '', dateSince: '', dateUntil: '', comment: '',
  });
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  function chengeRadio(e) {
    setRadio(e.target.value);
  }
  function chengeCheckbox() {
    setChecked(!checked);
  }

  const handleInput = (e) => {
    setYourTourForm({ ...yourTourForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // дальше методом POST передаем данные из стейтов на бэк
  };

  useEffect(() => {
    const resizeWindow = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', resizeWindow);

    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  });

  return (
    <div className={styles['form-section'] + ' section'} id="createTour">
      <div className={styles['form-section__header'] + ' section__header__flex'}>
        <h2 className={styles['form-section__header__title'] + ' section__header__title'}>Собери свой тур</h2>
        <p className={styles['form-section__header__subtitle'] + ' section__header__subtitle main-font-style'}>
          Идейные соображения высшего порядка,
          <br />
          {' '}
          а также рамки и место обучения кадров
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles['form-section__content-form'] + ' section__content__flex'}>
        <div className={styles['form-cont']}>
          {windowSize > 780
            ? (
              <>
                <div className={styles['side-form-cont']}>

                  <div className={styles['form-section__input-fields-container']}>
                    <div className={styles['form-section__input-field-container']}>
                      <p className={styles['form-section__input-name'] + ' main-font-style'}>Имя</p>
                      <input type="text" name="name" className={styles['form-section__input-field'] + ' main-font-style'} placeholder="Введите Ваше имя" onChange={handleInput} />
                    </div>
                  </div>

                  <div className={styles['form-section__input-fields-container']}>
                    <div className={styles['form-section__input-field-container']}>
                      <p className={styles['form-section__input-name'] + ' main-font-style'}>Email</p>
                      <input type="email" name="email" className={styles['form-section__input-field'] + ' main-font-style'} placeholder="example@mail.com" onChange={handleInput} />
                    </div>
                  </div>

                  <div className={styles['form-section__input-fields-container']}>
                    <div className={styles['form-section__input-field-container']}>
                      <p className={styles['form-section__input-name'] + ' main-font-style'}>Дата от</p>
                      <input type="date" name="dateSince" className={styles['form-section__input-field'] + ' main-font-style'} onChange={handleInput} />
                    </div>
                  </div>
                </div>

                <div className={styles['side-form-cont']}>

                  <div className={styles['form-section__input-fields-container']}>
                    <div className={styles['form-section__input-field-container']}>
                      <p className={styles['form-section__input-name'] + ' main-font-style'}>Направление</p>
                      <div className={styles['select-wrapper']}>
                        <select className={styles['form-section__select-field'] + ' main-font-style'} name="direction" onChange={handleInput}>
                          <option value="default">Куда хотите ехать</option>
                          <option value="place">Едем сюда!</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className={styles['form-section__input-fields-container']}>
                    <div className={styles['form-section__input-field-container']}>
                      <p className={styles['form-section__input-name'] + ' main-font-style'}>Телефон</p>
                      <input type="tel" name="phoneNumber" className={styles['form-section__input-field'] + ' main-font-style'} maxLength="11" placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _" onChange={handleInput} />
                    </div>
                  </div>

                  <div className={styles['form-section__input-fields-container']}>
                    <div className={styles['form-section__input-field-container']}>
                      <p className={styles['form-section__input-name'] + ' main-font-style'}>Дата до</p>
                      <input type="date" name="dateUntil" className={styles['form-section__input-field'] + ' main-font-style'} onChange={handleInput} />
                    </div>
                  </div>
                </div>
              </>
            )
            : (
              <div className={styles['side-form-cont']}>
                <div className={styles['form-section__input-fields-container']}>
                  <div className={styles['form-section__input-field-container']}>
                    <p className={styles['form-section__input-name'] + ' main-font-style'}>Имя</p>
                    <input type="text" name="name" className={styles['form-section__input-field'] + ' main-font-style'} placeholder="Введите Ваше имя" onChange={handleInput} />
                  </div>
                </div>

                <div className={styles['form-section__input-fields-container']}>
                  <div className={styles['form-section__input-field-container']}>
                    <p className={styles['form-section__input-name'] + ' main-font-style'}>Направление</p>
                    <div className={styles['select-wrapper']}>
                      <select className={styles['form-section__select-field'] + ' main-font-style'} name="direction" onChange={handleInput}>
                        <option value="default">Куда хотите ехать</option>
                        <option value="place">Едем сюда!</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className={styles['form-section__input-fields-container']}>
                  <div className={styles['form-section__input-field-container']}>
                    <p className={styles['form-section__input-name'] + ' main-font-style'}>Email</p>
                    <input type="email" name="email" className={styles['form-section__input-field'] + ' main-font-style'} placeholder="example@mail.com" onChange={handleInput} />
                  </div>
                </div>

                <div className={styles['form-section__input-fields-container']}>
                  <div className={styles['form-section__input-field-container']}>
                    <p className={styles['form-section__input-name'] + ' main-font-style'}>Телефон</p>
                    <input type="tel" name="phoneNumber" className={styles['form-section__input-field'] + ' main-font-style'} maxLength="11" placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _" onChange={handleInput} />
                  </div>
                </div>

                <div className={styles['form-section__input-fields-container']}>
                  <div className={styles['form-section__input-field-container']}>
                    <p className={styles['form-section__input-name'] + ' main-font-style'}>Дата от</p>
                    <input type="date" name="dateSince" className={styles['form-section__input-field'] + ' main-font-style'} onChange={handleInput} />
                  </div>
                </div>

                <div className={styles['form-section__input-fields-container']}>
                  <div className={styles['form-section__input-field-container']}>
                    <p className={styles['form-section__input-name'] + ' main-font-style'}>Дата до</p>
                    <input type="date" name="dateUntil" className={styles['form-section__input-field'] + ' main-font-style'} onChange={handleInput} />
                  </div>
                </div>
              </div>
            )}
        </div>

        <div className={styles['form-section__input-comment-container']}>
          <p className={styles['form-section__input-name'] + ' main-font-style'}>Комментарий</p>
          <textarea name="comment" className={styles['form-section__input-field-comment'] + ' ' + styles['input-comment']} onChange={handleInput} />
        </div>
        <div className={styles['form-section__age-check']}>
          <div className={styles['form-section__age-check__input-container']}>
            <p className={styles['form-section__input-name'] + ' main-font-style'}>Вам есть 18 лет?</p>
            <div className={styles['age-check__radio-buttons-container']}>
              <label className={styles['age-check__radio-button-container']} htmlFor="ageCheckTrue">
                <input type="radio" name="age" value="yes" className={styles['age-check__radio-button']} id="ageCheckTrue" onChange={chengeRadio} checked={radio === 'yes'} />
                <span className={styles.radio__border} />
                <p className={styles['form-section__input-name'] + ' main-font-style'}>Да</p>
              </label>
              <label className={styles['age-check__radio-button-container']} htmlFor="ageCheckFalse">
                <input type="radio" name="age" value="no" className={styles['age-check__radio-button']} id="ageCheckFalse" onChange={chengeRadio} checked={radio === 'no'} />
                <span className={styles.radio__border} />
                <p className={styles['form-section__input-name'] + ' main-font-style'}>Нет</p>
              </label>
            </div>
          </div>
        </div>
        <div className={styles['form-section__agreement-container']}>
          <label className={styles['form-section__accept']} htmlFor="accept">
            <input type="checkbox" name="agreement" className={styles['form-section__agreement-radio-button']} id="accept" onChange={chengeCheckbox} />
            <span className={styles.checkbox__border} />
            <div className={styles['agreement-text']}>
              Нажимая кнопку, я принимаю условия
              {' '}
              <button type="button" className={styles['form-section__agreement-text-link']}>Лицензионного договора</button>
            </div>
          </label>
        </div>
        <div className={styles['form-section__buttons-container']}>
          <div className={styles['form-section__submit-button']}>
            <button type="submit" className={styles['form-section__submit-button-text'] + ' main-font-style'}>Найти тур</button>
          </div>
          <div className={styles['form-section__reset-button']}>
            <button type="button" className={styles['form-section__reset-button-text'] + ' main-font-style'}>Сбросить</button>
          </div>
        </div>
      </form>
    </div>
  );
}
