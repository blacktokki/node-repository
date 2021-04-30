import React,{ useEffect } from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import { View, FlatList } from 'react-native';

const Results = SortableContainer((props) => {
    return(
      <FlatList
        renderItem={props.renderItem}
        data={props.data}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews={true}
        initialNumToRender={10}
        legacyImplementation={true}
        contentContainerStyle={{
            flexGrow: 1
        }}
      />
    )
  });

const Element = SortableElement((props) => {
    return(
        <View>
            {props.children}
        </View>
    )
});

export default (props)=>{
    useEffect(()=>{
        props.checkScroll(() => window.scrollTo(0,document.body.scrollHeight))
    });

    const renderItem = ({item, index}) => {
        return (<Element key = {index} index={index}>
            {props.renderRow({
                data:item,
                index:index,
                active:true
            })}
        </Element>)
    }

    return (
        <Results onSortEnd={props.onSortEnd} distance={5} renderItem={renderItem} data={props.data}></Results>
    )
}