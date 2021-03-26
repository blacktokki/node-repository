import React,{ useEffect } from 'react';
import { observer,inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { View, Button } from 'react-native';
import { Section, Div } from  '../../commons';
import StudyListTitle from './StudyListTitle';

export default withRouter(inject("card")(
  observer(({history, match, card})=>{
    const index = match.params.id
    const back = () => {
      history.push('/note/'+index)
    }

    useEffect(() => {
      if(index < card.root.note.notes.length && card.cards.length > 0){
        if (card.id !== index){
          card.id = index
          card.handleTitle(card.root.note.notes[index].title)
          card.handleCards(JSON.parse(JSON.stringify(card.root.note.notes[index].cards)))
          card.handleChanged(-1)
          card.handleSaved(true)
          card.root.study.handleStudyCards(JSON.parse(JSON.stringify(card.cards)))
          card.root.study.shuffle()
        }
      }
      else{
        history.push('/');
      } 
    })

    return(
      <Section title={"Note/"+index+"/Study"}>
        <Div className='row'>
          <Div className='col-12'></Div>
        </Div>
        <StudyListTitle/>
        <Button onPress={back} title="돌아가기"/>
      </Section>
    )
  })
))