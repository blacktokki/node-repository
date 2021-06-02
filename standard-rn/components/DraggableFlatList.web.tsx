import React, { useState, useCallback } from "react";
import { View, FlatList, TouchableOpacity, Text, Dimensions } from "react-native";
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

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


const NUM_ITEMS = 10;

function getColor(i: number) {
  const multiplier = 64 / (NUM_ITEMS - 1);
  const colorVal = i * multiplier;
  return `rgb(${colorVal+192}, ${Math.abs(32 - colorVal) + 192}, ${64 - colorVal + 192})`;
}

const exampleData: Item[] = [...Array(20)].map((d, index) => {
  const backgroundColor = getColor(index);
  return {
    key: `item-${backgroundColor}`,
    label: String(index),
    backgroundColor
  };
});

type Item = {
  key: string;
  label: string;
  backgroundColor: string;
};

function Example() {
  const [data, setData] = useState(exampleData);

  const renderItem = useCallback(
    ({item, index, isActive, drag}) => {
      return (<Element key = {index} index={index}>
          <TouchableOpacity
          style={{
            height: 100,
            backgroundColor: isActive ? "red" : item.backgroundColor,
            alignItems: "center",
            justifyContent: "center",
          }}
          onLongPress={drag}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 32,
            }}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      </Element>)
  },
    []
  );

  return (
    <View style={{ height:Dimensions.get("window").height - 64 }}>
      <Results
        data={data}
        renderItem={renderItem}
        keyExtractor={(item:any, index:number) => `draggable-item-${item.key}`}
        onSortEnd={({newIndex, oldIndex}:any) => {const _data = data.map(item=>item); _data.splice(newIndex, 0, _data.splice(oldIndex, 1)[0]); setData(_data)}}
      />
    </View>
  );
}

export default Example;