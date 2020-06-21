import React from 'react';
import SectionHeader from '../commons/SectionHeader';
import CardListTitle from './CardListTitle';
import CardList from './CardList';

export default ({match})=>{
  return(
    <section className='section'>
      <SectionHeader title={"Card/"+match.params.id}/>
      <div className='row'>
        <div className='col-12'></div>
      </div>
      <CardListTitle/>
      <CardList index={match.params.id}/>
    </section>
  )
}