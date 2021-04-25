import React,{ useEffect } from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import { View } from 'react-native';

const Results = SortableContainer((props) => {
    return(
      <View>
        {props.children}
      </View>
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

    const results = props.data.map(
        (item,idx) => (
            <Element key = {idx} index={idx}>
                {props.renderRow({
                    data:item,
                    index:idx,
                    active:true
                })}
            </Element>
        )
    )

    return (
        <Results onSortEnd={props.onSortEnd} distance={5}>
            {results}
        </Results>
    )
}