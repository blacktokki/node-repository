import React ,{ useState, useCallback, useEffect, useRef, RefObject} from "react";
import { View, Button, FlatList } from "react-native";
import { default as _DraggableFlatList, RenderItemParams as _RenderItemParams, DragEndParams } from "react-native-draggable-flatlist";

export type RenderItemParams<T> = _RenderItemParams<T>

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
  const [dataLength, setDataLength] = useState(props.data.length);
  const [last, setLast] = useState(props.data.length)
  const [reff, setReff] = useState<RefObject<any>| null>(null)
  const renderItem = useCallback(props.renderItem, [])
  const add = useCallback((data, last) => {
    const element = props.addElement(data)
    if (element !== undefined){
      const _data = data.map((item:T)=>item);
      _data.splice(_data.length, 0, element);
      setData(_data)
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
        setTimeout(() =>{flatListRef.current?.scrollToEnd()}, 1)
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
        onDragEnd={({ data }:DragEndParams<T>) => setData(data)}
        activationDistance={props.sortEnabled?0:9999}
        removeClippedSubviews={true}
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