import React from 'react';
import { observer,inject } from 'mobx-react';
import { View, TextInput, Text } from 'react-native';
import { Div } from '../commons';

export default inject('card')(
  observer(({card})=>{
    //console.log(card.title)
    function handleTitle(event){
      card.handleTitle(event.target ? event.target.value : event)
    }
    return (
      <Div className="card">
        <TextInput style={{backgroundColor:'white'}} type='text' value={card.title} onChangeText={handleTitle}/>
        <Text>{card.title}</Text>
      </Div>
    )
  }
));