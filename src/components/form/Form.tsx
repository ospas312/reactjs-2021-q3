import React from 'react';
import './Form.scss';
import cn from 'classnames';
import useFormWithValidation from './useFormWithValidation';
import setCustomValidity from './setCustomValidity';
import { ICard } from '../interfaces/ICard';

interface IProps {
  addCard: (value: ICard) => void;
}

export function Form(props: IProps): JSX.Element {
  const { values, handleChange, errors, isFormValid, resetForm } = useFormWithValidation(setCustomValidity);

  const inputNameStyle = cn('form__input', 'form__input_name', { form__input_invalid: errors.name });
  const inputDateStyle = cn('form__input', 'form__input_date', { form__input_invalid: errors.date });
  const inputCountryStyle = cn('form__input', 'form__input_country', { form__input_invalid: errors.country });
  const inputGenderStyle = cn('form__input', 'form__input_gender', { form__input_invalid: errors.gender });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.addCard(values);
    resetForm();
  };

  const country = ['Молдова', 'Румыния', 'Черногория', 'Болгария', 'Литва', 'Латвия'];

  return (
    <div className="form-container">
      <form className="form" name="send-poem" id="form-participate" onSubmit={handleSubmit} noValidate>
        <div className="text-container">
          <h2 className="text-container__heading">Форма</h2>
          <p className="text-container__paragraph">Заполните эту форму и вы можете стать частью проекта.</p>
        </div>

        <input
          className={inputNameStyle}
          name="name"
          placeholder="Имя и фамилия автора"
          required
          minLength={2 || undefined}
          maxLength={50 || undefined}
          pattern="^[A-Za-zА-Яа-яёЁ\s\-]+$"
          value={values.name || ''}
          onChange={handleChange}
        />
        {errors.name && <span className="form__input-error">{errors.name}</span>}

        <input className={inputDateStyle} type="date" name="date" placeholder="Дата рождения" required value={values.date || ''} onChange={handleChange} />
        {errors.date && <span className="form__input-error">{errors.date}</span>}

        <select className={inputCountryStyle} name="country" placeholder="Страна" required value={values.country || ''} onChange={handleChange}>
          <option value="" placeholder="Страна">
            Выберети страну
          </option>
          {country.map((i) => (
            <option value={i}>{i}</option>
          ))}
        </select>
        {errors.country && <span className="form__input-error">{errors.country}</span>}

        <div className={inputGenderStyle}>
          <input type="radio" value="male" id="male" onChange={handleChange} required name="gender" checked={values.gender === 'male'} />
          <label>Male</label>
          <input type="radio" value="female" id="female" onChange={handleChange} required name="gender" checked={values.gender === 'female'} />
          <label>Female</label>
        </div>
        {errors.gender && <span className="form__input-error">{errors.gender}</span>}

        <label htmlFor="offer" className="form__input-label">
          <input className="form__input_radio" type="checkbox" name="offer" value="agree" id="offer" required checked={values.offer} onChange={handleChange} />
          <span className="form__pseudo-item"></span>
          <span className="form__label-text">{'Я разрешаю присылать мне уведомления'}</span>
        </label>

        {errors.offer && <span className="form__input-error">{errors.offer}</span>}

        <button type="submit" className="form__submit-button" disabled={!isFormValid}>
          <span className="form__button-text">Отправить форму</span>
        </button>
        {!isFormValid && <span className="form__fill-hint">Чтобы отправить форму, пожалуйста, заполните все поля</span>}
      </form>
    </div>
  );
}
