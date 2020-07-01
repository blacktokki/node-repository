import React,{ useEffect } from 'react';
import { observer,inject } from 'mobx-react';
import {SortableContainer} from 'react-sortable-hoc';
import { View, Button } from 'react-native';
import CardNew  from './CardElement';

const Results = SortableContainer((props) => {
  return(
    <View>
      {props.children}
    </View>
  )
});

export default inject("card")(
  observer(({card})=>{
    const onSortEnd = ({oldIndex, newIndex}) => {
      card.replaceCard(oldIndex, newIndex)
    };
    
    const results = card.cards.map(
      (item,idx) => (
        <CardNew 
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

    useEffect(() => {
      if(card.is_scroll){
        window.scrollTo(0,document.body.scrollHeight);
        card.is_scroll = false
      }
    });

    return (
    <View data-changed={card.changed}>
      <Results onSortEnd={onSortEnd}>
        {results}
      </Results>
      <Button onPress={(event) => {card.addCard(card.cards.length);}} title="+++"/>
    </View>
    );
  }
))