import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Accordion  from './Accordion'
import DraggableFlatList, {RenderItemParams as _RenderItemParams} from './DraggableFlatList'


export type RenderItemOuterParams<T> = _RenderItemParams<T> & {children:React.ReactNode}
export type RenderItemParams<T> = _RenderItemParams<T> 

type Props<T> ={
  height: number,
  renderItemOuter?: (params:RenderItemOuterParams<T>)=>React.ReactNode
}

export default class DraggableAccordion<T, P> extends Accordion<T, RenderItemParams<T> ,Props<T> & P>{
  draggableRenderItem = (params:_RenderItemParams<T>) => {
    if (this.props.renderItemOuter)
      return this.props.renderItemOuter({
          ...params,
          children:this.renderItem(params.item, params.index || -1)
        })
    return this.renderItem(params.item, params.index || -1)
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <DraggableFlatList
          data={this.props.data}
          dataCallback={()=>{}}
          renderItem={this.draggableRenderItem}
          sortEnabled={false}
          height={this.props.height}
          keyExtractor={(item, index)=>`${index}`}
          addTitle=''
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  }
});
