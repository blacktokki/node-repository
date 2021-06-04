import React, { useState, useCallback } from "react";
import { View, FlatList } from "react-native";
import {SortableContainer, SortableElement, SortEnd} from 'react-sortable-hoc';

const Results = SortableContainer((props:any) => {
    return(
      <FlatList
        renderItem={props.renderItem}
        data={props.data}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews={true}
        initialNumToRender={10}
        legacyImplementation={true}
        //contentContainerStyle={{
        //    flexGrow: 1
        //}}
      />
    )
  });

const Element = SortableElement((props:any) => {
    return(
        <View>
            {props.children}
        </View>
    )
});

export type RenderItemParams<T> = {
  item:T,
  index:number
}

type Props<T> = {
  data:T[],
  renderItem:(params:RenderItemParams<T>)=>React.ReactNode,
  height:number,
  keyExtractor:(item:T, index:number)=>string
}

function DraggableFlatList<T>(props:Props<T>) {
  const [data, setData] = useState(props.data);
  const renderItem = useCallback(
    ({item, index, isActive}) => {
      return (<Element key = {index} index={index}>
          {props.renderItem({item:item, index:index})}
      </Element>)
  },
    []
  );

  return (
    <View style={{ height:props.height }}>
      <Results
        data={data}
        renderItem={renderItem}
        keyExtractor={props.keyExtractor}
        onSortEnd={({newIndex, oldIndex}:SortEnd) => {const _data = data.map((item:T)=>item); _data.splice(newIndex, 0, _data.splice(oldIndex, 1)[0]); setData(_data)}}
      />
    </View>
  );
}

export default DraggableFlatList;