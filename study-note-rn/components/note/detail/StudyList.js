import React from 'react';
import { observer,inject } from 'mobx-react';
import StudyElement  from './StudyElement';

export default inject("study")(
  observer(({study})=>{
    
    return study.answerIndices.map((answerIdx, idx)=>(
      <StudyElement {...study.cards[answerIdx]} onPress={() =>{study.onAnswer(answerIdx)}} idx={idx} key={idx}/>
    ))
  }
))