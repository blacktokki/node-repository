import React from 'react';
import { observer,inject } from 'mobx-react';
import { View, TextInput, Text } from 'react-native';
import { Div } from '../../commons';

export default inject('study')(
  observer(({study})=>{
    return (
      <Div className="card">
        <Text>{study.remains.length}:{study.correctOnces.length}:{study.notRemains.length}</Text>
        <Text>{study.question?study.question.name:''}</Text>
      </Div>
    )
  }
));