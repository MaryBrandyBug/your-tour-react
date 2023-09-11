import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import validationSchema from './validation';
import styles from './Form.module.scss';

import Button from '../Button';
import InputField from '../InputField';
import TextAreaField from '../TextAreaField';
import InputRadio from '../InputRadio';
import InputCheckbox from '../InputCheckbox';
import Title from '../Title';

export default function Form() {
  const cx = classNames.bind(styles);
  const myElementRef = useRef(null);

  const [checked, setChecked] = useState(false);
  const [radio, setRadio] = useState('');
  const [yourTourForm, setYourTourForm] = useState({
    name: '', direction: '', email: '', phoneNumber: '', dateSince: '', dateUntil: '', comment: '',
  });

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

  const clear = useCallback(() => {
    setYourTourForm({
      name: '', direction: '', email: '', phoneNumber: '', dateSince: '', dateUntil: '', comment: '',
    });
    setChecked(false);
    setRadio('');
  }, []);

  useEffect(() => {
    const element = myElementRef.current;
    if (yourTourForm.direction === '') {
      element.style.color = '#A6A6A6';
    } else {
      element.style.color = '#1B1F2B';
    }
  }, [yourTourForm.direction]);

  return (
    <div className={cx('root')} id="createTour">
      <Title
        title="Собери свой тур"
        subtitle={(
          <>
            Идейные соображения высшего порядка,
            {' '}
            <br />
            {' '}
            а также рамки и место обучения кадров
          </>
)}
        subtitleClassName={cx('sectionSubtitle')}
        headerClassName={cx('sectionHeader')}
      />
      <form onSubmit={handleSubmit} className={cx('content')}>
        <div className={cx('container')}>
          <InputField type="text" name="name" value={yourTourForm.name} placeholder="Введите Ваше имя" onChange={handleChange} inputFieldName="Имя" />
          <div className={cx('input-field-container')}>
            <p className={cx('input-name')}>Направление</p>
            <div className={cx('select-wrapper')}>
              <select ref={myElementRef} className={cx('select-field')} id="select" value={yourTourForm.direction} name="direction" onChange={handleChange}>
                <option value="">Куда хотите ехать</option>
                <option value="place">Едем сюда!</option>
              </select>
            </div>
          </div>
        </div>
        <div className={cx('container')}>
          <InputField type="email" name="email" value={yourTourForm.email} placeholder="example@mail.com" onChange={handleChange} inputFieldName="Email" />
          <InputField type="tel" name="phoneNumber" value={yourTourForm.phoneNumber} placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _" onChange={handleChange} maxLength="11" inputFieldName="Телефон" />
        </div>
        <div className={cx('container')}>
          <InputField type="date" name="dateSince" value={yourTourForm.dateSince} placeholder="" onChange={handleChange} inputFieldName="Дата от" />
          <InputField type="date" name="dateUntil" value={yourTourForm.dateUntil} placeholder="" onChange={handleChange} inputFieldName="Дата до" />
        </div>

        <TextAreaField fieldName="Комментарий" value={yourTourForm.comment} name="comment" onChange={handleChange} maxLength="250" />
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
          <InputCheckbox name="agreement" id="accept" checked={checked} onChange={changeCheckbox} />
          <div className={cx('agreement-text')}>
            Нажимая кнопку, я принимаю условия
            {' '}
            <Link className={cx('agreement-text-link')} to="/">Лицензионного договора</Link>
          </div>
        </div>

        <div className={cx('buttons-container')}>
          <div className={cx('submit-button')}>
            <Button text="Найти тур" className={cx('submit-button-text')} type="submit" />
          </div>
          <div className={cx('reset-button')}>
            <Button text="Сбросить" className={cx('reset-button-text')} onClick={clear} />
          </div>
        </div>
      </form>
    </div>
  );
}
