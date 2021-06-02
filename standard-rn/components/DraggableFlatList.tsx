import React, { useState, useCallback } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";

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
    ({ item, index, drag, isActive }: RenderItemParams<Item>) => {
      return (
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
      );
    },
    []
  );

  return (
    <View style={{ height:Dimensions.get("window").height - 64 }}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
        onDragEnd={({ data }) => setData(data)}
      />
    </View>
  );
}

export default Example;