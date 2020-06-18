import React from 'react';
import { observer,inject } from 'mobx-react';
import SectionHeader from '../commons/SectionHeader';
import NoteTitle from './NoteTitle';
import CardList from './CardList';

export default inject("card")(
  observer(({match, history, card})=>{
    //load
    const index = match.params.id
    card.handleChanged(-1)
    if (index=== 'new'){
      card.id = undefined
      card.handleTitle('제목')
      card.cards=[]
    }
    else if(index < card.root.note.notes.length){
      card.id = index
      card.handleTitle(card.root.note.notes[index].title)
      card.cards=JSON.parse(JSON.stringify(card.root.note.notes[index].cards))
    }
    else{
      history.push('/');
    }
    const saveRedirect=(index) =>{
      history.push('/note/'+index);
    }

    return(
      <section className='section'>
        <SectionHeader title={"Card/"+match.params.id}/>
        <div className='row'>
          <div className='col-12'></div>
        </div>
        <NoteTitle/>
        <CardList saveRedirect={saveRedirect}/>
      </section>
    )
  })
);