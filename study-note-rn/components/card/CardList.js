import React from 'react';
import { observer,inject } from 'mobx-react';
import SortableList from '../commons/SortableList';
import { Button, ScrollView } from 'react-native';
import CardElement  from './CardElement';

export default inject("card")(
  observer(({card})=>{
    const checkScroll = (action) => {
      if(card.is_scroll){
        action()
        card.is_scroll = false
      }
    };
    
    const onSortEnd = ({oldIndex, newIndex}) => {
      card.replaceCard(oldIndex, newIndex)
    };

    const renderRow = ({index, item, active})=>{
      return(
      <CardElement 
        {...item}
        idx={index}
        onCreate={card.addCard}
        onRemove={card.removeCard}
        onHandle={card.handleCard}
      />)
    }

    return (
    <ScrollView data-changed={card.changed}>
      <SortableList
        checkScroll={checkScroll}
        onSortEnd={onSortEnd}
        data = {card.cards}
        renderRow = {renderRow}
        style={{flex: 1}}
      />
      <Button onPress={(event) => {card.addCard(card.cards.length);}} title="+++" style={{flex: 1}}/>
    </ScrollView>
    );
  }
))