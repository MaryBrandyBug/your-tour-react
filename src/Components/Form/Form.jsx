import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';

export default function Form() {
  const cx = classNames.bind(styles);

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
    <div className={cx('form-section', 'section')} id="createTour">
      <div className={cx('form-section__header', 'section__header__flex')}>
        <h2 className={cx('form-section__header__title', 'section__header__title')}>Собери свой тур</h2>
        <p className={cx('form-section__header__subtitle', 'section__header__subtitle')}>
          Идейные соображения высшего порядка,
          <br />
          {' '}
          а также рамки и место обучения кадров
        </p>
      </div>

      <form onSubmit={handleSubmit} className={cx('form-section__content-form', 'section__content__flex')}>
        <div className={cx('form-cont')}>
          {windowSize > 780
            ? (
              <>
                <div className={cx('side-form-cont')}>

                  <div className={cx('form-section__input-fields-container')}>
                    <div className={cx('form-section__input-field-container')}>
                      <p className={cx('form-section__input-name')}>Имя</p>
                      <input type="text" name="name" className={cx('form-section__input-field')} placeholder="Введите Ваше имя" onChange={handleInput} />
                    </div>
                  </div>

                  <div className={cx('form-section__input-fields-container')}>
                    <div className={cx('form-section__input-field-container')}>
                      <p className={cx('form-section__input-name')}>Email</p>
                      <input type="email" name="email" className={cx('form-section__input-field')} placeholder="example@mail.com" onChange={handleInput} />
                    </div>
                  </div>

                  <div className={cx('form-section__input-fields-container')}>
                    <div className={cx('form-section__input-field-container')}>
                      <p className={cx('form-section__input-name')}>Дата от</p>
                      <input type="date" name="dateSince" className={cx('form-section__input-field')} onChange={handleInput} />
                    </div>
                  </div>
                </div>

                <div className={cx('side-form-cont')}>

                  <div className={cx('form-section__input-fields-container')}>
                    <div className={cx('form-section__input-field-container')}>
                      <p className={cx('form-section__input-name')}>Направление</p>
                      <div className={cx('select-wrapper')}>
                        <select className={cx('form-section__select-field')} name="direction" onChange={handleInput}>
                          <option value="default">Куда хотите ехать</option>
                          <option value="place">Едем сюда!</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className={cx('form-section__input-fields-container')}>
                    <div className={cx('form-section__input-field-container')}>
                      <p className={cx('form-section__input-name')}>Телефон</p>
                      <input type="tel" name="phoneNumber" className={cx('form-section__input-field')} maxLength="11" placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _" onChange={handleInput} />
                    </div>
                  </div>

                  <div className={cx('form-section__input-fields-container')}>
                    <div className={cx('form-section__input-field-container')}>
                      <p className={cx('form-section__input-name')}>Дата до</p>
                      <input type="date" name="dateUntil" className={cx('form-section__input-field')} onChange={handleInput} />
                    </div>
                  </div>
                </div>
              </>
            )
            : (
              <div className={cx('side-form-cont')}>
                <div className={cx('form-section__input-fields-container')}>
                  <div className={cx('form-section__input-field-container')}>
                    <p className={cx('form-section__input-name')}>Имя</p>
                    <input type="text" name="name" className={cx('form-section__input-field')} placeholder="Введите Ваше имя" onChange={handleInput} />
                  </div>
                </div>

                <div className={cx('form-section__input-fields-container')}>
                  <div className={cx('form-section__input-field-container')}>
                    <p className={cx('form-section__input-name')}>Направление</p>
                    <div className={cx('select-wrapper')}>
                      <select className={cx('form-section__select-field')} name="direction" onChange={handleInput}>
                        <option value="default">Куда хотите ехать</option>
                        <option value="place">Едем сюда!</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className={cx('form-section__input-fields-container')}>
                  <div className={cx('form-section__input-field-container')}>
                    <p className={cx('form-section__input-name')}>Email</p>
                    <input type="email" name="email" className={cx('form-section__input-field')} placeholder="example@mail.com" onChange={handleInput} />
                  </div>
                </div>

                <div className={cx('form-section__input-fields-container')}>
                  <div className={cx('form-section__input-field-container')}>
                    <p className={cx('form-section__input-name')}>Телефон</p>
                    <input type="tel" name="phoneNumber" className={cx('form-section__input-field')} maxLength="11" placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _" onChange={handleInput} />
                  </div>
                </div>

                <div className={cx('form-section__input-fields-container')}>
                  <div className={cx('form-section__input-field-container')}>
                    <p className={cx('form-section__input-name')}>Дата от</p>
                    <input type="date" name="dateSince" className={cx('form-section__input-field')} onChange={handleInput} />
                  </div>
                </div>

                <div className={cx('form-section__input-fields-container')}>
                  <div className={cx('form-section__input-field-container')}>
                    <p className={cx('form-section__input-name')}>Дата до</p>
                    <input type="date" name="dateUntil" className={cx('form-section__input-field')} onChange={handleInput} />
                  </div>
                </div>
              </div>
            )}
        </div>

        <div className={cx('form-section__input-comment-container')}>
          <p className={cx('form-section__input-name')}>Комментарий</p>
          <textarea name="comment" className={cx('form-section__input-field-comment', 'input-comment')} onChange={handleInput} />
        </div>
        <div className={cx('form-section__age-check')}>
          <div className={cx('form-section__age-check__input-container')}>
            <p className={cx('form-section__input-name')}>Вам есть 18 лет?</p>
            <div className={cx('age-check__radio-buttons-container')}>
              <label className={cx('age-check__radio-button-container')} htmlFor="ageCheckTrue">
                <input type="radio" name="age" value="yes" className={cx('age-check__radio-button')} id="ageCheckTrue" onChange={chengeRadio} checked={radio === 'yes'} />
                <span className={cx('radio__border')} />
                <p className={cx('form-section__input-name')}>Да</p>
              </label>
              <label className={cx('age-check__radio-button-container')} htmlFor="ageCheckFalse">
                <input type="radio" name="age" value="no" className={cx('age-check__radio-button')} id="ageCheckFalse" onChange={chengeRadio} checked={radio === 'no'} />
                <span className={cx('radio__border')} />
                <p className={cx('form-section__input-name')}>Нет</p>
              </label>
            </div>
          </div>
        </div>
        <div className={cx('form-section__agreement-container')}>
          <label className={cx('form-section__accept')} htmlFor="accept">
            <input type="checkbox" name="agreement" className={cx('form-section__agreement-radio-button')} id="accept" onChange={chengeCheckbox} />
            <span className={cx('checkbox__border')} />
            <div className={cx('agreement-text')}>
              Нажимая кнопку, я принимаю условия
              {' '}
              <button type="button" className={cx('form-section__agreement-text-link')}>Лицензионного договора</button>
            </div>
          </label>
        </div>
        <div className={cx('form-section__buttons-container')}>
          <div className={cx('form-section__submit-button')}>
            <button type="submit" className={cx('form-section__submit-button-text')}>Найти тур</button>
          </div>
          <div className={cx('form-section__reset-button')}>
            <button type="button" className={cx('form-section__reset-button-text')}>Сбросить</button>
          </div>
        </div>
      </form>
    </div>
  );
}
