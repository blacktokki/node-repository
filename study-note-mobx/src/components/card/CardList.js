import React,{ useEffect } from 'react';
import { observer,inject } from 'mobx-react';
import {SortableContainer} from 'react-sortable-hoc';
import CardNew  from './CardElement';

const Results = SortableContainer((props) => {
  return(
    <div>
      {props.children}
    </div>
  )
});

export default inject("card")(
  observer(({saveRedirect, card})=>{
    const onSortEnd = ({oldIndex, newIndex}) => {
      card.replaceCard(oldIndex, newIndex)
    };
    const save = () => {
      if (card.id===undefined){
        card.root.note.addNote(card)
      }
      else
        card.root.note.handleNote(card.id, card)
      return saveRedirect(card.id)  
    }
    useEffect(() => {
      if(card.is_scroll){
        window.scrollTo(0,document.body.scrollHeight);
        card.is_scroll = false
      }
    });
    const results = card.cards.map(
      (item,idx) => (
        <CardNew 
          {...item}
          key={idx}
          index={idx}
          idx={idx}
          onCreate={card.addCard}
          onRemove={card.removeCard}
          onHandle={card.handleCard}
        />
      )
    )

    return (
    <div data-changed={card.changed}>
      <Results onSortEnd={onSortEnd}>
        {results}
      </Results>
      <button onClick={(event) => {card.addCard(card.cards.length);}}>+++</button>
      <button onClick={save}>저장</button>
    </div>
    );
  }
))