import React from 'react';
import CardNew from './CardNew';

const CardNewList = (cards) => {
  const results = cards.cards.map(card => <CardNew {...card} key={card.name} />);
  return <div>{results}</div>;
};

export default CardNewList;