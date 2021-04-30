import React from 'react';
import { observer,inject } from 'mobx-react';
import { Button, Carousel } from '../../commons';
import {View, Dimensions} from 'react-native';
import FlipCardElement  from './FlipCardElement';


export default inject("card")(
  observer(({card, screen})=>{
    const width = Math.round(Dimensions.get('window').width) -60
    const renderItem = ({item, index})=>{
        return(
        <FlipCardElement
          {...item}
          width={width}
          screenLength = {screen.length}
          idx={index}
          onCreate={card.addCard}
          onRemove={card.removeCard}
          onHandle={card.handleCard}
        />)
      }
    return (
        <View data-changed={card.changed} data-length={card.cards.length} style={{flex: 1}}>
            <Carousel
            gap={0}//{16}
            offset={0}//{36}
            pages={card.cards}
            renderItem = {renderItem}
            pageWidth={width}
            />
        </View>
    );
  }
))