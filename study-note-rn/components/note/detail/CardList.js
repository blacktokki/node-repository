import React from 'react';
import { observer,inject } from 'mobx-react';
import { Button, SortableList } from '../../commons';
import {View} from 'react-native';
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
    const onDataChange = (data) => {
      card.handleCards(data)
    }

    const renderRow = ({index, data, active})=>{
      return(
      <CardElement 
        {...data}
        idx={index}
        onCreate={card.addCard}
        onRemove={card.removeCard}
        onHandle={card.handleCard}
      />)
    }

    return (
    <View data-changed={card.changed} data-length={card.cards.length}>
      <SortableList
        scrollRef={card.root._ref.scrollRef}
        checkScroll={checkScroll}
        onSortEnd={onSortEnd}
        onDataChange={onDataChange}
        data = {card.cards}
        renderRow = {renderRow}
        childrenHeight={180}
      />
      <Button onPress={(event) => {card.addCard(card.cards.length);}} title="+++" style={{height:100}}/>
    </View>
    );
  }
))