import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import validationSchema from './validation';
import styles from './Form.module.scss';

import Button from '../Button';
import InputField from '../InputField/InputField';
import TextAreaField from '../TextAreaField/TextAreaField';
import InputRadio from '../InputRadio/InputRadio';
import InputCheckbox from '../InputCheckbox/InputCheckbox';

export default function Form() {
  const cx = classNames.bind(styles);

  const [checked, setChecked] = useState(false);
  const [radio, setRadio] = useState('');
  const [yourTourForm, setYourTourForm] = useState({
    name: '', direction: '', email: '', phoneNumber: '', dateSince: '', dateUntil: '', comment: '',
  });
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const changeRadio = (e) => {
    setRadio(e.target.value);
  };

  const changeCheckbox = () => {
    setChecked(!checked);
  };

  const handleChange = (e) => {
    setYourTourForm({ ...yourTourForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validationSchema.isValid(yourTourForm);
    if (isValid) {
      // дальше методом POST передаем данные из стейтов на бэк
    }
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
    <div className={cx('root', 'section')} id="createTour">
      <div className={cx('header', 'section__header__flex')}>
        <h2 className={cx('header__title', 'section__header__title')}>Собери свой тур</h2>
        <p className={cx('header__subtitle', 'section__header__subtitle')}>
          Идейные соображения высшего порядка,
          <br />
          {' '}
          а также рамки и место обучения кадров
        </p>
      </div>
      <form onSubmit={handleSubmit} className={cx('content', 'section__content__flex')}>
        <div className={cx('container')}>
          {windowSize > 780
            ? (
              <>
                <div className={cx('side-container')}>

                  <InputField type="text" name="name" placeholder="Введите Ваше имя" onChange={handleChange} inputFieldName="Имя" />

                  <InputField type="email" name="email" placeholder="example@mail.com" onChange={handleChange} inputFieldName="Email" />

                  <InputField type="date" name="dateSince" placeholder="" onChange={handleChange} inputFieldName="Дата от" />
                </div>

                <div className={cx('side-container')}>

                  <div className={cx('input-fields-container')}>
                    <div className={cx('input-field-container')}>
                      <p className={cx('input-name')}>Направление</p>
                      <div className={cx('select-wrapper')}>
                        <select className={cx('select-field')} name="direction" onChange={handleChange}>
                          <option value="default">Куда хотите ехать</option>
                          <option value="place">Едем сюда!</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <InputField type="tel" name="phoneNumber" placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _" onChange={handleChange} maxLength="11" inputFieldName="Телефон" />

                  <InputField type="date" name="dateUntil" placeholder="" onChange={handleChange} inputFieldName="Дата до" />
                </div>
              </>
            )
            : (
              <div className={cx('side-container')}>
                <InputField type="text" name="name" placeholder="Введите Ваше имя" onChange={handleChange} inputFieldName="Имя" />

                <div className={cx('input-fields-container')}>
                  <div className={cx('input-field-container')}>
                    <p className={cx('input-name')}>Направление</p>
                    <div className={cx('select-wrapper')}>
                      <select className={cx('select-field')} name="direction" onChange={handleChange}>
                        <option value="default">Куда хотите ехать</option>
                        <option value="place">Едем сюда!</option>
                      </select>
                    </div>
                  </div>
                </div>

                <InputField type="email" name="email" placeholder="example@mail.com" onChange={handleChange} inputFieldName="Email" />

                <InputField type="tel" name="phoneNumber" placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _" onChange={handleChange} maxLength="11" inputFieldName="Телефон" />

                <InputField type="date" name="dateSince" placeholder="" onChange={handleChange} inputFieldName="Дата от" />

                <InputField type="date" name="dateUntil" placeholder="" onChange={handleChange} inputFieldName="Дата до" />
              </div>
            )}
        </div>

        <TextAreaField fieldName="Комментарий" name="comment" onChange={handleChange} maxLength="250" />

        <div className={cx('age-check')}>
          <div className={cx('age-check__input-container')}>
            <p className={cx('input-name')}>Вам есть 18 лет?</p>
            <div className={cx('age-check__radio-buttons-container')}>
              <InputRadio name="age" onChange={changeRadio} value="yes" id="ageCheckTrue" text="Да" checked={radio === 'yes'} />
              <InputRadio name="age" onChange={changeRadio} value="no" id="ageCheckFalse" text="Нет" checked={radio === 'no'} />
            </div>
          </div>
        </div>

        <div className={cx('agreement-container')}>
          <InputCheckbox name="agreement" id="accept" onChange={changeCheckbox} />
          <div className={cx('agreement-text')}>
            Нажимая кнопку, я принимаю условия
            {' '}
            <Link className={cx('agreement-text-link')} to="/">Лицензионного договора</Link>
          </div>
        </div>

        <div className={cx('buttons-container')}>
          <div className={cx('submit-button')}>
            <Button text="Найти тур" btnClass={cx('submit-button-text')} btnType="submit" />
          </div>
          <div className={cx('reset-button')}>
            <Button text="Сбросить" btnClass={cx('reset-button-text')} />
          </div>
        </div>
      </form>
    </div>
  );
}
