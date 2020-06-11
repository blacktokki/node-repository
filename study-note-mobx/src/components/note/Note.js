import React from 'react';
import SectionHeader from '../commons/SectionHeader';
import NoteList from './NoteList';

export default () => {
  return (
    <section className='section'>
        <SectionHeader title="Note"/>
        <NoteList/>
    </section>
  );
};