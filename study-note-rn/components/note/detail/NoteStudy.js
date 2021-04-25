import React,{ useEffect } from 'react';
import { observer,inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { View, Button } from 'react-native';
import { Section, Div } from  '../../commons';
import StudyListTitle from './StudyListTitle';
import StudyQuestion from './StudyQuestion';
import StudyList from './StudyList';

export default withRouter(inject("study")(
  observer(({history, match, study})=>{
    const index = match.params.id
    const back = () => {
      history.push('/note/'+index)
    }
    if (index < study.root.note.notes.length){
      if (study.root.note.notes[index].cards.length < 2) back();
    }
    else {
      history.push('/');
    }
    useEffect(() => {
      study.id = index
      study.handleCurrentNoteId(index)
      study.shuffle()
      if (study.cards.length < 2) back();
    })
    return(
      <Section title={"Note/"+index+"/Study"}>
        <Div className='row'>
          <Div className='col-12'></Div>
        </Div>
        <StudyListTitle/>
        <StudyQuestion/>
        <StudyList/>
        <Button onPress={back} title="돌아가기"/>
      </Section>
    )
  })
))