
import React from "react";
import { View, TouchableOpacity, Dimensions, Platform, StyleProp, ViewStyle, Animated } from "react-native";
import { useHeaderHeight } from '@react-navigation/stack';
import DraggableAccordion, { RenderItemParams } from './DraggableAccordion'

const renderItem = ({ item, index, drag, isActive, holderStyle, buttonOnPress, contentStyle, contentOnLayout, onClose }:RenderItemParams<DraggableSection>) => {
  return (
    <View style={holderStyle}>
        <TouchableOpacity activeOpacity={0.7} onPress={buttonOnPress} style={{padding: 10, backgroundColor: '#888'}}>
          {item.header}
        </TouchableOpacity>
        <Animated.View 
          style={contentStyle} 
          onLayout={contentOnLayout}>
          {item.body}
        </Animated.View>
      </View>
  )
}

const renderItemSort = (params:RenderItemParams<DraggableSection>) => {
  return (
        <TouchableOpacity
        style={{
          backgroundColor: params.isActive ? "red" : "white",
          marginRight: Platform.OS == 'web'? 0 : 5,
          alignItems: "center",
          justifyContent: "center",
        }}
        onLongPress={()=>{params.onClose(); params.drag()}}
      >
      {renderItem(params)}
    </TouchableOpacity>
    )
}
const renderItemUnsort = (params:RenderItemParams<DraggableSection>) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginRight: 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {renderItem(params)}
    </View>
  )
}


type Props = {
  children: React.ReactNode,
  header: React.ReactNode[],
  holderStyle?:StyleProp<ViewStyle>,
  scrollEnabled?: boolean, 
  sortEnabled?: boolean, 
  addTitle?: string, 
  addElement?:(data:DraggableSection[])=>DraggableSection,
  dataCallback:(data:React.ReactNode[])=>void
}

export type DraggableSection = {
  header:React.ReactNode
  body:React.ReactNode
}

export default function DraggableFlatListMain(props:Props){
    const headerHeight = useHeaderHeight();
    let _data =  React.Children.toArray(props.children).map((value, index)=>({header:props.header[index] || (<View></View>), body:value}))
    let _itemStyles = props.holderStyle || {}
    let _sortEnabled = (props.sortEnabled === undefined ? true : props.sortEnabled)
    return (<DraggableAccordion<DraggableSection, {}>
        data={_data}  
        dataCallback={props.dataCallback}
        sortEnabled={_sortEnabled}
        scrollEnabled={props.scrollEnabled}
        height={Dimensions.get("window").height - headerHeight}
        holderStyle={props.holderStyle}
        renderItem={_sortEnabled ? renderItemSort : renderItemUnsort}
        keyExtractor={(item:React.ReactNode, index:number) => `main-draggable-item-${index}`}
        addElement={props.addElement}
        addTitle={props.addTitle}
    />)
}