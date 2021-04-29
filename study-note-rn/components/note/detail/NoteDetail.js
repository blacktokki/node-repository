import React,{ useEffect } from 'react';
import { observer,inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { View, Button } from 'react-native';
import FlipCardList from './FlipCardList';
import CardListTitle from './CardListTitle';
import CardList from './CardList';
import { Section, Div } from  '../../commons';

export default withRouter(inject("card")(
  observer(({history, match, card})=>{
    const index = match.params.id
    const save = () => {
      if (index==="new"){
        card.root.note.addNote(card)
        card.handleSaved(true)
        history.push('/note/'+card.id);
      }
      else{
        card.root.note.handleNote(card.id, card)
        card.handleSaved(true)
      }
    }
    const study = () => {
      history.push('/note/'+card.id+'/study')
    }

    useEffect(() => {
      if (index==="new"){
        if (card.id !== undefined){
          card.id = undefined
          card.handleTitle('제목')
          card.handleCardId(-1)
          card.handleCards([])
          card.handleChanged(-1)
          card.handleSaved(false)
        }
      }
      else if(index < card.root.note.notes.length){
        if (card.id !== index){
          card.id = index
          card.handleTitle(card.root.note.notes[index].title)
          card.handleCardId(card.root.note.notes[index].cardId)
          card.handleCards(card.root.note.notes[index].cards)
          card.handleChanged(-1)
          card.handleSaved(true)
        }
      }
      else{
        history.push('/');
      } 
    })

    return(
      <Section title={"Note/"+index+(card.saved===true?'[저장됨]':'')}>
        <Div className='row'>
          <Div className='col-12'></Div>
        </Div>
        <FlipCardList/>
        <CardListTitle/>
        {
          index !== 'new'?
          (<Button onPress={study} title="학습"/>):
          null
        }
        <CardList/>
        <Button onPress={save} title="저장"/>
      </Section>
    )
  })
))