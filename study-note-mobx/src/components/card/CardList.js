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

export default inject("card","router")(
  observer(({index, card, router})=>{
    if (index=== 'new'){
      if (card.id !== undefined){
        card.id = undefined
        card.handleTitle('제목')
        card.cards=[]
      }
    }
    else if(index < router.root.note.notes.length){
      if (card.id !== index){
        card.id = index
        card.handleTitle(card.root.note.notes[index].title)
        card.cards=JSON.parse(JSON.stringify(card.root.note.notes[index].cards))
      }
    }
    else{
      router.push('/');
    }

    const onSortEnd = ({oldIndex, newIndex}) => {
      card.replaceCard(oldIndex, newIndex)
    };
    const save = () => {
      if (card.id===undefined){
        card.root.note.addNote(card)
        router.push('/note/'+card.id);
      }
      else
        card.root.note.handleNote(card.id, card) 
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