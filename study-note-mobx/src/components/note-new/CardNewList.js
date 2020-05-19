import React,{ useEffect } from 'react';
import { observer,inject } from 'mobx-react';
import CardNew  from './CardNew';

export default inject("note")(
  observer(({note})=>{
    const results = note.cards.map(
      (card,idx) => {
        //console.log(card);
        return(
        <CardNew 
          {...card}
          key={idx}
          idx={idx}
          onCreate={note.addCard}
          onRemove={note.removeCard}
          onHandle={note.handleCard}
        />
        );
      }
    );
    
    useEffect(() => {
      if(note.is_scroll){
        window.scrollTo(0,document.body.scrollHeight);
        note.is_scroll = false
      }
    });

    return (
    <div data-changed={note.changed}>
      {results}
      <button onClick={(event) => {note.addCard(note.cards.length);}}>+++</button>
    </div>

    );
  }
))