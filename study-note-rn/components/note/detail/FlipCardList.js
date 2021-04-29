import React from 'react';
import { observer,inject } from 'mobx-react';
import { Button, Carousel } from '../../commons';
import {View, Dimensions, FlatList} from 'react-native';
import FlipCardElement  from './FlipCardElement';


export default inject("card")(
  observer(({card})=>{
    const width = Math.round(Dimensions.get('window').width)
    const renderItem = ({item, index})=>{
        return(
        <FlipCardElement
          {...item}
          width={width}
          idx={index}
          onCreate={card.addCard}
          onRemove={card.removeCard}
          onHandle={card.handleCard}
        />)
      }
    return (
        <View data-changed={card.changed} data-length={card.cards.length} style={{flex: 1}}>
            <Carousel
            gap={16}
            offset={36}
            pages={card.cards}
            renderItem = {renderItem}
            pageWidth={width}
            />
        </View>
    );
  }
))