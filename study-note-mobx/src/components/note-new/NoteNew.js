import React from 'react';
import { observer,inject } from 'mobx-react';
import SectionHeader from '../commons/SectionHeader';
import CardNewList from './CardNewList';

export default inject("store")(
  observer(({store})=>(
    <section className='section'>
      <SectionHeader title="NoteNew"/>
      <div className='row'>
        <div className='col-12'></div>
      </div>
      <CardNewList cards={store.notes.notes[0].cards.cards}/>
    </section>
  ))
);