import React from 'react';
import { observer,inject } from 'mobx-react';
import { View, TextInput, Text } from 'react-native';
import { Div } from '../../commons';

export default inject('study')(
  observer(({study})=>{
    return study.currentNoteId>=0?(
      <Div className="card">
        <Text>{study.cards.length}:{study.questions.length}</Text>
      </Div>
    ):(<Div className="card"/>)
  }
));