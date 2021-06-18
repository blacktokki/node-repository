import React, { useState, useCallback, useRef, useEffect, MutableRefObject } from "react";
import { View, FlatList, Button } from "react-native";
import {SortableContainer, SortableElement, SortEnd} from 'react-sortable-hoc';

const Results = SortableContainer((props:any) => {
    const [dataLength, setDataLength] = useState(props.data.length)
    const ref = useRef<FlatList>(null)
    useEffect(()=>{
      if (dataLength != props.data.length){
        if (props.last == props.data.length){
          setTimeout(() =>{ref.current?.scrollToEnd()}, 0.5 * props.data.length)
        }
        setDataLength(props.data.length)
      }
    });
    return(
      <FlatList
        ref={ref}
        renderItem={props.renderItem}
        data={props.data}
        scrollEnabled={props.scrollEnabled}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews={true}
        windowSize={Math.floor(props.data.length / 2)}
        ListFooterComponent={props.ListFooterComponent}
        //contentContainerStyle={{
        //    flexGrow: 1
        //}}
      />
    )
  });

const Element = SortableElement((props:any) => {
    return props.children
});

export type RenderItemParams<T> = {
  item:T,
  index:number
}

type Props<T> = {
  data:T[],
  dataCallback:(data:T[])=>void,
  scrollEnabled?:boolean,
  sortEnabled:boolean,
  renderItem:(params:RenderItemParams<T>)=>React.ReactNode,
  height:number,
  keyExtractor:(item:T, index:number)=>string,
  addTitle:string | undefined,
  addElement?: (data:T[])=> T
}

function DraggableFlatList<T>(props:Props<T>) {
  const [data, setData] = useState(props.data);
  const [last, setLast] = useState(props.data.length)
  const cacheItem = useRef<{[index: number]:[T, React.ReactNode]}>({}) 
  const renderItem = useCallback(
    ({item, index, isActive}) => {
      if (index in cacheItem.current && cacheItem.current[index][0] == item)
        return cacheItem.current[index][1]
        cacheItem.current[index] = [item, (<Element key = {index} index={index}>
        {props.renderItem({item:item, index:index})}
      </Element>)]
      return cacheItem.current[index][1]
  },
    []
  );
  const add = useCallback((data, last) => {
    if (props.addElement !== undefined){
      const _data = data.map((item:T)=>item);
      _data.splice(_data.length, 0, props.addElement(data));
      setData(_data)
      props.dataCallback(_data)
      setLast(_data.length)
    }
  }, [data, last])
  return (
    <View style={{ height:props.height }}>
      <Results
        data={data}
        renderItem={renderItem}
        keyExtractor={props.keyExtractor}
        onSortEnd={({newIndex, oldIndex}:SortEnd) => {if (newIndex!=oldIndex){const _data = data.map((item:T)=>item); _data.splice(newIndex, 0, _data.splice(oldIndex, 1)[0]); setData(_data); props.dataCallback(_data)}}}
        distance={props.sortEnabled ? 5 : 99999}
        scrollEnabled={props.scrollEnabled}
        ListFooterComponent={<Button
          onPress={()=>add(data, last)}
          title={props.addTitle || ""}
          color="#888"
        />}
    last={last}
  />
    </View>
  );
}

export default DraggableFlatList;