import React from 'react';
import { observer,inject } from 'mobx-react';
import { View } from 'react-native';
import StudyElement  from './StudyElement';
import StudyText  from './StudyText';

export default inject("study")(
  observer(({onBack, study})=>{
    const onPostPress = () => {
      if(study.remains.length == 0 && study.correctOnces == 0){
        onBack();
        study.reset();
      }
    }
      return !study.isTextAnswer?study.answers.map((answer, idx)=>(
        <StudyElement {...answer} onPress={()=>{study.onAnswer(answer.id);onPostPress()}} idx={idx} key={idx}/>
        )):(<StudyText onAnswer={(text)=>{study.onAnswerText(text);onPostPress()}}/>)

  }
))