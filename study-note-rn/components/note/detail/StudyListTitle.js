import React from 'react';
import { observer,inject } from 'mobx-react';
import { View, TextInput, Text } from 'react-native';
import { Div } from '../../commons';

export default inject('study')(
  observer(({study})=>{
    console.log(study.studyCards)
    return (
      <Div className="card">
        <Text>{study.studyCards.length>0?study.studyCards[0].name:''}</Text>
      </Div>
    )
  }
));