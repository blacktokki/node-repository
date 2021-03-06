import React,{ useEffect } from 'react';
import { observer,inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { View, Button } from 'react-native';
import { Section, Div } from  '../../commons';
import StudyListTitle from './StudyListTitle';
import StudyList from './StudyList';

export default withRouter(inject("study")(
  observer(({history, match, study})=>{
    const index = match.params.id
    const back = () => {
      history.push('/note/'+index)
    }
    useEffect(() => {
      study.id = index
      study.handleCurrentNoteId(index)
      if(index < study.root.note.notes.length){
        if(study.cards.length < 2) back();
      }
      else {
        history.push('/');
      }
      study.shuffle()
    })
    return(
      <Section title={"Note/"+index+"/Study"}>
        <Div className="card" style={{backgroundColor:'whitesmoke'}}>
          <StudyListTitle/>
          <StudyList onBack={back}/>
        </Div>
        <Button onPress={back} title="돌아가기"/>
      </Section>
    )
  })
))