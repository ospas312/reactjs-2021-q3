import React from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { cards } from '../cards';
import { Card } from './card/Card';

export function App(): JSX.Element {
  return (
    <>
      <Header />
      <section>
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </section>
      <Footer />
    </>
  );
}
