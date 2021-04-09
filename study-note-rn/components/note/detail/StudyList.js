import React from 'react';
import { observer,inject } from 'mobx-react';
import { Button, SortableList } from '../../commons';
import StudyElement  from './StudyElement';

export default inject("study")(
  observer(({study})=>{
    
    return study.answerIndices.map((answerIdx, idx)=>(
      <StudyElement {...study.cards[answerIdx]} idx={idx} key={idx}/>
    ))
  }
))