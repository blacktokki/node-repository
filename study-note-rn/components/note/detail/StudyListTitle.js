import React from 'react';
import { observer,inject } from 'mobx-react';
import { View, TextInput, Text } from 'react-native';
import { Div } from '../../commons';

export default inject('study')(
  observer(({study})=>{
    return (
      <Div className="card">
        <Text>{study.cards.length>0?study.cards[study.questionIndex].name:''}</Text>
      </Div>
    )
  }
));