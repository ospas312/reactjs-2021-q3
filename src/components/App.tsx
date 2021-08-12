import React, { useState } from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Card } from './card/Card';
import { Form } from './form/Form';
import { ICard } from './interfaces/ICard';
import { Modal } from './modal/Modal';

export function App(): JSX.Element {
  const [cards, setCards] = useState([] as JSX.Element[]);
  const [modalActive, setModalActive] = useState(false);
  const addCard = async (card: ICard): Promise<void> => {
    await setCards([<Card card={card} key={cards.length + 1} />, ...cards]);
    setModalActive(true);
  };

  return (
    <>
      <Header />
      <div className="main">
        <Form addCard={addCard} />
        <section>{cards}</section>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
      <Footer />
    </>
  );
}
