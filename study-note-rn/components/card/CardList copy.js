import React,{ useEffect } from 'react';
import { observer,inject } from 'mobx-react';
import SortableList from '../commons/SortableList';
import { View, Button, Text } from 'react-native';
import CardElement  from './CardElement';

export default inject("card")(
  observer(({card})=>{
    const onSortEnd = ({oldIndex, newIndex}) => {
      card.replaceCard(oldIndex, newIndex)
    };
    /*
    const results = card.cards.map(
      (item,idx) => (
        <CardElement
          {...item}
          key={idx}
          index={idx}
          idx={idx}
          onCreate={card.addCard}
          onRemove={card.removeCard}
          onHandle={card.handleCard}
        />
      )
    )
    */
    const results = {}
    card.cards.forEach((item,idx) => {
      results[idx]=item
    });

    useEffect(() => {
      if(card.is_scroll){
        //window.scrollTo(0,document.body.scrollHeight);
        //scrollView.current.scrollToEnd({animated: true})
        card.is_scroll = false
      }
    });

    return (
    <View data-changed={card.changed}>
      <SortableList
        data={results}
        renderRow={(data,active)=>{
          return (<Text>xx</Text>)
        }}
      />
      <Button onPress={(event) => {card.addCard(card.cards.length);}} title="+++"/>
    </View>
    );
  }
))