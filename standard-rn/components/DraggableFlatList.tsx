import React ,{ useState, useCallback, useEffect, RefObject } from "react";
import { View, Button } from "react-native";
import { default as _DraggableFlatList, RenderItemParams as _RenderItemParams, DragEndParams } from "react-native-draggable-flatlist";

export type RenderItemParams<T> = _RenderItemParams<T>

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
  scrollDelay?: number
}

function DraggableFlatList<T>(props:Props<T>) {
  const [data, setData] = useState(props.data);
  const [dataLength, setDataLength] = useState(props.data.length);
  const [last, setLast] = useState(props.data.length)
  const [reff, setReff] = useState<RefObject<any>| null>(null)
  const renderItem = useCallback(props.renderItem, [])
  const add = useCallback((data, last) => {
    if (props.addElement !== undefined){
      const _data = data.map((item:T)=>item);
      _data.splice(_data.length, 0, props.addElement(data));
      setData(_data)
      props.dataCallback(_data)
      setLast(_data.length)
    }
  }, [data, last])
  let flatListRef:RefObject<any>;
  useEffect(()=>{
    if (flatListRef !==undefined){
      setReff(flatListRef)
    }
    else if (reff !== null){
      flatListRef = reff
    }
    if (dataLength != data.length){
      if (last == data.length){
        setTimeout(() =>{flatListRef.current?.scrollToEnd()}, props.scrollDelay || 1)
      }
      setDataLength(data.length)
    }
  },[data]);
  return (
    <View style={{ height:props.height }}>
      <_DraggableFlatList
        onRef={(ref)=>{console.log('!', Object.keys(ref).length);flatListRef = ref}}
        scrollEnabled={props.scrollEnabled}
        data={data}
        renderItem={renderItem}
        keyExtractor={props.keyExtractor}
        onDragEnd={({ data }:DragEndParams<T>) => {setData(data);props.dataCallback(data)}}
        activationDistance={props.sortEnabled?0:9999}
        removeClippedSubviews={true}
        windowSize={10 + Math.floor(props.data.length / 2)}
        ListFooterComponent={<Button
          onPress={() => add(data, last)}
          title={props.addTitle || ""}
          color="#888"
        />}
      />
    </View>
  );
}

export default DraggableFlatList;