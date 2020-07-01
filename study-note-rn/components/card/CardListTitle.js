import React from 'react';
import { observer,inject } from 'mobx-react';
import { View, TextInput, Text } from 'react-native';

export default inject('card')(
  observer(({card})=>{
    console.log(card.title)
    function handleTitle(event){
      card.handleTitle(event.target.value)
    }
    return (
      <View className="card title">
        <TextInput type='text' value={card.title}  onChange={handleTitle}/>
        <Text>{card.title}</Text>
      </View>
    )
  }
));