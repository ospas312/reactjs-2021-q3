import './Card.scss';
import * as React from 'react';
import { ICard } from '../interfaces/ICard';

interface IProps {
  card: ICard;
}

export function Card(props: IProps): JSX.Element {
  return (
    <div className="card">
      <p className="card_text">
        ФИО: <span className="card_text_span">{props.card.name}</span>
      </p>
      <p className="card_text">
        Дата рождения: <span className="card_text_span">{props.card.date}</span>
      </p>
      <p className="card_text">
        Страна: <span className="card_text_span">{props.card.country}</span>
      </p>
      <p className="card_text">
        Пол: <span className="card_text_span">{props.card.gender}</span>
      </p>
      <p className="card_text">
        Согласие на рассылку: <span className="card_text_span">{props.card.offer ? 'Да' : 'Нет'}</span>
      </p>
    </div>
  );
}
