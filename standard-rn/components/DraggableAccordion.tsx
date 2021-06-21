import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Accordion  from './Accordion'
import DraggableFlatList, {RenderItemParams as _RenderItemParams} from './DraggableFlatList'


export type RenderItemOuterParams<T> = _RenderItemParams<T> & {children:React.ReactNode}
export type RenderItemParams<T> = _RenderItemParams<T> 

type Props<T> ={
  height: number,
  addTitle?: string, 
  renderItemOuter?: (params:RenderItemOuterParams<T>)=>React.ReactNode
  addElement?:(data:T[])=>T
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
        <DraggableFlatList<T>
          data={this.props.data}
          dataCallback={()=>{}}
          renderItem={this.draggableRenderItem}
          sortEnabled={false}
          height={this.props.height}
          keyExtractor={(item, index)=>`${index}`}
          addTitle={this.props.addTitle}
          addElement={this.props.addElement}
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
