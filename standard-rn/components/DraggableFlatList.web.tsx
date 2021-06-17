import React, { useState, useCallback, useRef, useEffect, useMemo } from "react";
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
  scrollEnabled?:boolean,
  sortEnabled:boolean,
  renderItem:(params:RenderItemParams<T>)=>React.ReactNode,
  height:number,
  keyExtractor:(item:T, index:number)=>string,
  addTitle:string | undefined,
  addElement: (data:T[])=> T | undefined
}

function DraggableFlatList<T>(props:Props<T>) {
  const [data, setData] = useState(props.data);
  const [last, setLast] = useState(props.data.length)
  const cacheItem:any = {}
  const renderItem = useCallback(
    ({item, index, isActive}) => {
      if (index in cacheItem && cacheItem[index][0] == item)
        return cacheItem[index][1]
        cacheItem[index] = [item, (<Element key = {index} index={index}>
        {props.renderItem({item:item, index:index})}
      </Element>)]
      return cacheItem[index][1]
      // return (<Element key = {index} index={index}>
      //     {props.renderItem({item:item, index:index})}
      // </Element>)
  },
    []
  );
  const add = useCallback((data, last) => {
    const element = props.addElement(data)
    if (element !== undefined){
      const _data = data.map((item:T)=>item);
      _data.splice(_data.length, 0, element);
      setData(_data)
      setLast(_data.length)
    }
  }, [data, last])
  return (
    <View style={{ height:props.height }}>
      <Results
        data={data}
        renderItem={renderItem}
        keyExtractor={props.keyExtractor}
        onSortEnd={({newIndex, oldIndex}:SortEnd) => {if (newIndex!=oldIndex){const _data = data.map((item:T)=>item); _data.splice(newIndex, 0, _data.splice(oldIndex, 1)[0]); setData(_data)}}}
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