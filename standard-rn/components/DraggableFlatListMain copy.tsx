
import React from "react";
import { View, TouchableOpacity, Dimensions, Platform } from "react-native";
import { useHeaderHeight } from '@react-navigation/stack';
import DraggableAccordion, {RenderItemParams, RenderItemOuterParams} from './DraggableAccordion'
import { RenderItemPartParams } from "./Accordion";

const renderItemSort = ({ item, index, drag, isActive, children }:RenderItemOuterParams<React.ReactNode>) => {
    return (
        <TouchableOpacity
        style={{
          backgroundColor: isActive ? "red" : "white",
          marginRight: Platform.OS == 'web'? 0 : 5,
          alignItems: "center",
          justifyContent: "center",
        }}
        onLongPress={drag}
      >
        {children}
    </TouchableOpacity>
    )
}
const renderItemUnsort = ({ item, index, drag, isActive, children }:RenderItemOuterParams<React.ReactNode>) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginRight: 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </View>
  )
}
const renderItemHeader = ({item, index, drag, isActive}:RenderItemParams<React.ReactNode>) =>{
  return item
}
const renderItemBody = ({item, index, drag, isActive}:RenderItemParams<React.ReactNode>) =>{
  return item
}

type Props = {
  children: React.ReactNode,
  scrollEnabled?: boolean, 
  sortEnabled?: boolean, 
  addTitle?: string, 
  addElement?:(data:React.ReactNode[])=>React.ReactNode,
  dataCallback:(data:React.ReactNode[])=>void
}

export default function DraggableFlatListMain(props:Props){
    const headerHeight = useHeaderHeight();
    let _data = React.Children.toArray(props.children)
    let _sortEnabled = (props.sortEnabled === undefined ? true : props.sortEnabled)
    return (<DraggableAccordion<React.ReactNode, {}>
        sortEnabled={_sortEnabled}
        scrollEnabled={props.scrollEnabled}
        height={Dimensions.get("window").height - headerHeight}
        data={_data}
        dataCallback={props.dataCallback}
        renderItemOuter={_sortEnabled ? renderItemSort : renderItemUnsort}
        keyExtractor={(item:React.ReactNode, index:number) => `main-draggable-item-${index}`}
        addElement={props.addElement}
        addTitle={props.addTitle}
    />)
}