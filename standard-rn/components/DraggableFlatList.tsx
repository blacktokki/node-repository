import React ,{ useState, useCallback} from "react";
import { View } from "react-native";
import { default as _DraggableFlatList, RenderItemParams as _RenderItemParams, DragEndParams } from "react-native-draggable-flatlist";

export type RenderItemParams<T> = _RenderItemParams<T>

type Props<T> = {
  data:T[],
  renderItem:(params:RenderItemParams<T>)=>React.ReactNode,
  height:number,
  keyExtractor:(item:T, index:number)=>string
}

function DraggableFlatList<T>(props:Props<T>) {
  const [data, setData] = useState(props.data);
  const renderItem = useCallback(props.renderItem, [])
  return (
    <View style={{ height:props.height }}>
      <_DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={props.keyExtractor}
        onDragEnd={({ data }:DragEndParams<T>) => setData(data)}
      />
    </View>
  );
}

export default DraggableFlatList;