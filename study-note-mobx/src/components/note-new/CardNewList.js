import React,{ useEffect } from 'react';
import { observer,inject } from 'mobx-react';
import {SortableContainer} from 'react-sortable-hoc';
import CardNew  from './CardNew';

const Results = SortableContainer(({items,onCreate, onRemove, onHandle}) => {
  return(
    <div>
      {
        items.map(
          (item,idx) => (
            <CardNew 
              {...item}
              key={idx}
              index={idx}
              idx={idx}
              onCreate={onCreate}
              onRemove={onRemove}
              onHandle={onHandle}
            />
          )
        )
      }
    </div>
  )
});

export default inject("note")(
  observer(({note})=>{
    const onSortEnd = ({oldIndex, newIndex}) => {
      note.replaceCard(oldIndex, newIndex)
    };
    useEffect(() => {
      if(note.is_scroll){
        window.scrollTo(0,document.body.scrollHeight);
        note.is_scroll = false
      }
    });

    return (
    <div data-changed={note.changed}>
      <Results items={note.cards}
        onCreate={note.addCard}
        onRemove={note.removeCard}
        onHandle={note.handleCard}
        onSortEnd={onSortEnd}
      />
      <button onClick={(event) => {note.addCard(note.cards.length);}}>+++</button>
    </div>

    );
  }
))