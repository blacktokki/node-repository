import React from 'react';
import { observer,inject } from 'mobx-react';
import StudyElement  from './StudyElement';

export default inject("study")(
  observer(({study})=>{
    return study.answers.map((answer, idx)=>(
      <StudyElement {...answer} onPress={() =>{study.onAnswer(answer.id)}} idx={idx} key={idx}/>
    ))
  }
))