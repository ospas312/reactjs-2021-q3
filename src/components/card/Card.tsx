import './Card.scss';
import * as React from 'react';

interface IProps {
  card: ICard;
}
interface ICard {
  name: string;
  link: string;
  country: string;
  author: string;
  author_image: string;
  date: string;
}

export function Card(props: IProps): JSX.Element {
  return (
    <div className="card">
      <div className="card_image" style={{ backgroundImage: `url(${props.card.link})` }}></div>
      <div className="card_content">
        <p className="card_content__name">{props.card.name}</p>
        <div className="card_content__info">
          <p className="card_content__country">{props.card.country}</p>
          <p className="card_content__date">{props.card.date}</p>
        </div>
      </div>
      <div className="card_author">
        <img className="card_author__image" src={`${props.card.author_image}`} />
        <p className="card_author__text">
          by <span className="card_author__text">{props.card.author}</span>
        </p>
      </div>
    </div>
  );
}
