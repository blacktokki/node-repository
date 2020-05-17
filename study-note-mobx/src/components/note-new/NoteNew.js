import React from 'react';
import SectionHeader from '../commons/SectionHeader';
import NoteTitle from './NoteTitle';
import CardNewList from './CardNewList';

export default ()=>(
  <section className='section'>
    <SectionHeader title="NoteNew"/>
    <div className='row'>
      <div className='col-12'></div>
    </div>
    <NoteTitle/>
    <CardNewList/>
  </section>
);