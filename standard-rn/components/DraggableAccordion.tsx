import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Accordion, {RenderItemParams as AccordionRenderItemParams, Accordion_Panel, renderItemInnerParams}  from './Accordion'
import DraggableFlatList, {RenderItemParams as _RenderItemParams} from './DraggableFlatList'

export type RenderItemParams<T> = _RenderItemParams<T> & AccordionRenderItemParams<T>

type Props<T> ={
  dataCallback:(data:T[])=>void,
  height: number,
  addTitle?: string,
  sortEnabled:boolean,
  renderItem:(params:RenderItemParams<T>)=>React.ReactNode
  addElement?:(data:T[])=>T,
  horizontal?: boolean | null
}

export default class DraggableAccordion<T, P> extends Accordion<T, RenderItemParams<T> ,Props<T> & P>{
  initExpanded:boolean = false

  renderDraggableItem = (params:_RenderItemParams<T>) => this.renderItem({...params, initExpanded:this.initExpanded} as RenderItemParams<T> & {initExpanded:boolean})
  componentDidMount(){
    this.initExpanded = true
  }
  updateBeforeSortStart = ()=>{
    this.childrenRef.forEach((ref) => {
      if (ref && ref.state.expanded){
        ref.onClose(()=>{})
      }
    });
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <DraggableFlatList<T>
          data={this.props.data}
          dataCallback={this.props.dataCallback}
          renderItem={this.renderDraggableItem}//1
          sortEnabled={this.props.sortEnabled}
          height={this.props.height}
          keyExtractor={(item, index)=>`${index}`}
          addTitle={this.props.addTitle}
          addElement={this.props.addElement}
          scrollDelay={this.expandSpeed * 2}
          horizontal={this.props.horizontal}
          updateBeforeSortStart={this.updateBeforeSortStart}
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
